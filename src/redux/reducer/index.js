import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({
  globalReducer,
  photoReducer,
  registerReducer,
});

export default reducer;
