import {Dispatch} from 'redux';
import {ISinglePost} from '../../InterfacesOfAPIData/post';
import {getCurrentPost, getUsersToPost, getPhotosToPost, getPicturesToPost} from '../../DataFromAPI/DefaultAPI';
import * as actionTypes from "../actionsTypes/postTypes";

export const getPost = (): Promise<ISinglePost[]> => (async (dispatch : Dispatch) => {
    const post = await getCurrentPost(1, 4);
    const userToPost = await getUsersToPost(4);
    const photoToPost = await getPhotosToPost(1, 4);
    const pictureToPost = await getPicturesToPost(2);

    for (let index = 0; index < post.length; index++) {
        post[index].userPost = userToPost[index];
        post[index].photoPost = photoToPost[index];
        post[index].picturePost = pictureToPost[index];
    }

    dispatch({
        type: actionTypes.GET_POST,
        post
    })
}) as any;