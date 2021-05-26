import React, {FC, useState} from 'react';
import {useParams} from "react-router-dom";


import { WorkspacesArray } from './../HomeWebside/Workspaces/Slider/Slider';

export const WorkspacesWebside: FC = () =>{

    const {id} = useParams<{id: string}>();

    const Workspaces = WorkspacesArray.find(Workspaces => Workspaces.Id == parseInt(id))

    return(
        <div>
            {Workspaces?.TitleOfTile}
        </div>
    );
};