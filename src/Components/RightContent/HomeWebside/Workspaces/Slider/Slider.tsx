import React, {FC} from 'react';
import Slider from "react-slick";

//Styled Import
import {SliderWrapper} from './SliderStyled';

export const WorkspacesSlider: FC = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <SliderWrapper>
            <Slider {...settings}>
                <div><h1>1</h1></div>
                <div><h1>2</h1></div>
            </Slider>
        </SliderWrapper>
    );
};