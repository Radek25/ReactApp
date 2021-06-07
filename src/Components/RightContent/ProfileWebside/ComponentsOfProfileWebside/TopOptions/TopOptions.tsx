import React, {FC} from 'react'
import { Link } from 'react-router-dom';

//Styled Import
import { TopOptionsWrapper } from './TopOptionsStyled';

//Icon Import
import Message from '../../../../../icons/message.png'
import File from '../../../../../icons/file-invoice.png'
import Briefcase from '../../../../../icons/briefcase.png'
import Cross from '../../../../../icons/cross-profile.png'

export const TopOptions: FC = () => {
    const TopOptionsArray = [
        {Id: 1, Icon: Message, Title: 'Message'},
        {Id: 2, Icon: File, Title: 'Create a request'},
        {Id: 3, Icon: Briefcase, Title: 'Add a cluster'}
    ];

    return(
        <TopOptionsWrapper>
            <ul>{TopOptionsArray.map(TopOptionsArray =><Link key={TopOptionsArray.Id} to = {'/test'}><li><img src={TopOptionsArray.Icon} alt='IconOfOtion'/> <p>{TopOptionsArray.Title}</p></li></Link>)}</ul>
            <Link to = {'/test'}><img className= 'close-cross-icon' src= {Cross} alt='IconDeleteCross'/></Link>
        </TopOptionsWrapper>
    )
}