import { ISingleComment } from './../../InterfacesOfAPIData/comment';

export const GET_COMMENT = "GET_COMMENT";

export interface ICommentTypes {
  GET_COMMENT: {
    comment: ISingleComment
  };
}
