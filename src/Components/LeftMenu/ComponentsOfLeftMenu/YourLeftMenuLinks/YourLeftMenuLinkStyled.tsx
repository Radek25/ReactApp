import styled from 'styled-components';
import {Colors} from '../../../../StyledHelpers/Colors';

export const YourLinksWrapper = styled.div`
    width: 90%;
    height: 12%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 8px auto 5px auto;
    position: relative;
    div{
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 2px auto;
    }
    p{
        padding: 5px;
        font-size: 0.7rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    .right-side-icons{
        width: 24px;
        height: 20px;
        position: absolute;
        right: 0px;
        padding: 4px;
        border: 1.5px solid ${Colors.grey};
        border-radius: 5px;
    }
    img{
        width: 15px;
        height: 15px;
    }
`;