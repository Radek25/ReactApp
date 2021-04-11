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
`;
export const SearchField = styled.div`
    width: 45%;
    height: 70%;
    margin: 0 0 0 60px;
    border: 1px solid ${Colors.lightgrey};
    border-radius: 5px;
`;