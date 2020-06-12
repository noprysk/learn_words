import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
});
export default allReducers;
