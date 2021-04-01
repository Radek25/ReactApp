import React, {FC} from 'react';
import styled from 'styled-components';

import WorkerPicture from '../../icons/WorkPort.jpg';
import Network from '../../icons/network.png';
import Publications from '../../icons/publications.png';
import Plus from '../../icons/plus.png';
import PlusUser from '../../icons/user-plus.png';

const Content = styled.div`
    background-color: blue;
    width: 18%;
    height: 100%;
    box-sizing: border-box;
`;
const BusinessCard = styled.div`
    width: 80%;
    height: 200px;
    margin: 30px auto 10px auto;
    background-color: green;
`;
const Person = styled.div`
    width: 100%;
    height: 70%;
    background-color: pink;
    text-align: center;
    padding: 20px 5px 5px 5px;
    box-sizing: border-box;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    p{
        padding: 0;
        margin: 5px 0;
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
                
            </BusinessCard> 
        </Content>
    );
};