import styled from 'styled-components';
import { Colors } from './../../../StyledHelpers/Colors';

interface BoolenOfEntity{
    value: boolean;
}

export const EntitiesWrapper = styled.div<BoolenOfEntity>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Roboto', sans-serif;
    .top{
        width: 95%;
        margin: 0 0 10px 0;
        .title-and-view-option{
            height: 30px;
            display: flex;
            align-items: center;
            position: relative;
            h1{
                color: ${Colors.TopOptions};
                font-size: 17px;
                margin-right: 10px;
                font-weight: 600;
            }
            img{
                width: 13px;
                height: 13px;
            }
            #button-first, #button-second{
                height: 100%;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px;
                border: 1px solid ${Colors.lightgrey};
                border-radius: 10px;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
                img{
                    margin-right: 5px;
                }
            }
            #button-first{
                width: 90px;
                right: 60px;
                border-radius: 10px 0 0  10px;
                color: ${props => (props.value == true? `${Colors.NameAndSurname}` : `${Colors.grey}`)};
                background-color: ${props => (props.value == true? `${Colors.BackgroundToProfilSkills}` : `${Colors.white}`)};
            }
            #button-second{
                width: 60px;
                right: 0;
                border-left: none;
                border-radius: 0 10px 10px  0;
                color: ${props => (props.value == true? `${Colors.grey}` : `${Colors.NameAndSurname}`)};
                background-color: ${props => (props.value == true? `${Colors.white}` : `${Colors.BackgroundToProfilSkills}`)};
            }
        }
    }
`;