import React, {FC} from 'react';
import { Link } from 'react-router-dom';

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../../../../tools/reducers";
import { IDataFromAPI } from '../../../../../../../tools/reducers/DataFromAPIReducers';

//Styled Import
import {AccountWrapper} from '../Account/AccountStyled';

//Icon Import
import Privacy from '../../../../../../../icons/privacy.png';
import Settings from '../../../../../../../icons/settings.png';

export const Account: FC = () =>{
    const { CurrentUser } = useSelector<IState, IDataFromAPI>((globalState) => ({
        ...globalState.DataFromAPI,
      }));
    return(
        <AccountWrapper>
            <h5>Account</h5>
            <div className='user-profile-in-open-menu'>
                <img src={CurrentUser?.photo?.url}/>
                <div className='name-of-user'>
                    <p>{CurrentUser?.name}</p>
                    <p>See profile</p>
                </div>
            </div>
            <div className='options-of-profile-in-open-menu'>
                <img src={Privacy}/>
                <p>Privacy</p>
            </div>
            <div className='options-of-profile-in-open-menu'>
                <img src={Settings}/>
                <p>Settings</p>
            </div>
        </AccountWrapper>
    );
};