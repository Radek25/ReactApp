import styled from 'styled-components';
import {Colors} from '../../../../StyledHelpers/Colors';

export const LatestPublicationsWrapper = styled.div`
    height: 280px;
    display: flex;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 0px 0px 4px 0px rgba(209,209,209,0.8);
    font-family: 'Roboto', sans-serif;
    p{
        margin: 5px 0;
    }
    .title-of-publications{
        font-size: 18px;
        font-weight: 600;
        color: ${Colors.black};
    }
    .see-more-subtitle{
        margin-top: 15px;
        margin-left: 2px;
        font-size: 13px;
        color: ${Colors.lightblue};
        font-weight: 600;
    }
`;
export const AllLastPublication = styled.div`
    width: 65%;
`;