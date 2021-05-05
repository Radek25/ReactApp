import { combineReducers } from 'redux';

import DataFromAPI, {IDataFromAPI} from './DataFromAPIReducers';
export default combineReducers({
    DataFromAPI,
})

export interface IState{
    DataFromAPI: IDataFromAPI;
}