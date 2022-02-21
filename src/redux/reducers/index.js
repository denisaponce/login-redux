import { combineReducers } from 'redux';
import { darkModeReducer } from './themeReducers';
import { userLoginReducer } from './userReducers';

const reducer = combineReducers({
  // listar los reducers
  darkMode: darkModeReducer,
  userLogin: userLoginReducer,
});

export default reducer;