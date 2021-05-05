import {ISinglePost} from '../../InterfacesOfAPIData/post';

export const GET_POST = "GET_POST";

export interface IPostTypes {
  GET_POST: {
    post: ISinglePost
  };
}
