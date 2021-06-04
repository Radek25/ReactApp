import React, {FC} from 'react';

//Styled Import 
import { StartWorkWrapper } from './StartWorkStyled';

//Icons Import
import Building from '../../../../icons/building-workspaces.png';
import Connection from '../../../../icons/sitemap-workspaces.png';
import Calendar from '../../../../icons/calendar-workspaces.png';

//Componetes Import
import { StartWorkTile } from './StartWorkTile/StartWorkTile';

export const StartWork: FC = () => {

    const TilesArray = [
        {Icon: Building, Title: 'Explore your entities'},
        {Icon: Connection, Title: 'Structure the ownship'},
        {Icon: Calendar, Title: 'Define the calendar'}];
    return(
        <StartWorkWrapper>
        <p>Start working on corporate matters<span>Hide</span></p>
        {TilesArray.map(TilesData => <StartWorkTile icon={TilesData.Icon} title={TilesData.Title}/>)}
        </StartWorkWrapper>
    );
};    