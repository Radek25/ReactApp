import React, {FC, useState} from 'react'

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../../tools/reducers";
import { IDataFromAPI } from '../../../../../tools/reducers/DataFromAPIReducers';

//Styled Import
import { ProfileInfoWrapper } from './ProfileInfoStyled';

//Icon Import
import Pen from '../../../../../icons/pen.png';
import Check from '../../../../../icons/check.png';
import { useEffect } from 'react';

export const ProfileInfo: FC = () => {

    const { CurrentUser } = useSelector<IState, IDataFromAPI>((globalState) => ({
        ...globalState.DataFromAPI,
    }));

    //Data hooks
    let [name, setName] = useState<string | undefined>('No user');
    let [company, setCompany] = useState<string | undefined>('No company');
    let [city, setCity] = useState<string | undefined>('No city');
    let [partner, setPartner] = useState('Partner');

    useEffect(() => {
        setName(CurrentUser?.name,);
        setCompany(CurrentUser?.company.name);
        setCity(CurrentUser?.address.city)
    }, [CurrentUser?.name, CurrentUser?.company.name, CurrentUser?.address.city]);
      
    let [isEdit, showEdit] = useState(false);
    return(
        <ProfileInfoWrapper>
            <img className = 'edit-pen' src = {(isEdit === false? Pen : Check)} 
                onClick={()=> 
            {showEdit(isEdit === false ? isEdit = true : isEdit = false)}} alt='IconEditPen'/>
            <div className = 'photo-of-profile'>
                <img src={CurrentUser?.photo?.url} alt='UserPhoto'/>
                <p>See profil</p>
            </div>
            <div className = 'info-of-userProfil'>
                {isEdit === false? (
                    <ul className = 'list-of-data'>
                        <li>{name}</li>
                        <li>{company}</li>
                        <li>{city}</li>
                        <li>{partner}</li>
                    </ul>
                ):(
                    <ul>
                        <li><input type = 'text' placeholder = {name} onChange={event => setName(event.target.value)}/></li>
                        <li><input type = 'text' placeholder = {company} onChange={event => setCompany(event.target.value)}/></li>
                        <li><input type = 'text' placeholder = {city} onChange={event => setCity(event.target.value)}/></li>
                        <li><input type = 'text' placeholder = 'Partner' onChange={event => setPartner(event.target.value)}/></li>
                    </ul>
                )
                }
            </div>
            <div className = 'email-and-phone'>
                {isEdit === false? (
                    <ul className = 'list-of-data-email-phone'>
                        <li>{CurrentUser?.email}</li>
                        <li>+33 (0)6 12 34 56 78</li>
                    </ul>
                ):(
                    <ul>
                        <li><input type = 'text' placeholder = {CurrentUser?.email}/></li>
                        <li><input type = 'text' placeholder = '+33 (0)6 12 34 56 78'/></li>
                    </ul>
                )
                }
            </div>
        </ProfileInfoWrapper>
    )
}