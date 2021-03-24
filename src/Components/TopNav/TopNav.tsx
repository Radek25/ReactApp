import React, {FC} from 'react';
import styled from 'styled-components';

import Logo from '../../icons/logo.png';

import {Colors} from '../../StyledHelpers/Colors';
import {SearchField} from '../Common/Search/SearchField';
import {DropDownMenu} from '../TopNav/DropDownMenu';
 
const TopNavWrapper = styled.div`
    width: 100%;
    height: 35px;
    background-color: red;
    display: flex;
    figure{
        width: 5%;
        height: 100%;
        background-color: yellow;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    img{
        width: 30px;
        height: 30px;
    }
`;

export const TopNav: FC = () => {
    return(
        <TopNavWrapper>
            <figure>
                <img src={Logo}></img>
            </figure>
            <DropDownMenu>
                <div>Tutaj bedzie rozwijane Menu</div>
            </DropDownMenu>
            <SearchField/>
        </TopNavWrapper>
    );
};