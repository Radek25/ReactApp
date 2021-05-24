import { GET_POST, IPostTypes } from '../actions/actionsTypes/postTypes';
import { ISinglePost } from '../InterfacesOfAPIData/post';
import { ISingleUser } from "../InterfacesOfAPIData/user";
import * as actionTypes from "../actions/actionsTypes/userTypes";
import { GET_COMMENT, ICommentTypes } from './../actions/actionsTypes/commentTypes';
import { ISingleComment } from './../InterfacesOfAPIData/comment';
import { ISinglePicture } from './../InterfacesOfAPIData/picture';
import {GET_PHOTO, IPhotoTypes} from './../actions/actionsTypes/photoTypes';

export interface IDataFromAPI {
  CurrentUser: ISingleUser | null;
  CurrentPost: ISinglePost[] | null;
  CurrentComment: ISingleComment [] | null;
  CurrentPhoto: ISinglePicture[] | null;
}

const defaultState = (): IDataFromAPI => ({
  CurrentUser: null,
  CurrentPost: null,
  CurrentComment: null,
  CurrentPhoto: null
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_USER: {
      const payload: actionTypes.IUserTypes["GET_USER"] = action;
      return {
        ...state,
        CurrentUser: payload.user,
      };
    }
    case GET_POST: {
      const payload:IPostTypes["GET_POST"] = action;
      return{
        ...state,
        CurrentPost: payload.post,
      }
    }
    case GET_COMMENT: {
      const payload:ICommentTypes["GET_COMMENT"] = action;
      return{
        ...state,
        CurrentComment: payload.comment,
      }
    }
    case GET_PHOTO: {
      const payload:IPhotoTypes["GET_PHOTO"] = action;
      return{
        ...state,
        CurrentPhoto: payload.photo,
      }
    }
    default: {
      return state;
    }
  }
};
