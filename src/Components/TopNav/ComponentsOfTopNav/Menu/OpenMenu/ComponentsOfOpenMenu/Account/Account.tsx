import React, {FC} from 'react';

//Styled Import
import {AccountWrapper} from '../Account/AccountStyled';

//Icon Import
import WorkerPicture from '../../../../../../../icons/WorkPort.jpg';
import Privacy from '../../../../../../../icons/privacy.png';
import Settings from '../../../../../../../icons/settings.png';

export const Account: FC = () =>{
    return(
        <AccountWrapper>
            <ul>
                <li className='title-of-list'>Account</li>
                <ul>
                    <li className='micro-profile'>
                        <img src={WorkerPicture}/>
                        <div>
                            <p className='name'>Joenne-Maria de Cruso</p>
                            <p className='see-profile'>See profile</p>
                        </div>
                    </li>
                    <li>
                        <img src={Privacy}/>
                        <p>Privacy</p>
                    </li>
                    <li>
                        <img src={Settings}/>
                        <p>Settings</p>
                    </li>
                </ul>
            </ul>
        </AccountWrapper>
    );
};