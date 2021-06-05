import React, {FC} from 'react';
import {useParams} from "react-router-dom";

//Styled Import
import { WorkspacesWebsideWrapper } from './WorkspacesWebsideStyled';

import { WorkspacesArray } from './../../MainPage/MainPage';

import { ResumeYourWork } from '../../Common/ResumeYourWork/ResumeYourWork';

//Components Import
import { TopTab } from './TopTab/TopTab';
import { StartWork } from './StartWork/StartWork';

export const WorkspacesWebside: FC = () => {

    const {id} = useParams<{id: string}>();

    const workspaces = WorkspacesArray.find(Workspaces => Workspaces.Id === parseInt(id))

    const a :boolean = true;
  
    return(
       <WorkspacesWebsideWrapper>
           <TopTab workspacesArray={workspaces}/>
           <StartWork/>
           <ResumeYourWork flag={a}/>
       </WorkspacesWebsideWrapper> 
    );
};