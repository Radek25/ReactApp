import React, {FC} from 'react';

//Styled Import
import {TopNavWrapper} from '../TopNav/TopNavStyled';
import {SearchField} from '../TopNav/TopNavStyled';

//Components Import
import {Logo} from '../TopNav/ComponentsOfTopNav/Logo/Logo';
import {ClosedMenu} from '../TopNav/ComponentsOfTopNav/Menu/ClosedMenu/ClosedMenu';
import {Search} from '../Common/Search/Search';
import {RightIcons} from '../TopNav/ComponentsOfTopNav/RightIcons/RightIcons';

export const TopNav: FC = () => {
    return(
        <TopNavWrapper>
            <Logo/>
            <ClosedMenu/>
            <SearchField>
                <Search/>
            </SearchField>
            <RightIcons/>
        </TopNavWrapper>
    );
};