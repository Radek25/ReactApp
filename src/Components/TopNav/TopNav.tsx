import React, {FC} from 'react';

//Styled Import
import {TopNavWrapper} from '../TopNav/TopNavStyled';

//Components Import
import {ClosedMenu} from '../TopNav/ComponentsOfTopNav/Menu/ClosedMenu/ClosedMenu';
import {RightIcons} from '../TopNav/ComponentsOfTopNav/RightIcons/RightIcons';

//Icon Import
import LogoImg from './../../icons/logo.png';
import SearchIcon from './../../icons/search.png';

export const TopNav: FC = () => {
    return(
        <TopNavWrapper>
            <img className='logo' src={LogoImg}/>
            <ClosedMenu/>
            <div className='search-top-nav'>
                <input type='text' placeholder="Search Legalcluster"/>
                <img src={SearchIcon}/>
            </div>
            <RightIcons/>
        </TopNavWrapper>
    );
};