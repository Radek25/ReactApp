import React, {FC} from 'react';
import styled from 'styled-components';

import WorkerPicture from '../../icons/WorkPort.jpg';
import Network from '../../icons/network.png';
import Publications from '../../icons/publications.png';
import Plus from '../../icons/plus.png';
import PlusUser from '../../icons/user-plus.png';
import EcoSystem from '../../icons/ecosystem.png';
import Entities from '../../icons/entities.png';

const Content = styled.div`
    background-color: lightgrey;
    width: 18%;
    height: 100%;
    box-sizing: border-box;
`;
const BusinessCard = styled.div`
    width: 80%;
    height: 205px;
    margin: 10px auto 10px auto;
    background-color:white;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid grey;

    .your-network-and-publicatrions{
        width: 92%;
        height: 30px;
        display: flex;
        align-items: center;
        margin: 8px auto;
        box-sizing: border-box;
        padding: 0;
        position: relative;

        p{
            padding: 5px;
            font-size: 14px;
        }
        .right-side-icons{
            position: absolute;
            right: 0px;
            box-sizing: border-box;
            padding: 2px;
            border: 1.5px solid grey;
            border-radius: 5px;
        }
    }
`;
const Person = styled.div`
    width: 100%;
    height: 60%;
    background-color: white;
    text-align: center;
    padding: 20px 5px 5px 5px;
    box-sizing: border-box;
    border-bottom: 1px solid grey;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    p{
        padding: 0;
        margin: 5px 0;
    }
    .job-title{
        font-size: 10px;
    }
`;
const LeftMenuLinks = styled.div`
    width: 80%;
    margin: 0 auto;
    height : 100px;
    background-color: lightgrey;
    .left-menu-publication-ecosystem-entites{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 92%;
        height: 30%;
        background-color: lightgrey;
        margin: 5px auto; 
        img{
            width: 20px;
            height: 20px;
        }
        p{
            font-size: 15px;
            margin-left: 15px;
        }
    }
`;

export const LeftMenu: FC = () => {
    return(
        <Content>
            <BusinessCard>
                <Person>
                    <img src={WorkerPicture}></img>
                    <p className="name-and-surname">Huberta Swift</p>
                    <p className="job-title">Job Title - Company</p>
                </Person>
                <div className='your-network-and-publicatrions'>
                    <img src={Network}></img>
                    <p>Your Network</p>
                    <img className='right-side-icons' src={PlusUser}></img>
                </div>
                <div className='your-network-and-publicatrions'>
                    <img src={Publications}></img>
                    <p>Your Publications</p>
                    <img className='right-side-icons' src={Plus}></img>
                </div>
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