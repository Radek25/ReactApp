import React, {FC} from 'react'

//Styled Import
import {EntitieWrapper} from './EntitieStyled';

interface IEntitieData{
    photoUrl: string;
    sizeOfEntity: boolean;
}

export const Entitie: FC<IEntitieData> = (props) =>{
    console.log(`${props.sizeOfEntity}`)
    return(
        <EntitieWrapper value={props.sizeOfEntity}>
            <img src={props.photoUrl}/>
            <div className ='right-side-text'>
                <h2>World company SAS</h2>
                {props.sizeOfEntity ==true? <p>Caracas 1050, Distroit Capital, Venesuela</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel laudantium maxime molestias cupiditate qui obcaecati, sint est dignissimos fugiat saepe! Temporibus consequatur ex eos doloremque sapiente deserunt, excepturi nostrum.</p>}
            </div>
        </EntitieWrapper>
    )
}