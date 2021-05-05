import {Dispatch} from 'redux';
import * as actionTypes from './userTypes';
import {ISingleUser} from '../../InterfacesOfAPIData/user'
import { getCurrentUser, getUserPictures } from '../../DataFromAPI/DefaultAPI';

export const getUser = (): Promise<ISingleUser[]> => (async (dispatch : Dispatch) => {
    const user = await getCurrentUser(1);
    const photo = await getUserPictures(1);
    
    user.photo = photo;

    dispatch({
        type: actionTypes.GET_USER,
        user
    });

}) as any;