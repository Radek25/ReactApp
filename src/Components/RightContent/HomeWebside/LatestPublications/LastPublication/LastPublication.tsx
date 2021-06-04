import React, {FC, useEffect} from 'react'

//Icons Import
import WritingPerson from '../../../../../icons/writeperson.jpg';
//Styled Import
import {LastPublicationWrapper} from './LastPublicationStyled';
//Components Import
import {DatePhotoName} from '../../../../Common/DatePhotoName/DatePhotoName';
import { ISinglePost } from '../../../../../tools/InterfacesOfAPIData/post';
interface IPostData{
    post: ISinglePost;
}

export const LastPublication: FC<IPostData> = (props) =>{
    return(
        <LastPublicationWrapper>
            <img className = 'main-photo-of-single-piblication' src = {props.post.picturePost.url}/>
            <div className='content-of-single-publication'>
                <p>{(props.post.body).charAt(0).toUpperCase() + props.post.body.slice(1, 130)} . . .</p>
                <DatePhotoName post = {props.post}/>
            </div>
        </LastPublicationWrapper>
    );
};