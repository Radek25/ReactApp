import styled from 'styled-components';
import {Colors} from './Colors';

export const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 0;
    background-color:#f5f7f9;
    display: flex;
    flex-wrap: wrap;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    a, u {
        text-decoration: none;
        cursor: pointer;
        color: ${Colors.black};
    }
    a:hover{
        color: ${Colors.black};
    }
`;
