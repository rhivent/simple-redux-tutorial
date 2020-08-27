import {createStore,combineReducers} from 'redux'; 
import listReducer from '../list/list.reducer';
import authReducer from "../auth/auth.reducer";

const rootReducer = combineReducers({
  articles:listReducer,
  auth:authReducer,
});
const store = createStore(rootReducer);

export default store;
