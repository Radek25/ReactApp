import React, {FC} from 'react';
import styled from 'styled-components';

import {TopNav} from '../TopNav/TopNav';
import {LeftMenu} from '../LeftMenu/LeftMenu';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: green;
    max-width: 1200px;

`;

const Content = styled.div`
    height: 400px;
    width: 300px;
    background-color:red;
    display: block;
`;

const MainPage: FC = () =>{
    return(
        <Wrapper>
            <TopNav/>
            <Content>
                <LeftMenu/>
                <div>Content</div>
            </Content>
        </Wrapper>
    );
};
export default MainPage;