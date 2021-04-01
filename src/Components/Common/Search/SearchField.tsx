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
        box-sizing: border-box;
        border: none;
        text-align: center;
    }
    input:hover, input:active, input:focus, input:link{
        outline: none;
    }
    .search-icon{
        width: 15px;
        height: 15px;
        margin: auto;
        box-sizing:border-box;
    }
`;


export const SearchField: FC = () => {
    return(
        <Search>
            <input type='text' placeholder="Search Legalcluster"></input>
            <img className="search-icon" src={SearchIcon}></img>
        </Search>
    );
};