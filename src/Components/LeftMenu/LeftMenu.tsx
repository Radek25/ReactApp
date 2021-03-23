import React, {FC} from 'react';
import styled from 'styled-components';

const Content = styled.div`
    background-color: blue;
    width: 500px;
    height: 500px;
    display: block;
`;

export const LeftMenu: FC = () => {
    return(
        <Content>Tutaj będzie LeftMenu</Content>
    );
};