import React, {FC} from 'react'

//Styled Import
import { CorrespondantProfileWrapper } from './CorrespondantProfileStyle';

//Icon Import 
import Message from '../../../../../../icons/message.png';
import Person from '../../../../../../icons/user-profil-info.png';

interface UserData{
    userName: string;
    userPhoto: string;
}

export const CorrespondantProfile: FC<UserData> = (props) => {
    console.log(props.userPhoto);
    return(
        <CorrespondantProfileWrapper>
                <img src={props.userPhoto}/>
                <p>{props.userName}</p>
                <div className = 'option-of-correspondents'>
                    <img src={Message}/>
                    <p>Message</p>
                    <img src={Person}/>
                    <p>Profile</p>
                </div>
        </CorrespondantProfileWrapper>
    )
}
