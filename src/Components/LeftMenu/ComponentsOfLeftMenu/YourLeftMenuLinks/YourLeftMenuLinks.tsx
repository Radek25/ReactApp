import React, {FC} from 'react';

//Icon Import
import Network from '../../../../icons/network.png';
import Publications from '../../../../icons/publications.png';
import Plus from '../../../../icons/plus.png';
import PlusUser from '../../../../icons/user-plus.png';

//Styled Import
import {YourLinksWrapper} from '../YourLeftMenuLinks/YourLeftMenuLinkStyled';

export const YourLeftMenuLinks: FC = () => {
    return(
        <YourLinksWrapper>
            <div>
                <img src={Network}></img>
                <p>Your Network</p>
                <img className='right-side-icons' src={PlusUser}></img>
            </div>
            <div>
                <img src={Publications}></img>
                <p>Your Publications</p>
                <img className='right-side-icons' src={Plus}></img>
            </div>
        </YourLinksWrapper>
    );
};