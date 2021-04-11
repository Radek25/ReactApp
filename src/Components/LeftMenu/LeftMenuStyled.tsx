import styled from 'styled-components';
import {Colors} from '../../StyledHelpers/Colors'

export const LeftMenuWrapper = styled.div`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    width: 18%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
export const BusinessCard = styled.div`
    width: 80%;
    height: 40%;
    background-color: ${Colors.white};
    border-radius: 5px;
    padding: 5px;
    border: 1px solid ${Colors.lightgrey};
    margin-top: 10px;
`;

