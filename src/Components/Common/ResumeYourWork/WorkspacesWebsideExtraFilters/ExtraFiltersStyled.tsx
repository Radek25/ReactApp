import styled from 'styled-components';
import { Colors } from './../../../../StyledHelpers/Colors';

export const ExtraFiltersWrapper = styled.div`
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        padding: 3px 10px;
        font-weight: 600;
        color: ${Colors.TopOptions};
        background-color: ${Colors.BackgroundToProfilSkills};
        border: 1px solid ${Colors.NameAndSurname};
        border-radius: 10px;
    }
    img{
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
`;