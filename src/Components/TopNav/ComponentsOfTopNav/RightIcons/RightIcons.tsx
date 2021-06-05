import React, {FC} from 'react';

//StyledImport
import {RightIconsWrapper} from '../RightIcons/RightIconsStyled';

//Icons Import
import House from '../../../../icons/house.png';
import Message from '../../../../icons/comments.png';
import Bell from '../../../../icons/bell.png';
import { Link } from 'react-router-dom';

export const RightIcons: FC = () => {
    return(
        <RightIconsWrapper>
            <Link to = {'/test'}>
            <div className='right-icons-house'>
                <img src={House} alt='IconHouse'/>
            </div>
            </Link>
            <Link to = {'/test'}>
            <div className='right-icons-message'>
                <img src={Message} alt='IconMessage'/>
            </div>
            </Link>
            <Link to = {'/test'}>
            <div className='right-icons-bell'>
                <img src={Bell} alt='IconBell'/>
            </div>
            </Link>
        </RightIconsWrapper>
    );
};