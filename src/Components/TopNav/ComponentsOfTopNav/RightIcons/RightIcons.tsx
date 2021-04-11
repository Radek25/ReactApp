import React, {FC} from 'react';

//StyledImport
import {RightIconsWrapper} from '../RightIcons/RightIconsStyled';

//Icons Import
import House from '../../../../icons/house.png';
import Message from '../../../../icons/comments.png';
import Bell from '../../../../icons/bell.png';

export const RightIcons: FC = () => {
    return(
        <RightIconsWrapper>
            <div className='right-icons-house'>
                <img src={House}/>
            </div>
            <div className='right-icons-message'>
                <img src={Message}/>
            </div>
            <div className='right-icons-bell'>
                <img src={Bell}/>
            </div>
        </RightIconsWrapper>
    );
};