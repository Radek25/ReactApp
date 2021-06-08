import React, {FC, useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

//Styled Import
import {OpenMenuWrapper} from '../OpenMenu/OpenMenuStyled';

//Icons Import
import LogoutIcon from './../../../../../icons/logout.png';

//Components Import
import {FilterInput} from '../../../../Common/FilterInput/FilterInput';
import {OptionsList} from '../OpenMenu/ComponentsOfOpenMenu/OptionsList/OptionsList';
import {Account} from '../OpenMenu/ComponentsOfOpenMenu/Account/Account';

interface ICloseDropDownMenu{
    closeDropDownMenu: (closeDropDownMenu: boolean) => void;
}


export const OpenMenu: FC<ICloseDropDownMenu> = (props) =>{

    const [text, addText] = useState('');

    return(
        <ClickAwayListener onClickAway={() => props.closeDropDownMenu(false)}>
            <OpenMenuWrapper>
                <FilterInput addText={addText}/>
                <OptionsList text={text}/>
                <Account/>
                <div className='logout-field'>
                    <img src={LogoutIcon} alt='IconLogout'/>
                    <p>Logout</p>
                </div>
            </OpenMenuWrapper>
        </ClickAwayListener>
    );
};
