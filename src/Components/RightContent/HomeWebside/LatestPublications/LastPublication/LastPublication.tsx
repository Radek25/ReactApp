import React, {FC} from 'react'
import { Link } from 'react-router-dom';

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
            <img className = 'main-photo-of-single-piblication' src = {props.post.picturePost.url} alt='PublicationPhoto'/>
            <div className='content-of-single-publication'>
                <Link to = {'/test'}><p>{(props.post.body).charAt(0).toUpperCase() + props.post.body.slice(1, 130)} . . .</p></Link>
                <DatePhotoName post = {props.post}/>
            </div>
        </LastPublicationWrapper>
    );
};