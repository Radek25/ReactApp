import React, {FC} from 'react'

//Styled Import
import {EntitieWrapper} from './EntitieStyled';

interface IEntitieData{
    photos: string | undefined;
    sizeOfEntity: boolean;
    title: string | undefined;
}

export const Entitie: FC<IEntitieData> = (props) =>{
    
    return(
        <EntitieWrapper value={props.sizeOfEntity}>
            <img src={props.photos} alt='EntitiePhoto'/>
            <div className ='right-side-text'>
                <h2>{props.title? ((props.title?.charAt(0).toUpperCase() + props.title?.slice(1)).slice(0, 15)) : 'No title'}</h2>            
                {props.sizeOfEntity === true? <p>Caracas 1050, Distroit Capital, Venesuela</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel laudantium maxime molestias cupiditate qui obcaecati, sint est dignissimos fugiat saepe! Temporibus consequatur ex eos doloremque sapiente deserunt, excepturi nostrum.</p>}
            </div>
        </EntitieWrapper>
    )
}