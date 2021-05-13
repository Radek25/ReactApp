import React, {FC, useState} from 'react'

//Styled Import
import {ProfileWebsideWrapper} from './ProfileWebsideStyled';

//Components Import
import { TopOptions } from './ComponentsOfProfileWebside/TopOptions/TopOptions';
import { ProfileInfo} from './ComponentsOfProfileWebside/ProfileInfo/ProfileInfo';
import { SkillsInfo } from './ComponentsOfProfileWebside/SkillsInfo/SkillsInfo';
import {PanelInfo} from './ComponentsOfProfileWebside/PanelInfo/PanelInfo'

export const ProfileWebside: FC = () =>{

    let [valueOfEdit, setEditValue] = useState(false);

    return(
        <ProfileWebsideWrapper>
            <TopOptions/>
            <ProfileInfo/>
            <SkillsInfo setEditValue={setEditValue}/>
            <PanelInfo isOpen={valueOfEdit}/>
            {/* <ServiseProjects/>
            <InternalCorrespondants/>
            <Proposals/>
            <InternalPeviews/>
            <AmountOfFees/> */}
        </ProfileWebsideWrapper>
    );
};