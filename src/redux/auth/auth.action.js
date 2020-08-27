import { GET_AUTH,SET_AUTH,CLEAR_AUTH } from "./auth.constant";

export const getAuth = () => {
  return { type : GET_AUTH };
};
export const setAuth = payload => {
  return { type : SET_AUTH, payload };
};
export const clearAuth = () => {
  return { type : CLEAR_AUTH };
};