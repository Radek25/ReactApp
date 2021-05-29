import styled from 'styled-components';
import { Colors } from '../../../../../StyledHelpers/Colors';

export const OptionWrapper = styled.div`
    width: 90%;
    margin: 20px 10px;
    font-family: 'Roboto', sans-serif;
    .option{
        height: 25px;
        margin: 10px 20px;
        display: flex;
        align-items: center;
        img{
            width: 20px;
            height: 20px;
            margin-right: 20px;
        }
        p{
            font-size: 14px;
            width: 60px;
            font-weight: 600;
        }
        select, input{
            height: 85%;
            margin-left: 30px;
            border-radius: 10px;
            border: none;
            outline: none;
            padding: 0 5px;
        }
        input{
            width: 120px;
            border-radius: 5px;
            padding-left: 5px;
            background-color: ${Colors.lightgrey};
        }
    }
`;