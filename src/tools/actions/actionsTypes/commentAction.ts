import {Dispatch} from 'redux';
import {ISingleComment} from '../../InterfacesOfAPIData/comment';
import {getCurrentComment, getUsersToComment} from '../../DataFromAPI/DefaultAPI';
import * as actionTypes from "../actionsTypes/commentTypes";

export const getComment = (): Promise<ISingleComment[]> => (async (dispatch : Dispatch) => {
    const comment = await getCurrentComment();
    const userToComment = await getUsersToComment();

    for (let index = 0; index < userToComment.length; index++) {
        for (let j = ((comment.length/userToComment.length)*index); j < ((comment.length/userToComment.length)*(index+1)); j++) {
            comment[j].UserComment = userToComment[index];
        }
    }
    dispatch({
        type: actionTypes.GET_COMMENT,
        comment
    })
}) as any;