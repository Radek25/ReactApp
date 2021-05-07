import { GET_POST, IPostTypes } from '../actions/actionsTypes/postTypes';
import { ISinglePost } from '../InterfacesOfAPIData/post';
import { ISingleUser } from "../InterfacesOfAPIData/user";
import * as actionTypes from "../actions/actionsTypes/userTypes";
import { ISinglePicture } from '../InterfacesOfAPIData/picture';
import { GET_COMMENT, ICommentTypes } from './../actions/actionsTypes/commentTypes';
import { ISingleComment } from './../InterfacesOfAPIData/comment';

export interface IDataFromAPI {
  CurrentUser: ISingleUser | null;
  CurrentPost: ISinglePost[] | null;
  CurrentComment: ISingleComment [] | null
}

const defaultState = (): IDataFromAPI => ({
  CurrentUser: null,
  CurrentPost: null,
  CurrentComment: null
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
    default: {
      return state;
    }
  }
};
