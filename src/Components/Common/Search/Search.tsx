import React, {FC} from 'react';

//Icons Import
import SearchIcon from '../../../icons/search.png';

//Styled Import
import {SearchWrapper} from './SearchStyled'

export const Search: FC = () => {
    return(
        <SearchWrapper>
            <input type='text' placeholder="Search Legalcluster"/>
            <img className="search-icon" src={SearchIcon}/>
        </SearchWrapper>
    );
};