import {Dispatch} from 'redux';
import {ISinglePost} from '../../InterfacesOfAPIData/post';
import {getCurrentPost, getUsers, getPhotos} from '../../DataFromAPI/DefaultAPI';
import * as actionTypes from "../actionsTypes/postTypes";

export const getPost = (): Promise<ISinglePost[]> => (async (dispatch : Dispatch) => {
    const post = await getCurrentPost(1, 4);
    const userToPost = await getUsers(4);
    const photoToPost = await getPhotos(1, 4);

    for (let index = 0; index < post.length; index++) {
        post[index].userPost = userToPost[index];
        post[index].photoPost = photoToPost[index];
    }

    console.log(post);
    dispatch({
        type: actionTypes.GET_POST,
        post
    })
}) as any;