import React, {FC} from 'react';
import styled from 'styled-components';

//Styled Import
import {Content} from '../LeftMenu/LeftMenuStyled';
import {BusinessCard} from '../LeftMenu/LeftMenuStyled';
import {Person} from '../LeftMenu/LeftMenuStyled';
import {YourLeftMenuLinks} from '../LeftMenu/LeftMenuStyled';
import {LeftMenuLinks} from '../LeftMenu/LeftMenuStyled';

//Icons Import
import WorkerPicture from '../../icons/WorkPort.jpg';
import Network from '../../icons/network.png';
import Publications from '../../icons/publications.png';
import Plus from '../../icons/plus.png';
import PlusUser from '../../icons/user-plus.png';
import EcoSystem from '../../icons/ecosystem.png';
import Entities from '../../icons/entities.png';


export const LeftMenu: FC = () => {
    return(
        <Content>
            <BusinessCard>
                <Person>
                    <img src={WorkerPicture}></img>
                    <p className='name-and-surname'>Huberta Swift</p>
                    <p className='job-title'>Job Title - Company</p>
                </Person>
                <YourLeftMenuLinks>
                    <img src={Network}></img>
                    <p>Your Network</p>
                    <img className='right-side-icons' src={PlusUser}></img>
                </YourLeftMenuLinks>
                <YourLeftMenuLinks>
                    <img src={Publications}></img>
                    <p>Your Publications</p>
                    <img className='right-side-icons' src={Plus}></img>
                </YourLeftMenuLinks>
            </BusinessCard> 
            <LeftMenuLinks>
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
            </LeftMenuLinks>
        </Content>
    );
};