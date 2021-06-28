import {actionCreator} from '@Lib/Utils/Redux';

const createAction = actionCreator('common');

export const add = createAction('add');
export const subscribeTestNotification = createAction(
  'subscribe test notification',
);
