import React, {FC, useState} from 'react';
interface FilterProps{
    addText : (text : string) => void;
}
export const FilterInput: FC<FilterProps> = (props) =>{
    return(
        <input type='text' placeholder='Filter...' onChange={(e) =>props.addText(e.target.value)}/>
    );
};
