import React, {FC, useState} from 'react'

//Styled Import
import { ProposalsWrapper } from './ProposalsStyles';

let TitleOfTable = ['Name', 'Entity', 'Location', 'Expertise', 'Date', 'Firm']
let CountrysArray = ['Select country', 'Poland', 'Italy', 'Germany', 'USA', 'Spain', 'France'];

interface ValueEdit{
    isOpen: boolean;
}

export const Proposals: FC<ValueEdit> = (props) =>{

    //Hooki of Table
    //First column
    let [nameOne, setNameOne] = useState('Operation Tiber');
    let [nameTwo, setNameTwo] = useState('Op. Prometeo');
    let [nameThree, setNameThree] = useState('Op. Latandre');
    //Second column
    let [entityOne, setEntityOne] = useState('Renault Coler');
    let [entityTwo, setEntityTwo] = useState('Renault HQ');
    let [entityThree, setEntityThree] = useState('Renault Brutus');
    //Third column
    let [locationOne, setLocationOne] = useState('France');
    let [locationTwo, setLocationTwo] = useState('USA');
    let [locationThree, setLocationThree] = useState('Italy');
    //Fourth column
    let [expertiseOne, setExpertiseOne] = useState('#Tax');
    let [expertiseTwo, setExpertiseTwo] = useState('#M&A');
    let [expertiseThree, setExpertiseThree] = useState('#Social');
    //Fifth column
    let [dateOne, setDateOne] = useState('2018-01-20');
    let [dateTwo, setDateTwo] = useState('2019-02-18');
    let [dateThree, setDateThree] = useState('2019-02-18');
    //Sixth column
    let [firmOne, setFirmOne] = useState('Racine');
    let [firmTwo, setFirmTwo] = useState('Clifford chance');
    let [firmThree, setFirmThree] = useState('SVZ');
    
    return(
        <ProposalsWrapper>
            <h1>Proposals</h1>
        <table>
            <tr>
                {TitleOfTable.map(TitleOfTable => <th>{TitleOfTable}</th>)}
            </tr>
            <tr>
                <td>{props.isOpen == false? nameOne : <input type='text' placeholder={nameOne} onChange={(e)=>setNameOne(e.target.value)}/>}</td>
                <td>{props.isOpen == false? entityOne : <input type='text' placeholder={entityOne} onChange={(e)=>setEntityOne(e.target.value)}/>}</td>
                <td>{props.isOpen == false? locationOne : <select onChange = {e => setLocationOne(e.target.value)}>{CountrysArray.map(CountrysArray => <option>{CountrysArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? expertiseOne : <input type='text' placeholder={expertiseOne} onChange={(e)=>setExpertiseOne('#'+e.target.value)}/>}</td>
                <td>{props.isOpen == false? dateOne : <input type='date' value={dateOne} onChange={(e)=>setDateOne(e.target.value)}/>}</td>
                <td>{props.isOpen == false? firmOne : <input type='text' placeholder={firmOne} onChange={(e)=>setFirmOne(e.target.value)}/>}</td>
            </tr>
            <tr>
                <td>{props.isOpen == false? nameTwo : <input type='text' placeholder={nameTwo} onChange={(e)=>setNameTwo(e.target.value)}/>}</td>
                <td>{props.isOpen == false? entityTwo: <input type='text' placeholder={entityTwo} onChange={(e)=>setEntityTwo(e.target.value)}/>}</td>
                <td>{props.isOpen == false? locationTwo : <select onChange = {e => setLocationTwo(e.target.value)}>{CountrysArray.map(CountrysArray => <option>{CountrysArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? expertiseTwo : <input type='text' placeholder={expertiseTwo} onChange={(e)=>setExpertiseTwo('#'+e.target.value)}/>}</td>
                <td>{props.isOpen == false? dateTwo : <input type='date' value={dateTwo} onChange={(e)=>setDateTwo(e.target.value)}/>}</td>
                <td>{props.isOpen == false? firmTwo : <input type='text' placeholder={firmTwo} onChange={(e)=>setFirmTwo(e.target.value)}/>}</td>
            </tr>
            <tr>
                <td>{props.isOpen == false? nameThree : <input type='text' placeholder={nameThree} onChange={(e)=>setNameThree(e.target.value)}/>}</td>
                <td>{props.isOpen == false? entityThree : <input type='text' placeholder={entityThree} onChange={(e)=>setEntityThree(e.target.value)}/>}</td>
                <td>{props.isOpen == false? locationThree : <select onChange = {e => setLocationThree(e.target.value)}>{CountrysArray.map(CountrysArray => <option>{CountrysArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? expertiseThree : <input type='text' placeholder={expertiseOne} onChange={(e)=>setExpertiseThree('#'+e.target.value)}/>}</td>
                <td>{props.isOpen == false? dateThree : <input type='date' value={dateThree} onChange={(e)=>setDateThree(e.target.value)}/>}</td>
                <td>{props.isOpen == false? firmThree : <input type='text' placeholder={firmThree} onChange={(e)=>setFirmThree(e.target.value)}/>}</td>
            </tr>
        </table>
        <p>See more proposals</p> 
        </ProposalsWrapper>
    );
};