import React, {FC} from 'react';
import { Link } from 'react-router-dom';

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
                <img src={Network} alt='IconNetwork'/>
                <p>Your Network</p>
                <Link to = {'/test'}><img className='right-side-icons' src={PlusUser} alt='IconPlusUser'/></Link>
            </div>
            <div>
                <img src={Publications} alt='IconPublications'/>
                <p>Your Publications</p>
                <Link to = {'/test'}><img className='right-side-icons' src={Plus} alt='IconPlus'/></Link>
            </div>
        </YourLinksWrapper>
    );
};