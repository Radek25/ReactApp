import styled from 'styled-components';
import { Colors } from './../../../../StyledHelpers/Colors';

export const FilterPanelWrapper = styled.div`
    width: 100%;
    padding: 10px 15px;
    background-color: ${Colors.white};
    border-radius: 10px;
    border: 1px solid ${Colors.lightgrey};
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
    h4{
        color: ${Colors.grey};
        margin: 5px 0 20px;
    }
    button{
        border-radius: 10px;
        border: 1px solid ${Colors.NameAndSurname};
        padding: 5px;
        background-color: ${Colors.white};
        margin-right: 30px;
        margin: 0 30px 0 10px;
        color: ${Colors.NameAndSurname};
    }
    .main-select{
        border: 1px solid ${Colors.NameAndSurname};
        border-radius: 5px;
        padding: 3px;
        width: 100px;
        outline: none;
    }
`;