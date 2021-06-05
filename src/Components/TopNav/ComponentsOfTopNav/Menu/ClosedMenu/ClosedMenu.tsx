import React, {FC, useState} from 'react';

//Styled Import
import {ClosedMenuWrapper} from '../ClosedMenu/ClosedMenuStyled';

//Components Import
import {OpenMenu} from '../OpenMenu/OpenMenu';

//Icons Import
import HouseIcon from '../../../../../icons/house2.png';
import ArrowDownIcon from '../../../../../icons/arrow-down.png';
import CloseCross from '../../../../../icons/cross.png';

export const ClosedMenu: FC = () =>{
    
    const [isMenuOpen, changeStateOfMenu] = useState(false);

    return(
        <ClosedMenuWrapper isMenuOpen={isMenuOpen}>
            <img className='icon-of-menu-option' src={HouseIcon} alt='IconOfDropDownMenu'/>
            <p>Home</p>
            <img onClick={() => changeStateOfMenu(!isMenuOpen)} className='close-or-open-icon' src={isMenuOpen === false? ArrowDownIcon : CloseCross} alt='IconOpenOrCloseDropDownMenu'/>
            {isMenuOpen === true ? <OpenMenu/> : null}
        </ClosedMenuWrapper>
    );
};