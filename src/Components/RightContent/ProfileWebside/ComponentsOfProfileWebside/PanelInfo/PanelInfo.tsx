import React, {FC, useState} from 'react'

//Styled Import
import { PanelInfoWrapper } from './PanelInfoStyled';

interface ValueEdit{
    isOpen: boolean;
}

export const PanelInfo: FC<ValueEdit> = (props) => {
    return(
        <PanelInfoWrapper>
           <h1>Panel Information</h1>
        </PanelInfoWrapper>
    )
}