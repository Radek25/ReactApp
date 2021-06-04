import styled from 'styled-components';
import {Colors} from '../../../../../../../StyledHelpers/Colors';

export const ListWrapper = styled.div`
    width: 95%;
    min-height: 100px;
    max-height: 270px;
    margin: 5px 0;
    overflow-y: auto;
    border-bottom: 1px solid ${Colors.lightgrey};
    .title-of-list{
        font-size: 11px;
        font-weight: 600;
        color: ${Colors.grey};
    }
    li{
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    img{
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
    p{
        margin-left: 10px;
        font-size: 12.5px;
        cursor: pointer;
    }
`;