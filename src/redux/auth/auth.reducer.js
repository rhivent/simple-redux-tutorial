import { GET_AUTH,SET_AUTH,CLEAR_AUTH } from './auth.constant';
import LStorageService from "../../utils/localstorage";

const initialState = {
  auth : {}
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      let newData = Object.assign({},state, {
        auth : {...state.auth, ...payload}
      });
      // newData will return Object of Object { key : { ... } }
      // console.log(type,payload,newData);
      LStorageService.setToken(payload);
      return newData;
    case GET_AUTH:
      return LStorageService.getToken;
    case CLEAR_AUTH:
      return LStorageService.clearToken;
    default:
      return state;
  }
}

export default authReducer;
