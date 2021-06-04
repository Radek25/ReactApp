import styled from 'styled-components';
import {Colors} from '../../../../StyledHelpers/Colors';

export const PersonWrapper = styled.div`
    width: 100%;
    height: 65%;
    padding: 15px 0 10px;
    text-align: center;
    border-bottom: 1px solid ${Colors.lightgrey};
    img{
        width: 60px;
        height: 60px;
        border-radius: 50px;
    }
    p:nth-child(2){
        font-size: 15px;
        font-weight: 700;
        color: ${Colors.NameAndSurname};
    }
    p:last-child{
        font-size: 11px;
        margin-top: 5px;
        color: ${Colors.JobSubtitle};
    }
`;