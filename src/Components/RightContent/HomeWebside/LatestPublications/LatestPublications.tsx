import React, {FC} from 'react'

//Styled Import
import {LatestPublicationsWrapper} from './LatestPublicationsStyled';
import {AllLastPublication} from './LatestPublicationsStyled';

//Components Import
import {LastPublication} from './LastPublication/LastPublication';
import {MainPublication} from './MainPublication/MainPublication';

export const LatestPublications: FC = () =>{
    return(
        <LatestPublicationsWrapper>
            <MainPublication/>
            <AllLastPublication>
                <p className = 'title-of-publications'>Latest publications</p>
                <LastPublication/>
                <LastPublication/>
                <LastPublication/>
                <p className = 'see-more-subtitle'>See more publications</p>
            </AllLastPublication>
        </LatestPublicationsWrapper>
    );
};