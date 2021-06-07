import React, {FC, useState} from 'react';

//Styled Import
import { FilterPanelWrapper } from './FilterPanelStyled';

//Component Import
import { Option } from './Option/Option';

export const FilterPanel: FC = () => {

    const [property, setProperty] = useState<string[]>([]);
    const [value, setValue] = useState('Where');

    return(
        <FilterPanelWrapper>
            <h4>Rows are filtered by the following conditions starting from the top</h4>
            <Option property={property}/>
            <button onClick={() => {setProperty(property => [...property, value])}}>Add filter</button>
            <select className='main-select' onChange={e => setValue(e.target.value)}>
                <option value = 'Where'>Where</option>
                <option value = 'And'>And</option>
            </select>
        </FilterPanelWrapper>
    );
};
