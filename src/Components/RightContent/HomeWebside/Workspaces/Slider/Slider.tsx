import React, {FC} from 'react';

//Styled Import
import {SliderWrapper} from './SliderStyled';
import {TileWrapper} from './SliderStyled';
import {Tile} from './SliderStyled';

//Icon Import
import Icon from '../../../../../icons/house.png';
import BackgroundWritePerson from '../../../../../icons/writeperson2.jpg';
import BackgroundConferenceRoom from '../../../../../icons/conference-room.jpg';
import BackgroundBuilding from '../../../../../icons/building.jpg';
import BackgroundHandShake from '../../../../../icons/handshake.jpg';
import BackgroundDocuments from '../../../../../icons/company-document.jpg';
import BackgroundLibrary from '../../../../../icons/library.jpg';
import Dot from '../../../../../icons/circle-solid.png';
import FileSignature from '../../../../../icons/file-signature.png';
import Entities from '../../../../../icons/entities3.png';
import Book from '../../../../../icons/book.png';
import People from '../../../../../icons/person.png';
import Publication from '../../../../../icons/publications.png';

export const WorkspacesSlider: FC = () =>{

    let WorkspacesArray = [
        {BackgroundImg : BackgroundWritePerson, MainIcon : FileSignature, TitleOfTile: 'Client contract', Description : 'Contract', UpdateNumber : '2'},
        {BackgroundImg : BackgroundWritePerson, MainIcon : FileSignature, TitleOfTile: 'Supplier contract', Description : 'Contract', UpdateNumber : '4'},
        {BackgroundImg : BackgroundConferenceRoom, MainIcon : Entities, TitleOfTile: 'Corporate', Description : 'Corporate', UpdateNumber : '3'},
        {BackgroundImg : BackgroundLibrary, MainIcon : Book, TitleOfTile: 'Group norms', Description : 'Norms', UpdateNumber : '6'},
        {BackgroundImg : BackgroundHandShake, MainIcon : People, TitleOfTile: 'Customers', Description : 'Customers', UpdateNumber : '1'},
        {BackgroundImg : BackgroundLibrary, MainIcon : Publication, TitleOfTile: 'Documents', Description : 'Documents', UpdateNumber : '2'},
        {BackgroundImg : BackgroundBuilding, MainIcon : Entities, TitleOfTile: 'Institutions', Description : 'Institutions', UpdateNumber : '2'},
        {BackgroundImg : BackgroundConferenceRoom, MainIcon : People, TitleOfTile: 'Business meeting', Description : 'Meeting', UpdateNumber : '3'}
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return(
        <SliderWrapper {...settings}>
            {WorkspacesArray.map(SliderComponents => 
            <TileWrapper>
                <Tile>
                    <img className = 'background-img' src = {SliderComponents.BackgroundImg}/>   
                    <div className = 'icon-and-title-of-tile'>
                        <img src = {SliderComponents.MainIcon}/>
                        <p>{SliderComponents.TitleOfTile}</p>
                    </div>   
                    <div className = 'description-to-tile'>
                        <img src = {SliderComponents.MainIcon}/>
                        <p>{SliderComponents.Description}</p>
                        <img className = 'dot-spaces' src = {Dot}/>
                        <img src = {Icon}/>
                        <p>150 users</p>
                    </div>   
                    <p className = 'update-info'>Last update {SliderComponents.UpdateNumber} days ago</p>        
                </Tile>
            </TileWrapper>
            )}
        </SliderWrapper>
    );
};