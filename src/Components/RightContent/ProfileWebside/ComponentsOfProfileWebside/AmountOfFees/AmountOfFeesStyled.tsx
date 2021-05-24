import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const AmountOfFeesWrapper = styled.div`
    width: 90%;
    margin: 15px auto 30px;
    position: relative;
    h1{
        color: ${Colors.NameAndSurname};
        font-size: 16px;
        margin-bottom: 15px;
    }
    table{
        margin: 30px auto 20px;
        border-collapse: collapse;
        color: ${Colors.TopOptions};
        font-weight: 600;
    }
    th{
        width: 200px;
        border-bottom: 1px solid ${Colors.lightgrey};
        text-align: left;
        padding-bottom: 10px;
        text-align: center;
    }
    tr{
        text-align: center;
    }
    td{
        font-size: 14px;
        padding-top: 10px;
    }
    p{
        float: left;
        color: ${Colors.TopOptions};
        font-size: 16px;
        font-weight: 600;
    }
    input, select{
        border: 1px solid ${Colors.lightgrey};
        outline: none;
        border-radius: 5px;
        padding-left: 5px;
    }
`;