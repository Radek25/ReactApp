import Slider from 'react-slick';
import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const SliderWrapper = styled(Slider)`
    width: 95%;
    position: absolute;
    button, button:focus, button:hover{
        background-color:grey;
        border-radius: 50px;
    }
`;
export const TileWrapper = styled.div`
    width: 23,75%;
    height: 200px;
    position: relative;
    padding: 0 10px;
`;
export const Tile = styled.div`
    width: 97%;
    height: 200px;
    border-radius: 10px;
    background-color: ${Colors.white};
    position: absolute;
    z-index: -1;
    left: 0;

    .background-img{
        width: 100%;
        height: 45%;
        border-radius: 10px 10px 0 0;
        position: absolute;
        z-index: -1;
    }
    //Title and Title of Tail
    .icon-and-title-of-tile{
        display: flex;
        align-items: center;
        margin: 70px 0 10px 10px;
    }
    .icon-and-title-of-tile img{
        width: 70px;
        height: 70px;
        border-radius: 5px;
        border: 1px solid ${Colors.lightgrey};
        background-color: ${Colors.white};
        padding: 10px;
    }
    .icon-and-title-of-tile p{
        font-size: 15px;
        margin: 0;
        padding: 5px;
    }
    //Description of tile
    .description-to-tile{
        width: 80%;
        height: 20px;
        display: flex;
        flex-direction: row;
        background-color: red;
    }
    .description-to-tile p{
        font-size: 13px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0;
    }
    .description-to-tile img{
        margin: 0 auto;
    }
    .dot-spaces{
        width: 4px;
        height: 4px;
    }
`;