import Slider from 'react-slick';
import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

export const SliderWrapper = styled(Slider)`
    width: 95%;
    position: absolute;
    button, button:focus, button:hover{
        background-color: ${Colors.grey};
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
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
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
        font-weight: 900;
        margin: 0;
        padding: 5px;
    }
    .description-to-tile{
        width: 80%;
        height: 20px;
        margin-left: 10px;
        display: flex;
        align-items: center;
    }
    .description-to-tile p{
        font-size: 13px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0;
        color: ${Colors.grey};
    }
    .description-icon{
        margin: 0 auto;
        width: 15px;
        height: 15px;
    }
    .dot-spaces{
        width: 4px;
        height: 4px;
        margin: 0 10px;
    }
    .update-info{
        font-size: 10px;
        margin: 8px 0 0 10px;
        color: ${Colors.grey};
    }
`;