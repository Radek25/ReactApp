import React, {FC, useState} from 'react'

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../../tools/reducers";
import { IDataFromAPI } from '../../../../../tools/reducers/DataFromAPIReducers';

//Styled Import
import { PanelInfoWrapper } from './PanelInfoStyled';

//Icon Import
import FileIcon from '../../../../../icons/file.png';

//Component Import
import {CorrespondantProfile} from './CorrespondantProfile/CorrespondantProfile';
interface ValueEdit{
    isOpen: boolean;
}

export const PanelInfo: FC<ValueEdit> = (props) => {

    const { CurrentPost } = useSelector<IState, IDataFromAPI>((globalState) => ({
        ...globalState.DataFromAPI,
    }));

    //Hooks
    let [hourly, setHourly] = useState('610€/hour (Negociated)')
    let [terms, setTerms] = useState('Monthly 10k€ retainer - see with Jeanny Smith')
    let [file, setFile] = useState('No file loaded!')
    let [services, setServices] = useState('Corporate M&A and international asquisitions')
    return(
        <PanelInfoWrapper>
           <h1>Panel Information</h1>
           <h2>Hourly fee</h2>
           {props.isOpen === false? <p>{hourly}</p> : <input type='text' placeholder={hourly} onChange={(e)=>setHourly(e.target.value)}/>}
           <h2>Terms &amp; conditions</h2>
           {props.isOpen === false? <p>{terms}</p> : <input className='terms-input' type='text' placeholder={terms} onChange={(e)=>setTerms(e.target.value)}/>}
           {props.isOpen === false? <p className = 'loaded-file' ><img src = {FileIcon} alt='IconFile'/>{file}</p> : <input className = 'loaded-file' type='file' onChange={(e)=>setFile(e.target.value)}/>}
           <h2>Services &amp; projects</h2>
           {props.isOpen === false? <p>{services}</p> : <input className = 'services-input' type='text' placeholder={services} onChange={(e)=>setServices(e.target.value)}/>}
           <h2>International correspondents</h2>
           {CurrentPost?.slice(0,2).map(CurrentPost => <CorrespondantProfile key={CurrentPost.id} userName={CurrentPost.userPost?.name !== undefined? CurrentPost.userPost.name : 'No user'} userPhoto={CurrentPost.picturePost.url !== undefined? CurrentPost.picturePost.url : 'No photo'}/>)}
        </PanelInfoWrapper>
    )
}