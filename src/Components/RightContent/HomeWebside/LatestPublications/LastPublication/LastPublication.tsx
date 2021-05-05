import React, {FC} from 'react'

//Icons Import
import WritingPerson from '../../../../../icons/writeperson.jpg';
//Styled Import
import {LastPublicationWrapper} from './LastPublicationStyled';
//Components Import
import {DatePhotoName} from '../../../../Common/DatePhotoName/DatePhotoName';
import { ISinglePost } from '../../../../../tools/InterfacesOfAPIData/post';

interface PostData{
    post: ISinglePost;
}

export const LastPublication: FC<PostData> = (props) =>{
    return(
        <LastPublicationWrapper>
            <img className = 'writing-person' src = {WritingPerson}/>
            <div className = 'content-of-publication'>
                <p className = 'note-content'>{props.post.title}</p>
                <DatePhotoName/>
            </div>
        </LastPublicationWrapper>
    );
};