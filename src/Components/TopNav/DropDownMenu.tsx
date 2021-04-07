import React, {FC} from 'react';

//Styled Import
import {DropMenu} from '../TopNav/TopNavStyled';

//Icons Import
import HouseIcon from '../../icons/house2.png';
import ArrowDownIcon from '../../icons/arrow-down.png';

export const DropDownMenu: FC = () =>{
    return(
        <DropMenu>
            <img className="drop-down-menu-icons drop-down-menu-icons-house" src={HouseIcon}></img>
            <p>Home</p>
            <img className="drop-down-menu-icons drop-down-menu-icons-arrow" src={ArrowDownIcon}></img>
        </DropMenu>
    );
};