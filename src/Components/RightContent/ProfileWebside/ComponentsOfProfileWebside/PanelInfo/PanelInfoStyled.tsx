import styled from 'styled-components';
import { Colors } from './../../../../../StyledHelpers/Colors';

export const PanelInfoWrapper = styled.div`
    width: 90%;
    margin: 15px auto 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${Colors.lightgrey};
    h1{
        color: ${Colors.NameAndSurname};
        font-size: 16px;
        margin-bottom: 15px;
    }
    h2{
        font-size: 13px;
        color: ${Colors.grey};
        margin: 5px 0;
    }
    p{
        margin-top: 10px;
        margin-bottom: 15px;
        font-size: 14px;
        color: ${Colors.NameAndSurname};
        font-weight: 600;
    }
    input{
        height: 25px;
        display: inline-block;
        margin-bottom: 7px;
        outline: none;
        border: 1px solid ${Colors.grey};
        border-radius: 8px;
        padding: 5px;
    }
    .terms-input{
        width: 280px;
        margin-bottom: 12px;
    }
    .loaded-file{
        display: flex;
        align-items: center;
        width: 45%;
        height: 35px;
        margin: 0 0 25px;
        padding: 5px;
        border: none;
        border-radius: 5px;
        outline: none;
        background-color: ${Colors.BackgroundToProfilSkills};
        color: ${Colors.lightblue};
        img{
            width: 15px;
            height: 15px;
            margin: 0 10px 0 5px;
        }
    }
    input::file-selector-button{
        margin: 2px 5px;
    }
    .services-input{
        width: 276px;
    }
    .correspondent{
        width: 80%;
        height: 30px;
        margin: 10px 0;
        background-color: ${Colors.BackgroundToProfilSkills};
    }
`;