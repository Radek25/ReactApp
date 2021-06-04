import styled from 'styled-components';
import {Colors} from '../../../../StyledHelpers/Colors'

export const RightIconsWrapper = styled.div`
    max-width: 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 20px;
    .right-icons-house, .right-icons-message, .right-icons-bell{
        width: 35px;
        height: 35px;
        margin: 0 5px;
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
        content: '1';
        width: 18px;
        height: 13px;
        position: absolute;
        top: 0;
        right: -5px;
        border-radius: 10px;
        font-size: 10px;
        text-align: center;
        background-color: ${Colors.lightblue};
        color:  ${Colors.white};
    }
    img{
        width: 20px;
        height: 20px;
    }
`;