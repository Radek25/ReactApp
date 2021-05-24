import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const InternalReviewsWrapper = styled.div`
    width: 90%;
    margin: 15px auto 15px;
    padding-bottom: 30px;
    border-bottom: 1px solid ${Colors.lightgrey};
    position: relative;
    h1{
        color: ${Colors.NameAndSurname};
        font-size: 16px;
        margin-bottom: 15px;
    }
    table{
        width: 90%;
        margin: 30px auto 20px;
        border-collapse: collapse;
        color: ${Colors.TopOptions};
    }
    th{
        border-bottom: 1px solid ${Colors.lightgrey};
        text-align: left;
        padding-bottom: 10px;
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