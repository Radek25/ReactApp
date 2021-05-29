import styled from 'styled-components';
import {Colors} from '../../../StyledHelpers/Colors';

interface WorkspacesData{
    a: any;
}

export const WorkspacesWrapper = styled.div<WorkspacesData>`
    width: 95%;
    background-color: white;
    
    header{
        width: 90%;
    }
`;