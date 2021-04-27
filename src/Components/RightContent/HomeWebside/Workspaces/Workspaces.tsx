import React, {FC} from 'react';

//Styled Import
import {WorkspacesWrapper} from './WorkspacesStyled';

import {WorkspacesSlider} from './Slider/Slider';


export const Workspaces: FC = () =>{
    return(
        <WorkspacesWrapper>
            <p>Workspaces</p>
            <WorkspacesSlider/>
        </WorkspacesWrapper>
    );
};

