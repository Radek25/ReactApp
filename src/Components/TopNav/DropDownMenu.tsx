import React, {FC} from 'react';
import styled from 'styled-components';

import HouseIcon from '../../icons/house2.png';
import ArrowDownIcon from '../../icons/arrow-down.png';

const DropMenu = styled.div`
    width: 20%;
    height: 100%;
    margin: 0 10px;
    display: flex;
    align-items: center;
    position: relative;
    p{
        margin: 0 10px;
    }
    .DropDownMenuIcons{
        margin: 0 5px;
    }
    .DropDownMenuIcons-House{
        width: 20px;
        height: 20px;
    }
    .DropDownMenuIcons-Arrow{
        width: 8px;
        height: 8px;
        position: absolute;
        right: 50px;
    }
`;

export const DropDownMenu: FC = () =>{
    return(
        <DropMenu>
            <img className="DropDownMenuIcons DropDownMenuIcons-House" src={HouseIcon}></img>
            <p>Home</p>
            <img className="DropDownMenuIcons DropDownMenuIcons-Arrow" src={ArrowDownIcon}></img>
        </DropMenu>
    );
};