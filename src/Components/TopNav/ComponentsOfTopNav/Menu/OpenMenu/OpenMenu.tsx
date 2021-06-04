import React, {FC, useState} from 'react';

//Styled Import
import {OpenMenuWrapper} from '../OpenMenu/OpenMenuStyled';

//Icons Import
import LogoutIcon from './../../../../../icons/logout.png';

//Components Import
import {FilterInput} from '../../../../Common/FilterInput/FilterInput';
import {OptionsList} from '../OpenMenu/ComponentsOfOpenMenu/OptionsList/OptionsList';
import {Account} from '../OpenMenu/ComponentsOfOpenMenu/Account/Account';

export const OpenMenu: FC = (props) =>{

    const [text, addText] = useState('');

    return(
        <OpenMenuWrapper>
            <FilterInput addText={addText}/>
            <OptionsList text={text}/>
            <Account/>
            <div className='logout-field'>
                <img src={LogoutIcon}/>
                <p>Logout</p>
            </div>
        </OpenMenuWrapper>
    );
};
