import styled from 'styled-components';
import {Colors} from '../../../StyledHelpers/Colors'

export const ProfileWebsideWrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
    background-color: ${Colors.white};
    .edit-pen{
        width: 15px;
        height: 15px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;