import React, {FC, useState} from 'react';
import {useParams} from "react-router-dom";

//Styled Import
import { WorkspacesWebsideWrapper } from './WorkspacesWebsideStyled';

import { WorkspacesArray } from './../HomeWebside/Workspaces/Slider/Slider';

import { ResumeYourWork } from './../HomeWebside/ResumeYourWork/ResumeYourWork';

//Icons Import
import Building from '../../../icons/building-workspaces.png';
import Connection from '../../../icons/sitemap-workspaces.png';
import Calendar from '../../../icons/calendar-workspaces.png';

export const WorkspacesWebside: FC = () => {

    const {id} = useParams<{id: string}>();

    const Workspaces = WorkspacesArray.find(Workspaces => Workspaces.Id == parseInt(id))
  
    return(
       <WorkspacesWebsideWrapper photo={Workspaces?.BackgroundImg}>
           <div className='title-and-photo'>
               <div className='bottom-module'>
                    <img src={Workspaces?.MainIcon}/>
                    <div className='title-of-workspaces'>
                        <h1>{Workspaces?.TitleOfTile}</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sapiente. Consectetur quasi praesentium laborum cum dolores est dolorum, perferendis, vero repudiandae, tempore totam. Ad accusamus laborum sint. Aliquid, id alias.</p>
                    </div>
                </div>
           </div>
           <div className='start-working'>
               <p>Start working on corporate matters</p>
               <div className='tiles'>
                   <img src={Building}/>
                   <h2>Explore yor entities</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae error repellat incidunt.</p>
               </div>
               <div className='tiles'>
                    <img src={Connection}/>
                    <h2>Structure the ownership</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam id accusantium error saepe.</p>
               </div>
               <div className='tiles'>
                    <img src={Calendar}/>
                    <h2>Define the calendar</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
               </div>
           </div>
           <ResumeYourWork/>
       </WorkspacesWebsideWrapper> 
    );
};