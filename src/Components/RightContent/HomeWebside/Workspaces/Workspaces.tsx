import React, {FC} from 'react';

//Styled Import
import {WorkspacesWrapper} from './WorkspacesStyled';

//Component Import
import {WorkspacesSlider} from './Slider/Slider';

export const Workspaces: FC = () =>{
    return(
        <WorkspacesWrapper>
            <h2>Workspaces</h2>
            <WorkspacesSlider/>
        </WorkspacesWrapper>
    );
};

