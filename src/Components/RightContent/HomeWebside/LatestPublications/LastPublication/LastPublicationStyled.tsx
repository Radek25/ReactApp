import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const LastPublicationWrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    .writing-person{
        width: 60px;
        height: 60px;
        margin-right: 5px;
    }
    .content-of-publication{
        width: 90%;
        height: 75px;
        padding: 5px;
    }
    .note-content{
        font-weight: 600;
        font-size: 14px;
    }
`;