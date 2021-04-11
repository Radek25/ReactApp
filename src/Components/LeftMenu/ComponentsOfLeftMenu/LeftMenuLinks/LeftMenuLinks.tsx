import React, {FC} from 'react';

//Icons Import
import Publications from '../../../../icons/publications.png';
import EcoSystem from '../../../../icons/ecosystem.png';
import Entities from '../../../../icons/entities.png';

//Styled Import
import {LinksWrapper} from '../LeftMenuLinks/LeftMenuLinksStyled';

export const LeftMenuLinks: FC = () => {
    return(
        <LinksWrapper>
            <div className='left-menu-publication-ecosystem-entites'>
                <img src={Publications}></img>
                <p>Publications</p>
            </div>
            <div className='left-menu-publication-ecosystem-entites'>
                <img src={EcoSystem}></img>
                <p>EcoSystem</p>
            </div>
            <div className='left-menu-publication-ecosystem-entites'>
                <img src={Entities}></img>
                <p>Entities</p>
            </div>
        </LinksWrapper>
    );
};