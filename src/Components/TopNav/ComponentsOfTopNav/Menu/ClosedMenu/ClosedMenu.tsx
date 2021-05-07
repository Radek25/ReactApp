import React, {FC} from 'react';
import UseState, { useState } from 'react';

//Styled Import
import {ClosedMenuWrapper} from '../ClosedMenu/ClosedMenuStyled';

//Icons Import
import HouseIcon from '../../../../../icons/house2.png';
import ArrowDownIcon from '../../../../../icons/arrow-down.png';
import Cross from '../../../../../icons/cross.png';

//Components Import
import {OpenMenu} from '../OpenMenu/OpenMenu';

export const ClosedMenu: FC = () =>{
    
    let [IsMenuOpen, ChangeState] = useState(false);
    let [openMenuIcon , ChangeOpenMenuIcon] = useState(ArrowDownIcon);
    let [ClassName, ChangeClassName] = useState('closed-menu-icon-arrow');
    return(
        <ClosedMenuWrapper>
            <img className="closed-menu-icon-house" src={HouseIcon}></img>
            <p>Home</p>
            <img onClick={()=> 
            {ChangeState(IsMenuOpen == true ? IsMenuOpen = false : IsMenuOpen = true); 
             ChangeOpenMenuIcon(IsMenuOpen == true ? openMenuIcon = Cross : openMenuIcon = ArrowDownIcon);
             ChangeClassName(IsMenuOpen == true ? ClassName = 'closed-menu-icon-cross' : ClassName = 'closed-menu-icon-arrow');
            }} 
            className = {ClassName} src={openMenuIcon}></img>
            {IsMenuOpen == true ? <OpenMenu/> : null}
        </ClosedMenuWrapper>
    );
};