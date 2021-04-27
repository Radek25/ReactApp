import styled from 'styled-components';
import {Colors} from './Colors';

export const Wrapper = styled.div`
    width: 100%;
    height:500px;
    position: fixed;
    top: 0;
    left: 0;
    background-color:#f5f7f9;
    display: flex;
    flex-wrap: wrap;
    box-sizing:border-box;
    a, u {
        text-decoration: none;
        cursor: pointer;
        color: ${Colors.black};
    }
    a:hover{
        color: ${Colors.black};
    }
`;