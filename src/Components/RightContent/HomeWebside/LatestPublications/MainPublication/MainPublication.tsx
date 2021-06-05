import React, {FC} from 'react'
import { Link } from 'react-router-dom';

//Styled Import
import {MainPublicationWrapper} from './MainPublicationStyled';

//Components Import
import {DatePhotoName} from '../../../../Common/DatePhotoName/DatePhotoName';

import { ISinglePost } from '../../../../../tools/InterfacesOfAPIData/post';
interface IPostData{
    post: ISinglePost;
}

export const MainPublication: FC<IPostData> = (props) =>{
    return(
        <MainPublicationWrapper photo={props.post.picturePost.url}>
            <Link to = {'/test'}>
            <p>{(props.post.body).charAt(0).toUpperCase() + props.post.body.slice(1, 100)}</p>
            <DatePhotoName post ={props.post}/>
            </Link>
        </MainPublicationWrapper>
    );
};