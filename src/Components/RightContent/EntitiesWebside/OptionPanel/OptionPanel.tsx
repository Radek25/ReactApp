import React, {FC, useState} from 'react';

//Styled Import
import { OptionPanelWrapper } from './OptionPanelStyled';

//Icons Import
import ArrowDown from '../../../../icons/arrow-down-blue.png';
import ThreeDots from '../../../../icons/three-dots.png';
import SortArrow from '../../../../icons/sort-arrow.png';
import Filter from '../../../../icons/filter.png';
import Max from '../../../../icons/max-arrow.png';
import Min from '../../../../icons/min-arrow.png';
import Share from '../../../../icons/share-arrow.png';
import { FilterInput } from './../../../Common/FilterInput/FilterInput';

interface IsFilterOpen{
    setFilter: (isOpen: boolean) => void;
}

export const OptionPanel: FC<IsFilterOpen> = (props) => {

    const [text, addText] = useState('');
    let [isFilterOpen, setFilterOpen] = useState(false);
    props.setFilter(isFilterOpen);

    return(
        <OptionPanelWrapper>
            <select>
                <option>All</option>
                <option>All2</option>
            </select>
            <img className='arrow-down' src={ArrowDown}/>
            <img className='three-dots' src={ThreeDots}/>
            <div className = 'filter-options'>
                <div className='sort-option'><img src={SortArrow}/>Sort</div>
                <div onClick={() => (isFilterOpen == false? setFilterOpen(true) : setFilterOpen(false))} className='filter-option'><img src={Filter}/>Filters</div>
            </div>
            <img className='view-option' src={Max}/>
            <div className='share-option'><img src={Share}/>Share</div>
            <div className='right-side-of-optional-panel'>
                <FilterInput addText = {addText}/>
                <select>
                    <option>Followed</option>
                    <option>Followed2</option>
                </select>
                <img className='arrow-down2' src={ArrowDown}/>
            </div>
        </OptionPanelWrapper>
    );
};