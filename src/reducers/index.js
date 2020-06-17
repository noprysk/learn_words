import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
  auth: authReducer,
  form: formReducer,
});
export default allReducers;
