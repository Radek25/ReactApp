import React, {FC} from 'react';

//Styled Import
import {LogoWrapper} from '../Logo/LogoStyled';

//Icon Import
import LogoImg from '../../../../icons/logo.png';

export const Logo: FC = () => {
    return(
        <LogoWrapper>
            <img src={LogoImg}/>
        </LogoWrapper>
    );
};