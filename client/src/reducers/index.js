import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer
        //  So if we want to create other reducers, we have to import them and add them below like this:
        // auth: authReducer
})