import React, {FC, useState} from 'react'

//Styled Import
import { SkillsInfoWrapper } from './SkillsInfoStyled';

//Icon Import
import Pen from '../../../../../icons/pen.png';
import Check from '../../../../../icons/check.png';
import { useEffect } from 'react';

interface ValueEdit{
    setEditValue: (isEditOpen: boolean) => void;
}

export const SkillsInfo: FC<ValueEdit> = (props) => {


    let ExpertiseArray = ['Select experience', 'Client service', 'Corporate training', 'Financial analysis', 'Menagement skills', 'Project menagment'];
    let SpecialitiesArray = ['Select speciality', 'Design patterns, modeling tools', 'Testing framworks', 'Skills using PHP', 'BS/BA in Design', 'Mobile and web QA'];
    let AdmissionArray = ['Select admission', 'Paris bar association', 'Berlin bar association', 'Praha bar association', 'Barcelona bar association', 'Mediolan bar association', 'Rome bar association'];
    let CountrysArray = ['Select country', 'Poland', 'Italy', 'Germany', 'USA', 'Spain', 'France'];
    let [isEdit, showEdit] = useState(false);
    useEffect(() => {
        props.setEditValue(isEdit);
    });

    //Hooks
    let [expertiseValue, setExpertiseValue] = useState('Client service')
    let [specialtiesValue, setSpecialtiesValue] = useState('Design patterns, modelling tools')
    let [specialtiesValue2, setSpecialtiesValue2] = useState('Testing framworks')
    let [admissionValue, setAdmissionValue] = useState('Paris bar association')
    let [admissionValue2, setAdmissionValue2] = useState('Berlin bar association')
    let [countryValue, setCountryValue] = useState('Germany')

    return(
        <SkillsInfoWrapper>
            <img className = 'edit-pen' src = {(isEdit === false? Pen : Check)} onClick={() => {showEdit(!isEdit)}} alt='IconEditPen'/>
            <div className = 'expertise'>
                <h2>Expertise</h2>
                {isEdit === false? <p>{expertiseValue}</p>: 
                <select onChange = {e => setExpertiseValue(e.target.value)}>
                    {ExpertiseArray.map(ExpertiseArray => <option key={ExpertiseArray}>{ExpertiseArray}</option>)}
                </select>
                }
            </div>
            <div className = 'specialties'>
                <h2>Specialities</h2>
                {isEdit === false?
                <div>
                    <p>{specialtiesValue}</p>
                    <p>{specialtiesValue2}</p>
                </div>
                :
                <div>
                    <select onChange = {e => setSpecialtiesValue(e.target.value)}>
                        {SpecialitiesArray.map(SpecialitiesArray => <option key={SpecialitiesArray}>{SpecialitiesArray}</option>)}
                    </select>
                    <select onChange = {e => setSpecialtiesValue2(e.target.value)}>
                        {SpecialitiesArray.map(SpecialitiesArray => <option key={SpecialitiesArray}>{SpecialitiesArray}</option>)}
                    </select>
                </div>
                }
            </div>
            <div className = 'admission-to-practice-law'>
                <h2>Admission to practice law</h2>
                {isEdit === false?
                <div>
                    <p>{admissionValue}</p>
                    <p>{admissionValue2}</p>
                </div>
                :
                <div>
                    <select onChange = {e => setAdmissionValue(e.target.value)}>
                        {AdmissionArray.map(AdmissionArray => <option key={AdmissionArray}>{AdmissionArray}</option>)}
                    </select>
                    <select onChange = {e => setAdmissionValue2(e.target.value)}>
                        {AdmissionArray.map(AdmissionArray => <option key={AdmissionArray}>{AdmissionArray}</option>)}
                    </select>
                </div>
                }
            </div>
            <div className = 'countries'>
                <h2>Countries</h2>
                {isEdit === false? <p>{countryValue}</p>:
                <select onChange = {e => setCountryValue(e.target.value)}>
                    {CountrysArray.map(CountrysArray => <option key={CountrysArray}>{CountrysArray}</option>)}
                </select>
                }
            </div>
        </SkillsInfoWrapper>
    )
}







