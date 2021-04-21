import React, {FC} from 'react';

//Styled Import
import {OpenMenuWrapper} from '../OpenMenu/OpenMenuStyled';
import {FilterField} from '../OpenMenu/OpenMenuStyled';

//Components Import
import {FilterInput} from '../../../../Common/FilterInput/FilterInput';
import {OptionsList} from '../OpenMenu/ComponentsOfOpenMenu/OptionsList/OptionsList';
import {Account} from '../OpenMenu/ComponentsOfOpenMenu/Account/Account';
import {Logout} from './ComponentsOfOpenMenu/Logout/Logout';

export const OpenMenu: FC = () =>{
    return(
        <OpenMenuWrapper>
            <FilterField>
                <FilterInput/>
            </FilterField>
            <OptionsList/>
            <Account/>
            <Logout/>
        </OpenMenuWrapper>
    );
};