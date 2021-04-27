import React, {FC} from 'react'

//Icons Import
import WritingPerson from '../../../../../icons/writeperson.jpg';
//Styled Import
import {LastPublicationWrapper} from './LastPublicationStyled';
//Components Import
import {DatePhotoName} from '../../../../Common/DatePhotoName/DatePhotoName';

export const LastPublication: FC = () =>{
    return(
        <LastPublicationWrapper>
            <img className = 'writing-person' src = {WritingPerson}/>
            <div className = 'content-of-publication'>
                <p className = 'note-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatibus ipsam ullam commodi. Ipsa aut voluptatibus ipsam.</p>
                <DatePhotoName/>
            </div>
        </LastPublicationWrapper>
    );
};