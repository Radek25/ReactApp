import React, {FC} from 'react'

//Styled Import
import { TopOptionsWrapper } from './TopOptionsStyled';

//Icon Import
import Message from '../../../../../icons/message.png'
import File from '../../../../../icons/file-invoice.png'
import Briefcase from '../../../../../icons/briefcase.png'
import Cross from '../../../../../icons/cross-profile.png'

export const TopOptions: FC = () => {
    const TopOptionsArray = [
        {Icon: Message, Title: 'Message'},
        {Icon: File, Title: 'Create a request'},
        {Icon: Briefcase, Title: 'Add a cluster'}
    ];
    return(
        <TopOptionsWrapper>
            <ul>{TopOptionsArray.map(TopOptionsArray =><li><img src={TopOptionsArray.Icon}/> <p>{TopOptionsArray.Title}</p></li>)}</ul>
            <img className= 'close-cross-icon' src= {Cross}/>
        </TopOptionsWrapper>
    )
}