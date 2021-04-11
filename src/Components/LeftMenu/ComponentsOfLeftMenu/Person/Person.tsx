import React, {FC} from 'react';

//Icon Import
import WorkerPicture from '../../../../icons/WorkPort.jpg';

//StyledImport
import {PersonWrapper} from '../Person/PerswonStyled';

export const Person: FC = () => {
    return(
        <PersonWrapper>
            <img src={WorkerPicture}></img>
            <p className='name-and-surname'>Huberta Swift</p>
            <p className='job-title'>Job Title - Company</p>
        </PersonWrapper>
    );
};