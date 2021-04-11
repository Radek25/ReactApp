import styled from 'styled-components';
import {Colors} from '../../../StyledHelpers/Colors'

export const SearchWrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        width:90%;
        height: 100%;
        text-align: center;
        border: none;
        margin: 0 5px;
    }
    input:hover, input:active, input:focus, input:link{
        outline: none;
    }
    .search-icon{
        width: 20px;
        height: 20px;
        margin: auto;
    }
`;
