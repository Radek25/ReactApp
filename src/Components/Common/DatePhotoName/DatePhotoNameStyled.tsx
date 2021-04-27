import styled from 'styled-components';
import {Colors} from '../../../StyledHelpers/Colors';

export const DatePhotoNameWrapper = styled.div`
    *{
        margin: 5px 0;
        padding: 0;
        box-sizing: border-box;
    }
    width: 170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img{
        width: 20px;
        height: 20px;
        border-radius: 50px;
    }
    p{
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
    }
    .date{
        color: ${Colors.JobSubtitle};
    }
    .name-and-surname{
        color: ${Colors.black};
    }
`;