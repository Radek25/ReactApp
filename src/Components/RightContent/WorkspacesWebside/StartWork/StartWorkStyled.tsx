import styled from 'styled-components';
import { Colors } from './../../../../StyledHelpers/Colors';

export const StartWorkWrapper = styled.div`
    width: 95%;
    background-color: ${Colors.lightgrey};
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 10px;
    margin-bottom: 30px;
    p:first-child{
        width: 100%;
        position: relative;
        margin-bottom: 20px;
        padding: 0 15px;
        color: ${Colors.grey};
    }
    span{
        position: absolute;
        right: 15px;
    }
`;