import {combineReducers} from 'redux';
import loginReducer from './loginReducer.js';

const allReducers = combineReducers({
  login: loginReducer,
});
export default allReducers;
