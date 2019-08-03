// @flow

export const setViewport = (w: number, h: number) => ({
  type: "SET_APP_DIMENSIONS",
  payload: { w, h }
});
