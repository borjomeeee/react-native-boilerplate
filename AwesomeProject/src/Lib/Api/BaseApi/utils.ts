export const sideEffect = (handler: (e: Error) => void) => (e: Error) => {
  handler(e);
  throw e;
};
