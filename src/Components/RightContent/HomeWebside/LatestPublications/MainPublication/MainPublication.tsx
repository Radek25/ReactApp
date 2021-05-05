import React, {FC} from 'react'

//Styled Import
import {MainPublicationWrapper} from './MainPublicationStyled';

//Components Import
import {DatePhotoName} from '../../../../Common/DatePhotoName/DatePhotoName';

import { ISinglePost } from '../../../../../tools/InterfacesOfAPIData/post';
interface PostData{
    post: ISinglePost;
}

export const MainPublication: FC<PostData> = (props) =>{
    return(
        <MainPublicationWrapper>
            <p>{props.post.title}</p>
            <DatePhotoName/>
        </MainPublicationWrapper>
    );
};