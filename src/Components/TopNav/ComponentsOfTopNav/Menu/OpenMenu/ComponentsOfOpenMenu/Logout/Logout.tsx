import React, {FC} from 'react';

//Icon Import
import LogoutIcon from '../../../../../../../icons/logout.png';

//Styled Import
import {LogoutWrapper} from '../Logout/LogoutStyled';

export const Logout: FC = () =>{
    return(
        <LogoutWrapper>
            <img src={LogoutIcon}/>
            <p>Logout</p>
        </LogoutWrapper>
    );
};