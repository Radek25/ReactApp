import React, {FC, useState} from 'react';

//Styled Import
import { FilterPanelWrapper } from './FilterPanelStyled';

//Component Import
import { Option } from './Option/Option';

export const FilterPanel: FC = () => {

    let [property, setProperty] = useState<string[]>([]);
    let [value, setValue] = useState('Where')

    return(
        <FilterPanelWrapper>
            <p>Rows are filtered by the following conditions starting from tthe top</p>
            {property.map(() => <Option/>)}
            <button onClick={() => {setProperty(property => [...property, value])}}>Add filter</button>
            <select onChange={e => setValue(e.target.value)}>
                <option value = 'Where'>Where</option>
                <option value = 'And'>And</option>
            </select>
        </FilterPanelWrapper>
    );
};
