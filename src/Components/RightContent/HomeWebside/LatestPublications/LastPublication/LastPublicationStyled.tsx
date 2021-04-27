import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const LastPublicationWrapper = styled.div`
    display: flex;
    align-items: center;
    .writing-person{
        width: 80px;
        height: 80px;
        margin-right: 5px;
    }
    .content-of-publication{
        width: 90%;
        height: 80px;
        padding: 5px;
        margin: 5px 0;
    }
    .note-content{
        font-weight: 600;
        font-size: 14px;
    }
`;