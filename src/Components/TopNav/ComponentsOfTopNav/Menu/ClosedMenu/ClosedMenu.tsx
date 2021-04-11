import React, {FC} from 'react';
import UseState, { useState } from 'react';

//Styled Import
import {ClosedMenuWrapper} from '../ClosedMenu/ClosedMenuStyled';

//Icons Import
import HouseIcon from '../../../../../icons/house.png';
import ArrowDownIcon from '../../../../../icons/arrow-down.png';

//Components Import
import {OpenMenu} from '../OpenMenu/OpenMenu';

export const ClosedMenu: FC = () =>{

    let [IsMenuOpen, ChangeState] = useState(false);

    return(
        <ClosedMenuWrapper>
            <img className="closed-menu-icon-house" src={HouseIcon}></img>
            <p>Home</p>
            <img onClick={()=> ChangeState(IsMenuOpen == true ? IsMenuOpen = false : IsMenuOpen = true)} 
            className="closed-menu-icon-arrow" src={ArrowDownIcon}></img>
            
            {IsMenuOpen == true ? <OpenMenu/> : null}
        </ClosedMenuWrapper>
    );
};