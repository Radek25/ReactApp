import React, {FC} from 'react';

import { useSelector } from 'react-redux'
import {IState} from '../../tools/reducers';
import {IUsersReducer} from '../../tools/reducers/usersReducers';
 
//Styled Import
import {LeftMenuWrapper} from '../LeftMenu/LeftMenuStyled';
import {BusinessCard} from '../LeftMenu/LeftMenuStyled';

//Components Import
import {Person} from '../LeftMenu/ComponentsOfLeftMenu/Person/Person';
import {YourLeftMenuLinks} from '../LeftMenu/ComponentsOfLeftMenu/YourLeftMenuLinks/YourLeftMenuLinks';
import {LeftMenuLinks} from '../LeftMenu/ComponentsOfLeftMenu/LeftMenuLinks/LeftMenuLinks';

export const LeftMenu: FC = () => {

    const {usersList} = useSelector<IState, IUsersReducer> (globalState => globalState.users);

    return(
        <LeftMenuWrapper>
            {console.log(usersList)}
            <BusinessCard>
                <Person/>
                <YourLeftMenuLinks/>
            </BusinessCard> 
            <LeftMenuLinks/>
        </LeftMenuWrapper>
    );
};