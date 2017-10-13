import { combineReducers } from 'redux';
import user from './login';
import search from './search';

export default combineReducers({
    user: user,
    search: search,
});