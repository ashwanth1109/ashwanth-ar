// @flow

export const setCollapsibleMenu = (show: boolean) => ({
  type: "SET_COLLAPSIBLE_MENU",
  payload: show
});

export const toggleCollapsibleMenu = () => ({
  type: "TOGGLE_COLLAPSIBLE_MENU",
  payload: {}
});
