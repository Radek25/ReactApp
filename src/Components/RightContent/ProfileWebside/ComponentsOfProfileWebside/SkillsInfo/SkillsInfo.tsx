import React, {FC, useState} from 'react'

//Styled Import
import { SkillsInfoWrapper } from './SkillsInfoStyled';

//Icon Import
import Pen from '../../../../../icons/pen.png';
import Check from '../../../../../icons/check.png';

interface ValueEdit{
    setEditValue: (isEditOpen: boolean) => void;
}

export const SkillsInfo: FC<ValueEdit> = (props) => {


    let ExpertiseArray = ['Select experience', 'Client service', 'Corporate training', 'Financial analysis', 'Menagement skills', 'Project menagment'];
    let SpecialitiesArray = ['Select speciality', 'Design patterns, modeling tools', 'Testing framworks', 'Skills using PHP', 'BS/BA in Design', 'Mobile and web QA'];
    let AdmissionArray = ['Select admission', 'Paris bar association', 'Berlin bar association', 'Praha bar association', 'Barcelona bar association', 'Mediolan bar association', 'Rome bar association'];
    let CountrysArray = ['Select country', 'Poland', 'Italy', 'Germany', 'USA', 'Spain', 'France'];
    let [isEdit, showEdit] = useState(false);
    props.setEditValue(isEdit);

    //Hooks
    let [expertiseValue, setExpertiseValue] = useState('Client service')
    let [specialtiesValue, setSpecialtiesValue] = useState('Design patterns, modelling tools')
    let [specialtiesValue2, setSpecialtiesValue2] = useState('Testing framworks')
    let [admissionValue, setAdmissionValue] = useState('Paris bar association')
    let [admissionValue2, setAdmissionValue2] = useState('Berlin bar association')
    let [countryValue, setCountryValue] = useState('Germany')

    return(
        <SkillsInfoWrapper>
            <img className = 'edit-pen' src = {(isEdit == false? Pen : Check)} 
                onClick={() => {showEdit(isEdit == false ? isEdit = true : isEdit = false)}}>
            </img>
            <div className = 'expertise'>
                <p className = 'title'>Expertise</p>
                {isEdit == false?
                <p className = 'value'>{expertiseValue}</p>:
                <select onChange = {e => setExpertiseValue(e.target.value)}>
                    {ExpertiseArray.map(ExpertiseArray => <option>{ExpertiseArray}</option>)}
                </select>
                }
                </div>
                <div className = 'specialties'>
                <p className = 'title'>Specialities</p>
                {isEdit == false?
                <div>
                    <p className = 'value'>{specialtiesValue}</p>
                    <p className = 'value'>{specialtiesValue2}</p>
                </div>
                :
                <div>
                    <select onChange = {e => setSpecialtiesValue(e.target.value)}>
                        {SpecialitiesArray.map(SpecialitiesArray => <option>{SpecialitiesArray}</option>)}
                    </select>
                    <select onChange = {e => setSpecialtiesValue2(e.target.value)}>
                        {SpecialitiesArray.map(SpecialitiesArray => <option>{SpecialitiesArray}</option>)}
                    </select>
                </div>
                }
                </div>
                <div className = 'admission-to-practice-law'>
                <p className = 'title'>Admission to practice law</p>
                {isEdit == false?
                <div>
                    <p className = 'value'>{admissionValue}</p>
                    <p className = 'value'>{admissionValue2}</p>
                </div>
                :
                <div>
                    <select onChange = {e => setAdmissionValue(e.target.value)}>
                        {AdmissionArray.map(AdmissionArray => <option>{AdmissionArray}</option>)}
                    </select>
                    <select onChange = {e => setAdmissionValue2(e.target.value)}>
                        {AdmissionArray.map(AdmissionArray => <option>{AdmissionArray}</option>)}
                    </select>
                </div>
                }
                </div>
                <div className = 'countries'>
                <p className = 'title'>Countries</p>
                {isEdit == false?
                <p className = 'value'>{countryValue}</p>:
                <select onChange = {e => setCountryValue(e.target.value)}>
                    {CountrysArray.map(CountrysArray => <option>{CountrysArray}</option>)}
                </select>
                }
                </div>
        </SkillsInfoWrapper>
    )
}






