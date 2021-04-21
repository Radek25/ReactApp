import React, {FC} from 'react';

//Styled Import
import {RightContentWrapper} from './RightContenetStyled';

export const RightContent: FC = (props) => {
    return(
        <RightContentWrapper>
            {props.children}
        </RightContentWrapper>
    );
};