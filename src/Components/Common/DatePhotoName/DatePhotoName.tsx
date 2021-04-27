import React, {FC} from 'react'

//PhotoImport
import Photo from '../../../icons/WorkPort.jpg';

//Styled Import
import {DatePhotoNameWrapper} from './DatePhotoNameStyled';

export const DatePhotoName: FC = () =>{
    return(
        <DatePhotoNameWrapper>
            <p className = 'date'>7 jan. 2020</p>
            <img src = {Photo}/>
            <p className = 'name-and-surname'>Huberta Swift</p>
        </DatePhotoNameWrapper>
    );
};