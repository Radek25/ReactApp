import React, {FC} from 'react';

//Styled Import
import {LeftMenuWrapper} from '../LeftMenu/LeftMenuStyled';
import {BusinessCard} from '../LeftMenu/LeftMenuStyled';

//Components Import
import {Person} from '../LeftMenu/ComponentsOfLeftMenu/Person/Person';
import {YourLeftMenuLinks} from '../LeftMenu/ComponentsOfLeftMenu/YourLeftMenuLinks/YourLeftMenuLinks';
import {LeftMenuLinks} from '../LeftMenu/ComponentsOfLeftMenu/LeftMenuLinks/LeftMenuLinks';

export const LeftMenu: FC = () => {
    return(
        <LeftMenuWrapper>
            <BusinessCard>
                <Person/>
                <YourLeftMenuLinks/>
            </BusinessCard> 
            <LeftMenuLinks/>
        </LeftMenuWrapper>
    );
};