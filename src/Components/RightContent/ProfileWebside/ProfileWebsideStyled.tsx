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
    background-color: ${Colors.white};
    .edit-pen{
        width: 15px;
        height: 15px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;