/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any): item is object {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(
  target: Record<string, any>,
  ...sources: Record<string, any>[]
): any {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!(target as any)[key]) {
          Object.assign(target, {[key]: {}});
        }
        mergeDeep((target as any)[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export const compose =
  (...funcs: Function[]) =>
  (...args: any[]) =>
    funcs.reduceRight((a, b) => b(a(...args)));
