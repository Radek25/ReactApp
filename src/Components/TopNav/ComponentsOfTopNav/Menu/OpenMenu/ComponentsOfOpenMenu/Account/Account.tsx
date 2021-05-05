import React, {FC} from 'react';

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../../../../tools/reducers";
import { IUserReducer } from "../../../../../../../tools/reducers/userReducers";

//Styled Import
import {AccountWrapper} from '../Account/AccountStyled';

//Icon Import
import Privacy from '../../../../../../../icons/privacy.png';
import Settings from '../../../../../../../icons/settings.png';

export const Account: FC = () =>{
    const { CurrentUser } = useSelector<IState, IUserReducer>((globalState) => ({
        ...globalState.user,
      }));
    return(
        <AccountWrapper>
            <ul>
                <li className='title-of-list'>Account</li>
                <ul>
                    <li className='micro-profile'>
                        <img src={CurrentUser?.photo?.url}/>
                        <div>
                            <p className='name'>{CurrentUser?.name}</p>
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