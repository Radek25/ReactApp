import React, {FC} from 'react';

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../../../../tools/reducers";
import { IDataFromAPI } from '../../../../../../../tools/reducers/DataFromAPIReducers';

//Styled Import
import {AccountWrapper} from '../Account/AccountStyled';

//Icon Import
import Privacy from '../../../../../../../icons/privacy.png';
import Settings from '../../../../../../../icons/settings.png';
import { Link } from 'react-router-dom';

export const Account: FC = () =>{
    const { CurrentUser } = useSelector<IState, IDataFromAPI>((globalState) => ({
        ...globalState.DataFromAPI,
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
                            <Link to='/profile'><p className='see-profile'>See profile</p></Link>
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