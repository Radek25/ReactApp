import React, {FC} from 'react'

//Styled Import
import {MainPublicationWrapper} from './MainPublicationStyled';

//Components Import
import {DatePhotoName} from '../../../../Common/DatePhotoName/DatePhotoName';
import styled from 'styled-components';

export const MainPublication: FC = () =>{
    return(
        <MainPublicationWrapper>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident quo.Lorem ipsum dolor provident quo.</p>
            <DatePhotoName/>
        </MainPublicationWrapper>
    );
};