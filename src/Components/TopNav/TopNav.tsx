import React, {FC} from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../StyledHelpers/Components';
import {Colors} from '../../StyledHelpers/Colors';

const InnerWrapper = styled.div`
    width: 1200px;
    background-color:${Colors.white};
`;

export const TopNav: FC = () => {
    return(
        <Wrapper>
            <InnerWrapper>
                TopNav
            </InnerWrapper>
        </Wrapper>
    );
};