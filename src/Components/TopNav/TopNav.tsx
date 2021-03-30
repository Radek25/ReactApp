import React, {FC} from 'react';
import styled from 'styled-components';

import Logo from '../../icons/logo.png';
import House from '../../icons/house.png';
import Message from '../../icons/comments.png';
import Bell from '../../icons/bell.png';

import {Colors} from '../../StyledHelpers/Colors';
import {SearchField} from '../Common/Search/SearchField';
import {DropDownMenu} from '../TopNav/DropDownMenu';
 
const TopNavWrapper = styled.div`
    width: 100%;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    position: relative;
    .logo{
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 0 10px;
        padding: 0;
    }
    img{
        width: 20px;
        height: 20px;
    }
`;

const TopNavSearch = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-left: 20px;
    border: 1px solid grey;
    padding: 0;
`;

const TopNavRightIcons = styled.div`
    width: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 15px;
`;

export const TopNav: FC = () => {
    return(
        <TopNavWrapper>
            <img className ="logo" src={Logo}></img>
            <DropDownMenu/>
            <TopNavSearch>
                <SearchField/>
            </TopNavSearch>
            <TopNavRightIcons>
                <img src={House}></img>
                <img src={Message}></img>
                <img src={Bell}></img>
            </TopNavRightIcons>
        </TopNavWrapper>
    );
};