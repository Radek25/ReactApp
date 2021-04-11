import styled from 'styled-components';
import {Colors} from '../../../../../../../StyledHelpers/Colors';

export const LogoutWrapper =styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 20px;
        height: 16px;
    }
    p{
        padding-left: 12px;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        color: ${Colors.grey};
    }
`;