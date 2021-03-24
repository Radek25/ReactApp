import React, {FC} from 'react';
import styled from 'styled-components';

import {TopNav} from '../TopNav/TopNav';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Wrapper} from '../../StyledHelpers/Components';



const MainPage: FC = () =>{
    return(
        <Wrapper>
            <TopNav/>
        </Wrapper>
    );
};
export default MainPage;