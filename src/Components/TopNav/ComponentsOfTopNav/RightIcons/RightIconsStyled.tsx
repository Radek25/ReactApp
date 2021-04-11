import styled from 'styled-components';
import {Colors} from '../../../../StyledHelpers/Colors'

export const RightIconsWrapper = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 15px;
    .right-icons-house, .right-icons-message, .right-icons-bell{
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        position: relative;
    }
    .right-icons-message, .right-icons-bell{
        background-color: ${Colors.lightgrey};
    }
    .right-icons-message::after, .right-icons-bell::after{
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
        text-align: center;
    }
    img{
        width: 20px;
        height: 20px;
    }
`;