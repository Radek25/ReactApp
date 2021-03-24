import React, {FC} from 'react';
import styled from 'styled-components';

import SearchIcon from '../../../icons/search.png';

const Search = styled.div`
    background-color: red;
    border: 4px solid black; 
    display: flex;
    justify-content: space-between;
    input{
        width:90%;
        height: 100%;
        background-color:green;
        box-sizing: border-box;
    }
    img{
        width: 10%;
        height: 100%;
        box-sizing:border-box;
    }
`;


export const SearchField: FC = () => {
    return(
        <Search>
            <input type='text'></input>
            <img src={SearchIcon}></img>
        </Search>
    );
};