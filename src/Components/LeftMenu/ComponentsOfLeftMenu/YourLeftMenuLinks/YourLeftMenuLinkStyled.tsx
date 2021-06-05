import styled from 'styled-components';
import {Colors} from '../../../../StyledHelpers/Colors';

export const YourLinksWrapper = styled.div`
    width: 90%;
    height: 12%;
    display: flex;
    flex-wrap: wrap;
    margin: 8px auto 5px auto;
    div{
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 3px auto;
        cursor: default;
        position: relative;
        img{
            width: 20px;
            height: 20px;
        }
        p{
            padding: 5px;
            font-size: 13px;
            font-weight: 600;
        }
        .right-side-icons{
            width: 28px;
            height: 24px;
            position: absolute;
            top: 0;
            right: 0;
            padding: 4px 6px;
            border: 1px solid ${Colors.grey};
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;