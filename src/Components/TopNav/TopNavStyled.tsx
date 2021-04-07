import React, {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../StyledHelpers/Colors'


export const TopNavWrapper = styled.div`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    width: 100%;
    height: 40px;
    background-color: ${Colors.white};
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 0px 5px 15px -8px rgba(17,17,17,0.4);
    
    .logo{
        width: 35px;
        height: 35px;
        margin: 0 10px;
        padding: 0;
    }
`;

export const DropMenu = styled.div`
    width: 18%;
    height: 100%;
    margin: 0 10px;
    display: flex;
    align-items: center;
    position: relative;
    .drop-down-menu-icons{
        margin: 0 10px;
    }
    .drop-down-menu-icons-house{
        width: 18px;
        height: 18px;
    }
    .drop-down-menu-icons-arrow{
        width: 8px;
        height: 7px;
        position: absolute;
        right: 0;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 600;
    }
`;

export const TopNavSearch = styled.div`
    width: 45%;
    height: 70%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 0 25px;
    border: 1px solid ${Colors.lightgrey};
    border-radius: 5px;
    padding: 0;
`;

export const TopNavRightIcons = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 15px;
    .top-nav-right-icons{
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        position: relative;
    }
    .top-nav-right-icons-message, .top-nav-right-icons-bell{
        background-color: ${Colors.lightgrey};
    }
    .top-nav-right-icons-message::after, .top-nav-right-icons-bell::after{
        content: '3';
        width: 15px;
        height: 10px;
        position: absolute;
        background-color: ${Colors.lightblue};
        top: 0;
        right: 0;
        border-radius: 10px;
        font-size: 8px;
        font-family: 'Roboto', sans-serif;
        color: ${Colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 20px;
        height: 20px;
    }
`;

