import React, {FC} from 'react'

//Styled Import
import {DatePhotoNameWrapper} from './DatePhotoNameStyled';

import { ISinglePost } from '../../../tools/InterfacesOfAPIData/post';

interface IPostData{
    post: ISinglePost;
}


export const DatePhotoName: FC<IPostData> = (props) =>{
    return(
        <DatePhotoNameWrapper>
            <p>{Math.floor(Math.random() * 20) + 1} jan. 2020</p>
            <img src = {props.post.photoPost?.url} alt='UserPhoto'/>
            <p>{props.post.userPost?.name}</p>
        </DatePhotoNameWrapper>
    );
};