import React, {FC, useState} from 'react';
import {useParams} from "react-router-dom";

//Styled Import
import { WorkspacesWrapper } from './../HomeWebside/Workspaces/WorkspacesStyled';

import { WorkspacesArray } from './../HomeWebside/Workspaces/Slider/Slider';

export const WorkspacesWebside: FC = () => {

    const {id} = useParams<{id: string}>();

    const Workspaces = WorkspacesArray.find(Workspaces => Workspaces.Id == parseInt(id))
 
    return(
        <WorkspacesWrapper>
            <header>
                <div className='title-and-desc'>

                </div>
            </header>
            {Workspaces?.TitleOfTile}
        </WorkspacesWrapper>
    );
};