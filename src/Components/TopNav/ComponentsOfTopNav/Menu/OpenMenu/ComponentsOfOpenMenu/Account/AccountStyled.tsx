import styled from 'styled-components';
import {Colors} from '../../../../../../../StyledHelpers/Colors';

export const AccountWrapper = styled.div`
    width: 95%;
    height: 130px;
    margin: 0 auto;
    border-bottom: 1px solid ${Colors.lightgrey};
    .title-of-list{
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        font-weight: 600;
        color: ${Colors.grey};
    }
    li{
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        display: flex;
        align-items: center;
    }
    img{
        width: 23px;
        height: 20px;
    }
    p{
        margin-left: 12px;
        font-size: 13px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    .micro-profile{
        img{
            width: 30px;
            height: 30px;
            border-radius: 50px;
        }
        .name{
            font-size: 14px;
        }
        .see-profile{
            font-size: 11px;
            padding: 2px;
            color: ${Colors.lightblue};
        }
    }
`;