import React, {FC} from 'react'

//Styled Import
import {ProfileWebsideWrapper} from './ProfileWebsideStyled';

//Components Import
import { TopOptions } from './ComponentsOfProfileWebside/TopOptions/TopOptions';
import { ProfileInfo} from './ComponentsOfProfileWebside/ProfileInfo/ProfileInfo';

export const ProfileWebside: FC = () =>{
    return(
        <ProfileWebsideWrapper>
            <TopOptions/>
            <ProfileInfo/>
            {/* <SkillsInfo/>
            <PanelInfo/>
            <ServiseProjects/>
            <InternalCorrespondants/>
            <Proposals/>
            <InternalPeviews/>
            <AmountOfFees/> */}
            aa
        </ProfileWebsideWrapper>
    );
};