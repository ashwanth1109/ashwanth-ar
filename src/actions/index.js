// @flow

export const setViewport = (w, h) => ({
  type: "SET_APP_DIMENSIONS",
  payload: { w, h }
});
