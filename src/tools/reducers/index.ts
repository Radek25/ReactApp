import { combineReducers } from 'redux';

import user, {IUserReducer} from './userReducers';
export default combineReducers({
    user,
})

export interface IState{
    user: IUserReducer;
}