import React, {FC} from 'react';

//Styled Import
import { StartWorkTileWrapper } from './StartWorkTileStyled';

interface Iicons{
    icon: string;
    title: string;
}

export const StartWorkTile: FC<Iicons> = (props) => {
    return(
        <StartWorkTileWrapper>
            <img className='background-img' src={props.icon}/>
            <img src={props.icon}/>
            <h4>{props.title}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae error repellat incidunt.</p>
        </StartWorkTileWrapper>
    );
};    