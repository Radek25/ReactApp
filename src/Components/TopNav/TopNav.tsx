import React, {FC} from 'react';

//Styled Import
import {TopNavWrapper} from '../TopNav/TopNavStyled';
import {TopNavSearch} from '../TopNav/TopNavStyled';
import {TopNavRightIcons} from '../TopNav/TopNavStyled';

//Icons Import
import Logo from '../../icons/logo.png';
import House from '../../icons/house.png';
import Message from '../../icons/comments.png';
import Bell from '../../icons/bell.png';

import {Colors} from '../../StyledHelpers/Colors';

//Components Import
import {SearchField} from '../Common/Search/SearchField';
import {DropDownMenu} from '../TopNav/DropDownMenu';
 

export const TopNav: FC = () => {
    return(
        <TopNavWrapper>
            <img className ="logo" src={Logo}/>
            <DropDownMenu/>
            <TopNavSearch>
                <SearchField/>
            </TopNavSearch>
            <TopNavRightIcons>
                <div className='top-nav-right-icons-house top-nav-right-icons'>
                    <img src={House}/>
                </div>
                <div className='top-nav-right-icons-message top-nav-right-icons'>
                    <img src={Message}/>
                </div>
                <div className='top-nav-right-icons-bell top-nav-right-icons'>
                <img src={Bell}/>
                </div>
            </TopNavRightIcons>
        </TopNavWrapper>
    );
};