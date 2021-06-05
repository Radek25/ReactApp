import React, {FC} from 'react';
import { Link } from 'react-router-dom';

//Styled Import
import {SliderWrapper} from './SliderStyled';
import {TileWrapper} from './SliderStyled';
import {Tile} from './SliderStyled';

//Icons Import
import People from '../../../../../icons/user-friends.png';
import Dot from '../../../../../icons/circle-solid.png';

import {WorkspacesArray} from './../../../../MainPage/MainPage';

export const WorkspacesSlider: FC = () =>{

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
            <Link to = {`/workspace/${SliderComponents.Id}`}>
            <TileWrapper>
                <Tile>
                    <img className = 'background-img' src = {SliderComponents.BackgroundImg} alt='BackgroundOfTile'/>   
                    <div className = 'icon-and-title-of-tile'>
                        <img src = {SliderComponents.MainIcon} alt='MainIconOfTile'/>
                        <p>{SliderComponents.TitleOfTile}</p>
                    </div>   
                    <div className = 'description-to-tile'>
                        <img className = 'description-icon' src = {SliderComponents.MainIcon} alt='MainIconOfTileMin'/>
                        <p>{SliderComponents.Description}</p>
                        <img className = 'dot-spaces' src = {Dot} alt='IconDotSpace'/>
                        <img className = 'description-icon' src = {People} alt='PeopleIcon'/>
                        <p>150 users</p>
                    </div>   
                    <p className = 'update-info'>Last update {SliderComponents.UpdateNumber} days ago</p>     
                </Tile>
            </TileWrapper>
            </Link>
            )}
        </SliderWrapper>
    );
};