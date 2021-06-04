import styled from 'styled-components';
import {Colors} from '../../../../StyledHelpers/Colors';

export const LatestPublicationsWrapper = styled.div`
    display: flex;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 0px 0px 4px 0px rgba(209,209,209,0.8);
    .right-side-of-lastes-publication-module{
        width: 65%;
    }
    .latest-publications-subtitle-link{
        margin: 10px 0;
        margin-left: 2px;
        font-size: 13px;
        color: ${Colors.lightblue};
        font-weight: 600;
    }
`;