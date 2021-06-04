import React, {FC, useState} from 'react'

//Styled Import
import {ProfileWebsideWrapper} from './ProfileWebsideStyled';

//Components Import
import { TopOptions } from './ComponentsOfProfileWebside/TopOptions/TopOptions';
import { ProfileInfo} from './ComponentsOfProfileWebside/ProfileInfo/ProfileInfo';
import { SkillsInfo } from './ComponentsOfProfileWebside/SkillsInfo/SkillsInfo';
import {PanelInfo} from './ComponentsOfProfileWebside/PanelInfo/PanelInfo'
import { Proposals } from './ComponentsOfProfileWebside/Proposals/Proposals';
import { InternalReviews } from './ComponentsOfProfileWebside/InternalReviews/InternalReviews';
import { AmountOfFees } from './ComponentsOfProfileWebside/AmountOfFees/AmountOfFees';

export const ProfileWebside: FC = () =>{

    let [valueOfEdit, setEditValue] = useState(false);

    return(
        <ProfileWebsideWrapper>
            <TopOptions/>
            <ProfileInfo/>
            <SkillsInfo setEditValue={setEditValue}/>
            <PanelInfo isOpen={valueOfEdit}/>
            <Proposals isOpen={valueOfEdit}/>
            <InternalReviews isOpen={valueOfEdit}/>
            <AmountOfFees isOpen={valueOfEdit}/>
        </ProfileWebsideWrapper>
    );
};