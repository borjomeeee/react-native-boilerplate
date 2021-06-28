import AbortController from 'node-abort-controller';
import {NetworkError} from './exceptions';
import {compose, mergeDeep} from './helpers';

export class BaseApiService {
  _baseUri: string;
  _defaultOptions: ApiRequestDefaultOptions = {
    timeout: 100,
  };

  constructor(baseUri: string, options?: ApiRequestDefaultOptions) {
    this._baseUri = baseUri;
    this._defaultOptions = mergeDeep(this._defaultOptions, options || {});
  }

  get(url: string, options?: ApiRequestOptions) {
    return this._request(url, 'GET', options);
  }

  post(url: string, options?: ApiRequestOptions) {
    return this._request(url, 'POST', options);
  }

  async _request(
    url: string,
    method: RequestMethod,
    options?: ApiRequestOptions,
  ) {
    const requestOptions: ApiRequestOptions = mergeDeep(
      this._defaultOptions,
      options || {},
    );

    const {timeout, headers = {}, data = {}, params = {}} = requestOptions;
    const urlWithParams = this._appendParams(this._baseUri + url, params);

    try {
      const abortController = new AbortController();
      setTimeout(() => abortController.abort(), timeout);

      return await fetch(urlWithParams, {
        method: method,
        headers: new Headers(headers),
        body: method !== 'GET' ? JSON.stringify(data) : undefined,
        signal: abortController.signal as any,
      });
    } catch (e) {
      throw new NetworkError(e.message);
    }
  }

  _appendParams(url: string, params: Record<string, string>) {
    let filteredParams = compose(
      (entries: [string, string][]) =>
        entries.filter(([_, value]) => value.length),
      Object.entries,
    )(params) as never as string[][];

    if (filteredParams.length === 0) {
      return url;
    }
    return [url, new URLSearchParams(filteredParams)].join('?');
  }
}

// -------- TYPES --------

type RequestMethod = 'GET' | 'POST';

interface ApiRequestDefaultOptions {
  timeout?: number;
}

interface ApiRequestOptions extends ApiRequestDefaultOptions {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  data?: object | string;
}
