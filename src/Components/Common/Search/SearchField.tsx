import React, {FC} from 'react';
import styled from 'styled-components';

import SearchIcon from '../../../icons/search.png';

const Search = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    input{
        width:90%;
        height: 100%;
        text-align: center;
        border: none;
        margin: 0 5px;
    }
    input:hover, input:active, input:focus, input:link{
        outline: none;
    }
    .search-icon{
        width: 20px;
        height: 20px;
        margin: auto;
    }
`;


export const SearchField: FC = () => {
    return(
        <Search>
            <input type='text' placeholder="Search Legalcluster"/>
            <img className="search-icon" src={SearchIcon}/>
        </Search>
    );
};