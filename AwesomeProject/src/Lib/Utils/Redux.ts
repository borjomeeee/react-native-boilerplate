import {
  AnyAction,
  createAction,
  PayloadActionCreator,
  PrepareAction,
} from '@reduxjs/toolkit';

export const isSameAction = <T extends AnyAction>(
  action1: T,
  action2: AnyAction,
): action2 is T => action1.type === action2.type;

export const actionCreator =
  (name: string) =>
  <PA extends PrepareAction<any>>(
    type: string,
    prepareAction?: PA,
  ): PayloadActionCreator<ReturnType<PA>['payload'], string, PA> => {
    if (prepareAction) {
      return createAction(`[${name}] ` + type, prepareAction);
    } else {
      return createAction(`[${name}] ` + type) as PayloadActionCreator<
        ReturnType<PA>['payload'],
        string,
        PA
      >;
    }
  };
