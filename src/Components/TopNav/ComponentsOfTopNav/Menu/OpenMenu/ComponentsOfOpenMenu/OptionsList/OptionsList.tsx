import React, {FC} from 'react';

//Styled Import
import {ListWrapper} from '../OptionsList/OptionsListStyled';

//Icons Import
import Home from '../../../../../../../icons/house2.png';
import Publications from '../../../../../../../icons/publications.png';
import People from '../../../../../../../icons/people.png';
import Entities from '../../../../../../../icons/entities2.png';
import Administration from '../../../../../../../icons/administration.png';
import Corporate from '../../../../../../../icons/entities.png';

export const OptionsList: FC = () =>{
    return(
        <ListWrapper>
            <ul>
                <li className='title-of-list'>Platform</li>
                <ul className='platform'>
                    <li>
                        <img src={Home}></img>
                        <p>Home</p>
                    </li>
                    <li>
                        <img src={Publications}></img>
                        <p>Publications</p>
                    </li>
                    <li>
                        <img src={People}></img>
                        <p>People</p>
                    </li>
                    <li>
                        <img src={Entities}></img>
                        <p>Entities</p>
                    </li>
                    <li>
                        <img src={Administration}></img>
                        <p>Administration</p>
                    </li>
                </ul>
                <li className='title-of-list'>Workspaces</li>
                <ul className='workspaces'>
                    <li>
                        <img src={Publications}></img> {/*Do zmainy - brak ikony*/}
                        <p>Client contract</p>
                    </li>
                    <li>
                        <img src={Publications}></img> {/*Do zmainy - brak ikony*/}
                        <p>Supplier contract</p>
                    </li>
                    <li>
                        <img src={Corporate}></img>
                        <p>Corporate</p>
                    </li>
                    <li>
                        <img src={Publications}></img> {/*Do zmainy - brak ikony*/}
                        <p>Group Norms</p>
                    </li>
                    <li>
                        <img src={Publications}></img> {/*Do zmainy - brak ikony*/}
                        <p>Real estate contracts</p>
                    </li>
                </ul>
            </ul>
    </ListWrapper>
    );
};