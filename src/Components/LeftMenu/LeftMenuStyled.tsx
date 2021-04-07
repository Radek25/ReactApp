import React, {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../StyledHelpers/Colors'

export const Content = styled.div`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    width: 18%;
    height: 100%;
    background-color: green;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
export const BusinessCard = styled.div`
    width: 80%;
    height: 240px;
    background-color: ${Colors.white};
    border-radius: 5px;
    padding: 5px;
    border: 1px solid ${Colors.lightgrey};
    margin-top: 5px;
`;
export const Person = styled.div`
    width: 100%;
    height: 60%;
    padding: 15px 0 10px 0;
    text-align: center;
    border-bottom: 1px solid ${Colors.lightgrey};
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    p{
        font-family: 'Roboto', sans-serif;
    }
    .name-and-surname{
        font-size: 15px;
        font-weight: 700;
        color: ${Colors.NameAndSurname};
    }
    .job-title{
        font-size: 10px;
        margin-top: 5px;
        color: ${Colors.JobSubtitle};
    }
`;
//KONIEC!!!!
export const YourLeftMenuLinks = styled.div`
    width: 92%;
    height: 30px;
    display: flex;
    align-items: center;
    margin: 8px auto;
    box-sizing: border-box;
    padding: 0;
    position: relative;

    p{
        padding: 5px;
        font-size: 14px;
    }
    .right-side-icons{
        position: absolute;
        right: 0px;
        box-sizing: border-box;
        padding: 2px;
        border: 1.5px solid grey;
        border-radius: 5px;
    }
`;
export const LeftMenuLinks = styled.div`
    width: 80%;
    margin: 0 auto;
    height : 100px;
    .left-menu-publication-ecosystem-entites{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 92%;
        height: 30%;
        margin: 5px auto; 
        img{
            width: 20px;
            height: 20px;
        }
        p{
            font-size: 15px;
            margin-left: 15px;
        }
    }
`;
