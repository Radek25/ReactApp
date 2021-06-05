import React, {FC} from 'react';
import { Link } from 'react-router-dom';

//Styled Import
import {LinksWrapper} from '../LeftMenuLinks/LeftMenuLinksStyled';

//Icons Import
import Publications from '../../../../icons/publications.png';
import EcoSystem from '../../../../icons/ecosystem.png';
import Entities from '../../../../icons/entities.png';

export const LeftMenuLinks: FC = () => {
    return(
        <LinksWrapper>
        <Link to = {'/publications'}>
            <div>
                <img src={Publications} alt='IconOfPublication'/>
                <p>Publications</p>
            </div>
        </Link>
        <Link to = {'/ecosystem'}>
            <div>
                <img src={EcoSystem} alt='IconOfEcoSystem'/>
                <p>EcoSystem</p>
            </div>
        </Link>
        <Link to = {'/entities'}>
            <div>
                <img src={Entities} alt='IconOfEntities'/>
                <p>Entities</p>
            </div>
        </Link>
        </LinksWrapper>
    );
};