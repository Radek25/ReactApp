import styled from 'styled-components';
import {Colors} from '../../StyledHelpers/Colors'

export const TopNavWrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
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
        margin: 0 15px;
    }
    .search-top-nav{
        width: 40%;
        height: 70%;
        margin: 0 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${Colors.lightgrey};
        border-radius: 5px;
        input{
            width: 90%;
            border: none;
            outline: none;
            text-align: center;
            padding: 0 5px;
        }
        img{
            width: 20px;
            height: 20px;
            margin-left: 10px;
            cursor: pointer;
        }
    }
`;