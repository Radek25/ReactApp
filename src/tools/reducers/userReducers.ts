import { GET_POST, IPostTypes } from './../actions/actionsTypes/postTypes';
import { ISinglePost } from './../InterfacesOfAPIData/post';
import { ISingleUser } from "../InterfacesOfAPIData/user";
import * as actionTypes from "../actions/actionsTypes/userTypes";

export interface IUserReducer {
  CurrentUser: ISingleUser | null;
  CurrentPost: ISinglePost[] | null
}

const defaultState = (): IUserReducer => ({
  CurrentUser: null,
  CurrentPost: null
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
    default: {
      return state;
    }
  }
};
