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
    addText: (text: string) => void;
    setFilter: (isOpen: boolean) => void;
    setSort: (isSort: boolean) => void;
    setFullScreen: (isSort: boolean) => void;
}

export const OptionPanel: FC<IsFilterOpen> = (props) => {

    const [text, addText] = useState('');
    props.addText(text);
    const [isFilterOpen, setFilterOpen] = useState(false);
    props.setFilter(isFilterOpen);
    const [isSortClick, setSortClick] = useState(false)
    props.setSort(isSortClick);
    const [isFullScreenOpen, setFullScreenOpen] = useState(false)
    props.setFullScreen(isFullScreenOpen);

    function copyToClipboard(link: string) {
        navigator.clipboard.writeText(link);
    }

    return(
        <OptionPanelWrapper>
            <select>
                <option>All</option>
                <option>All2</option>
            </select>
            <img className='arrow-down' src={ArrowDown}/>
            <img className='three-dots' src={ThreeDots}/>
            <div className = 'filter-options'>
                <div onClick={() => setSortClick(!isSortClick)} className='sort-option'><img src={SortArrow}/>Sort</div>
                <div onClick={() => setFilterOpen(!isFilterOpen)} className='filter-option'><img src={Filter}/>Filters</div>
            </div>
            <img onClick={() => setFullScreenOpen(!isFullScreenOpen)} className='view-option' src={isFullScreenOpen == false? Max : Min}/>
            <div onClick={() => copyToClipboard(window.location.href)} className='share-option'><img src={Share}/>Share</div>
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