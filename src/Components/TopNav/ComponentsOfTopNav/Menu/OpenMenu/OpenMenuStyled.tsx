import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const OpenMenuWrapper = styled.div`
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
    position: absolute;
    top: 40px;
    left: 5px;
    width: 230px;
    background-color: ${Colors.white};
    z-index: 10;
    border: 1px solid ${Colors.lightgrey};
`;
export const FilterField = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2px 0 5px;
    input{
        border: 1px solid ${Colors.lightgrey};
        border-radius: 5px;
        padding: 5px;
    }
`;