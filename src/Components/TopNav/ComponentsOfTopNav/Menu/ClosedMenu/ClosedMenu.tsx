import React, {FC, useState} from 'react';
import { useLocation } from 'react-router-dom';

//Styled Import
import {ClosedMenuWrapper} from '../ClosedMenu/ClosedMenuStyled';

//Components Import
import {OpenMenu} from '../OpenMenu/OpenMenu';

//Icons Import
import Person from './../../../../../icons/person.png';
import ArrowDownIcon from '../../../../../icons/arrow-down.png';
import CloseCross from '../../../../../icons/cross.png';

//Arrays Import
import {PlatformArray, WorkspacesArray } from './../../../../MainPage/MainPage';

export const ClosedMenu: FC = () =>{
    
    const location = useLocation();
    const workspaces = WorkspacesArray.find(Workspaces => Workspaces.Link === location.pathname);
    const platform = PlatformArray.find(Platform=> Platform.Link === location.pathname);
    const iconToDisplay = platform? platform.Icon : workspaces?.MainIcon;
    const nameToDisplay = platform? platform.Decsription : workspaces?.TitleOfTile;


    const [isMenuOpen, changeStateOfMenu] = useState(false);

    return(
        <ClosedMenuWrapper isMenuOpen={isMenuOpen}>
            <img className='icon-of-menu-option' src={iconToDisplay? iconToDisplay : Person} alt='IconOfDropDownMenu'/>
            <p>{nameToDisplay? nameToDisplay : 'Profile'}</p>
            <img onClick={() => changeStateOfMenu(!isMenuOpen)} className='close-or-open-icon' src={isMenuOpen === false? ArrowDownIcon : CloseCross} alt='IconOpenOrCloseDropDownMenu'/>
            {isMenuOpen === true ? <OpenMenu/> : null}
        </ClosedMenuWrapper>
    );
};