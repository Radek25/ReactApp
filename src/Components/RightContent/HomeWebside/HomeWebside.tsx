import React, {FC} from 'react'

//Styled Import
import {HomeWebsideWrapper} from './HomeWebsideStyled';

//Components Import
import {LatestPublications} from './LatestPublications/LatestPublications';
import {Workspaces} from './Workspaces/Workspaces';

export const HomeWebside: FC = () =>{
    return(
        <HomeWebsideWrapper>
            <LatestPublications/>
            <Workspaces/>
        </HomeWebsideWrapper>
    );
};