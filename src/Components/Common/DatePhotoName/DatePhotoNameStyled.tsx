import styled from 'styled-components';
import {Colors} from '../../../StyledHelpers/Colors';

export const DatePhotoNameWrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    height: 20px;
    margin: 5px 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    img{
        width: 20px;
        height: 20px;
        margin: 0 10px;
        border-radius: 50px;
    }
    p:first-child, p:last-child{
        font-size: 12px;
        font-weight: normal;
        color: ${Colors.JobSubtitle};
    }
    p:last-child{
        color: ${Colors.black};
    }
`;