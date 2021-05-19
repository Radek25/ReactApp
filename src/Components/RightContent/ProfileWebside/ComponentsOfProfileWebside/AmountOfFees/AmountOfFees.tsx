import React, {FC, useState} from 'react'

//Styled Import
import { AmountOfFeesWrapper } from './AmountOfFeesStyled';
 
let TitleOfTable = ['Year', 'Cost center', 'Total amount', 'Law firm']
let YearsArray: string[] = [];
for (let index = 0; index < 10; index++) {
    YearsArray.push(((new Date().getFullYear()) - index).toString());
}
let CurrencyArray = ['€', '$', '₤', '¥', 'PLN'];

interface ValueEdit{
    isOpen: boolean;
}

export const AmountOfFees: FC<ValueEdit> = (props) =>{

    //Hooki of Table
    //First column
    let [yearOne, setYearOne] = useState('2017');
    let [yearTwo, setYearTwo] = useState('2018');
    let [yearThree, setYearThree] = useState('2019');
    let [yearFour, setYearFour] = useState('2020');
    let [yearFive, setYearFive] = useState('2021');
    //Second column
    let [costOne, setCostOne] = useState('CS 153');
    let [costTwo, setCostTwo] = useState('CS 153');
    let [costThree, setCostThree] = useState('CS 47');
    let [costFour, setCostFour] = useState('CS 153');
    let [costFive, setCostFive] = useState('CS 32');
    //Third column
    let [totalOne, setTotalOne] = useState(3500);
    let [currencyOne, setCurrencyOne] = useState('€');

    let [totalTwo, setTotalTwo] = useState(9500);
    let [currencyTwo, setCurrencyTwo] = useState('€');

    let [totalThree, setTotalThree] = useState(10500);
    let [currencyThree, setCurrencyThree] = useState('€');

    let [totalFour, setTotalFour] = useState(18500);
    let [currencyFour, setCurrencyFour] = useState('€');

    let [totalFive, setTotalFive] = useState(15500);
    let [currencyFive, setCurrencyFive] = useState('€');
    //Fourth column
    let [lawOne, setLawOne] = useState('Clifford chance');
    let [lawTwo, setLawTwo] = useState('Linklaters');
    let [lawThree, setLawThree] = useState('Linklaters');
    let [lawFour, setLawFour] = useState('Linklaters');
    let [lawFive, setLawFive] = useState('Linklaters');
    
    return(
        <AmountOfFeesWrapper>
            <h1>Amount of fees</h1>
        <table>
            <tr>
                {TitleOfTable.map(TitleOfTable => <th>{TitleOfTable}</th>)}
            </tr>
            <tr>
                <td>{props.isOpen == false? yearOne : <select onChange={(e)=>setYearOne(e.target.value)}>{YearsArray.map(YearsArray => <option>{YearsArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? costOne : <input type='text' placeholder={costOne} onChange={(e)=>setCostOne(e.target.value)}/>}</td>
                <td>{props.isOpen == false? (totalOne+currencyOne) : <div><input type='number' value={totalOne} onChange={(e)=>setTotalOne(parseFloat(e.target.value))}/><select onChange={(e)=>setCurrencyOne(e.target.value)}>{CurrencyArray.map(CurrencyArray => <option>{CurrencyArray}</option>)}</select></div>}</td>
                <td>{props.isOpen == false? lawOne : <input type='text' placeholder={lawOne} onChange={(e)=>setLawOne(e.target.value)}/>}</td>
            </tr>
            <tr>
                <td>{props.isOpen == false? yearTwo :  <select onChange={(e)=>setYearTwo(e.target.value)}>{YearsArray.map(YearsArray => <option>{YearsArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? costTwo: <input type='text' placeholder={costTwo} onChange={(e)=>setCostTwo(e.target.value)}/>}</td>
                <td>{props.isOpen == false? (totalTwo+currencyTwo)  : <div><input type='number' value={totalTwo} onChange={(e)=>setTotalTwo(parseFloat(e.target.value))}/><select onChange={(e)=>setCurrencyTwo(e.target.value)}>{CurrencyArray.map(CurrencyArray => <option>{CurrencyArray}</option>)}</select></div>}</td>
                <td>{props.isOpen == false? lawTwo : <input type='text' placeholder={lawTwo} onChange={(e)=>setLawTwo(e.target.value)}/>}</td>
            </tr>
            <tr>
                <td>{props.isOpen == false? yearThree :  <select onChange={(e)=>setYearThree(e.target.value)}>{YearsArray.map(YearsArray => <option>{YearsArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? costThree :  <input type='text' placeholder={costThree} onChange={(e)=>setCostThree(e.target.value)}/>}</td>
                <td>{props.isOpen == false? (totalThree+currencyThree)  : <div><input type='number' value={totalThree} onChange={(e)=>setTotalThree(parseFloat(e.target.value))}/><select onChange={(e)=>setCurrencyThree(e.target.value)}>{CurrencyArray.map(CurrencyArray => <option>{CurrencyArray}</option>)}</select></div>}</td>
                <td>{props.isOpen == false? lawThree : <input type='text' placeholder={lawOne} onChange={(e)=>setLawThree(e.target.value)}/>}</td>
            </tr>
            <tr>
                <td>{props.isOpen == false? yearFour :  <select onChange={(e)=>setYearFour(e.target.value)}>{YearsArray.map(YearsArray => <option>{YearsArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? costFour : <input type='text' placeholder={costFour} onChange={(e)=>setCostFour(e.target.value)}/>}</td>
                <td>{props.isOpen == false? (totalFour+currencyFour)  : <div><input type='number' value={totalFour} onChange={(e)=>setTotalFour(parseFloat(e.target.value))}/><select onChange={(e)=>setCurrencyFour(e.target.value)}>{CurrencyArray.map(CurrencyArray => <option>{CurrencyArray}</option>)}</select></div>}</td>
                <td>{props.isOpen == false? lawFour : <input type='text' placeholder={lawFour} onChange={(e)=>setLawFour(e.target.value)}/>}</td>
            </tr>
            <tr>
                <td>{props.isOpen == false? yearFive :  <select onChange={(e)=>setYearFive(e.target.value)}>{YearsArray.map(YearsArray => <option>{YearsArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? costFive : <input type='text' placeholder={costFive} onChange={(e)=>setCostFive(e.target.value)}/>}</td>
                <td>{props.isOpen == false? (totalFive+currencyFive) : <div><input type='number' value={totalFive} onChange={(e)=>setTotalFive(parseFloat(e.target.value))}/><select onChange={(e)=>setCurrencyFive(e.target.value)}>{CurrencyArray.map(CurrencyArray => <option>{CurrencyArray}</option>)}</select></div>}</td>
                <td>{props.isOpen == false? lawFive : <input type='text' placeholder={lawFive} onChange={(e)=>setLawFive(e.target.value)}/>}</td>
            </tr>
        </table>
        </AmountOfFeesWrapper>
    );
};