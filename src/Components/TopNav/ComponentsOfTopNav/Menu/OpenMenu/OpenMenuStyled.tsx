import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const OpenMenuWrapper = styled.div`
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
    width: 100.5%;
    position: absolute;
    top: 27px;
    left: -1px;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid ${Colors.lightgrey};
    background-color: ${Colors.white};
    input{
        width: 80%;
        height: 22px;
        margin: 10px 0;
        padding-left: 5px;
        border: 1px solid ${Colors.lightgrey};
        border-radius: 5px;
        outline: none;
    }
    .logout-field{
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
            color: ${Colors.grey};
        }
    }
`;