import React, {FC} from 'react';

//Styled Import
import { OptionWrapper } from './OptionStyled';

//Icons Import
import Cross from '../../../../../icons/cross-entities.png';

interface Property{
    property: string[];
}

export const Option: FC<Property> = (props) => {

    const selectorOptions: string[] = ['Company', 'Status', 'Contains', 'Ends before', 'Is', 'In'];

    return(
        <OptionWrapper>
           {props.property.map(property =>
                <div className='option'>
                    <img src={Cross} alt='IconDelete'/>
                    <p>{property}</p>
                    <select>
                        {selectorOptions.map(options => <option>{options}</option>)}
                    </select>
                    <select>
                        {selectorOptions.map(options => <option>{options}</option>)}
                    </select>
                    <input type='text' placeholder='Type...'/>
                </div>
            )}
        </OptionWrapper>
    );
};