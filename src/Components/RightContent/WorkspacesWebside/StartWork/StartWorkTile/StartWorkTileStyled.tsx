import styled from 'styled-components';
import { Colors } from './../../../../../StyledHelpers/Colors';

export const StartWorkTileWrapper = styled.div`
    width: 30%;
    margin: 0 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${Colors.white};
    position: relative;
    box-shadow: 0px 5px 15px -8px rgba(17,17,17,0.4);
    .background-img{
        width: 45%;
        height: 75%;
        position: absolute;
        right: 10px;
        opacity: 0.1;

    }
    img{
        width: 35px;
        height: 35px;
        margin: 10px 0;
    }
    p{
        padding: 10px 0;
    }
`;