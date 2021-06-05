import React, {FC} from 'react';

//Styled Import
import { ExtraFiltersWrapper } from './ExtraFiltersStyled';

//Icons Import
import Entitie from './../../../../icons/entities3.png';
import File from './../../../../icons/file-signature.png';
import People from './../../../../icons/people.png';
import Filter from './../../../../icons/filter.png';

export const ExtraFilters: FC = () => {
  
    const FiltersArray = [
        {Icon: undefined, Title: 'All'},
        {Icon: Entitie, Title: 'SAS'},
        {Icon: Entitie, Title: 'SARL'},
        {Icon: Entitie, Title: 'Secondary business'},
        {Icon: People, Title: 'Comunities'},
        {Icon: File, Title: 'POA'},
        {Icon: Filter, Title: 'Survey'},
        {Icon: undefined, Title: '...'}];
     
    return(
       <ExtraFiltersWrapper>
           {FiltersArray.map(FiltersData =>
           <div key={FiltersData.Title}>{FiltersData.Icon !== undefined? <img src={FiltersData.Icon} alt='IconOfOption'/> : null}{FiltersData.Title}
           </div>)}
       </ExtraFiltersWrapper> 
    );
};