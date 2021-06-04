import React, {FC} from 'react'

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../tools/reducers";
import { IDataFromAPI } from '../../../../tools/reducers/DataFromAPIReducers';

//Styled Import
import {LatestPublicationsWrapper} from './LatestPublicationsStyled';

//Components Import
import {LastPublication} from './LastPublication/LastPublication';
import {MainPublication} from './MainPublication/MainPublication';

export const LatestPublications: FC = () =>{

    const { CurrentPost } = useSelector<IState, IDataFromAPI>((globalState) => ({
        ...globalState.DataFromAPI,
      }));
    return(
        <LatestPublicationsWrapper>
            {CurrentPost?.slice(0, 1)?.map(post =><MainPublication post = {post}/>)}
            <div className='right-side-of-lastes-publication-module'>
                <h2>Latest publications</h2>
                {CurrentPost?.slice(1, 4).map(post =><LastPublication post = {post}/>)}
                <p className='latest-publications-subtitle-link'>See more publications</p>
            </div>
        </LatestPublicationsWrapper>
    );
};