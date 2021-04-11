import styled from 'styled-components';
import {Colors} from '../../../../../../../StyledHelpers/Colors';

export const ListWrapper = styled.div`
    margin: 5px auto;
    width: 95%;
    height: 270px;
    overflow-y: scroll;
    border-bottom: 1px solid ${Colors.lightgrey};
    li{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .title-of-list{
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        font-weight: 600;
        color: ${Colors.grey};
    }
    .platform li, .workspaces li{
        margin: 10px 0;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    img{
        width: 18px;
        height: 18px;
    }
    p{
        margin-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 12.5px;
    }
`;