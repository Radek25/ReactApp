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
    return(
        <CorrespondantProfileWrapper>
                <img src={props.userPhoto} alt='UserPhoto'/>
                <p>{props.userName}</p>
                <div className = 'option-of-correspondents'>
                    <img src={Message} alt='IconMessage'/>
                    <p>Message</p>
                    <img src={Person} alt='IconPerson'/>
                    <p>Profile</p>
                </div>
        </CorrespondantProfileWrapper>
    )
}
