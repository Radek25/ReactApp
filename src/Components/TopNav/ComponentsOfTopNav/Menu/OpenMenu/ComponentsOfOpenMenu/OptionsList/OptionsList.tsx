import React, {FC, useState} from 'react';

//Styled Import
import {ListWrapper} from '../OptionsList/OptionsListStyled';

//Icons Import
import Home from '../../../../../../../icons/house2.png';
import Publications from '../../../../../../../icons/publications.png';
import People from '../../../../../../../icons/people.png';
import Entities from '../../../../../../../icons/entities2.png';
import Administration from '../../../../../../../icons/administration.png';
import { Link } from 'react-router-dom';

import { WorkspacesArray } from './../../../../../../RightContent/HomeWebside/Workspaces/Slider/Slider';

interface TextFromInput{
    text : string;
}


export const OptionsList: FC<TextFromInput> = (props) =>{
    let PlatformArray = [
    {Index: 1, Icon: Home, Decsription: 'Home', Link: '/home'},
    {Index: 2, Icon: Publications, Decsription: 'Publication', Link: '/publications'},
    {Index: 3, Icon: People, Decsription: 'People', Link: '/people'},
    {Index: 4, Icon: Entities, Decsription: 'Entities', Link: '/entities'},
    {Index: 5, Icon: Administration, Decsription: 'Administration', Link: '/administration'}];


    return(
        <ListWrapper>
            <ul>
                <li className='title-of-list'>Platform</li>
                <ul className='platform'>
                    {PlatformArray.filter(Platform => Platform.Decsription.toLowerCase().includes(props.text.toLowerCase())).map(Platform => <Link to = {Platform.Link}><li key={Platform.Index}><img src={Platform.Icon}/><p>{Platform.Decsription}</p></li></Link>)}
                </ul>
                <li className='title-of-list'>Workspaces</li>
                <ul className='workspaces'>
                {WorkspacesArray.filter(Workspaces => Workspaces.TitleOfTile.toLowerCase().includes(props.text.toLowerCase())).map(Workspaces => <Link to = {`/workspace/${Workspaces.Id}`}><li key={Workspaces.Id}><img src={Workspaces.MainIcon}/><p>{Workspaces.TitleOfTile}</p></li></Link>)}
                </ul>
            </ul>
    </ListWrapper>
    );
};