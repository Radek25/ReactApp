import React, {FC, useState} from 'react';

//Styled Import
import { OptionWrapper } from './OptionStyled';

//Icons Import
import Cross from '../../../../../icons/cross-entities.png';

interface Property{
    property: string[];
}

export const Option: FC<Property> = (props) => {

    let SelectorOptions: string[] = ['Company', 'Status', 'Contains', 'Ends before', 'Is', 'In'];

    return(
        <OptionWrapper>
           {props.property.map(arr =>
                <div className='option'>
                    <img src={Cross}/>
                    <p>{arr}</p>
                    <select>
                        {SelectorOptions.map(options => <option>{options}</option>)}
                    </select>
                    <select>
                        {SelectorOptions.map(options => <option>{options}</option>)}
                    </select>
                    <input type='text' placeholder='Type...'/>
                </div>
            )}
        </OptionWrapper>
    );
};