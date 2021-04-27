import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';

//Icons Import
import Buildings from '../../../../../icons/buildings.jpg';

export const MainPublicationWrapper = styled.div`
    width: 29%;
    margin-right: 15px;
    padding: 15px;
    background-image: url(${Buildings});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: ${Colors.white};
    font-weight: 500;
    border-radius: 5px 0 0 5px;
`;
