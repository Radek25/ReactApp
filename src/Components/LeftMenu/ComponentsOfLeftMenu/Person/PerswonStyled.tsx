import styled from 'styled-components';
import {Colors} from '../../../../StyledHelpers/Colors';

export const PersonWrapper = styled.div`
    width: 100%;
    height: 65%;
    padding: 15px 0 10px 0;
    text-align: center;
    border-bottom: 1px solid ${Colors.lightgrey};
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    p{
        font-family: 'Roboto', sans-serif;
    }
    .name-and-surname{
        font-size: 15px;
        font-weight: 700;
        color: ${Colors.NameAndSurname};
    }
    .job-title{
        font-size: 10px;
        margin-top: 5px;
        color: ${Colors.JobSubtitle};
    }
`;