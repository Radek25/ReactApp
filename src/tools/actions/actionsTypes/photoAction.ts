import {Dispatch} from 'redux';
import { ISinglePicture } from './../../InterfacesOfAPIData/picture';
import {getCurrentPhoto} from '../../DataFromAPI/DefaultAPI';
import * as actionTypes from "../actionsTypes/photoTypes";

export const getPhoto = (): Promise<ISinglePicture[]> => (async (dispatch : Dispatch) => {
    const photo = await getCurrentPhoto();

    dispatch({
        type: actionTypes.GET_PHOTO,
        photo
    })
}) as any;