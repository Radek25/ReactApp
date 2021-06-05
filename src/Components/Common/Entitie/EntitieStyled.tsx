import styled from 'styled-components';
import { Colors } from './../../../StyledHelpers/Colors';

interface BoolenOfEntityWidth{
    value: boolean;
}

export const EntitieWrapper = styled.div<BoolenOfEntityWidth>`
    width: ${props => (props.value === true? '23%' : '90%')};
    height: 90px;
    margin: 5px;
    padding: ${props => (props.value === true? '5px' : '5px 20px')};
    background-color: ${Colors.white};
    border-radius: 10px;
    border: 1px solid ${Colors.lightgrey};
    display: flex;
    align-items: center;
    justify-content: ${props => (props.value === true? 'center' : 'left')};
    font-family: 'Roboto', sans-serif;
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
    img{
        width: 70px;
        height: 70px;
        border-radius: ${props => (props.value === true? '10px' : '50px')};
        margin-right: ${props => (props.value === true? '0' : '20px')};
    }
    .right-side-text{
        width: ${props => (props.value === true? '65%' : '90%')};
        height: 60px;
        margin-left: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2{
            font-size: 14px;
            color: ${Colors.NameAndSurname};
        }
        p{
            font-size: 11px;
            color: ${Colors.grey};
        }
    }
`;

