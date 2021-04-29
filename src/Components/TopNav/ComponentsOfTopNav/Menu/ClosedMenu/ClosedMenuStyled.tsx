import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const ClosedMenuWrapper = styled.div`
    width: 16%;
    height: 100%;
    margin: 0 5px;
    display: flex;
    align-items: center;
    position: relative;
    .closed-menu-icon-house, .closed-menu-icon-arrow{
        margin: 0 10px;
    }
    .closed-menu-icon-house{
        width: 18px;
        height: 18px;
    }
    .closed-menu-icon-arrow, .closed-menu-icon-cross{
        width: 8px;
        height: 7px;
        position: absolute;
        right: 0;
    }
    .closed-menu-icon-cross{
        width: 15px;
        height: 15px;
        right: 7px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 600;
    }
`;