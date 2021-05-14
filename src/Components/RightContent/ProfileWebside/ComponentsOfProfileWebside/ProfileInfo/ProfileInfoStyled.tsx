import styled from 'styled-components';
import { Colors } from './../../../../../StyledHelpers/Colors';

export const ProfileInfoWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 50px auto 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${Colors.lightgrey};
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
    .photo-of-profile{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 40px 0 100px;;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50px;
            margin-bottom: 5px;
        }
        p{
            font-weight: 600;
            font-size: 12px;
            color: ${Colors.NameAndSurname};
        }
    }
    .list-of-data{
        li:nth-child(1), li:nth-child(2){
            font-weight: 600;
        }
        li{
            margin-bottom: 5px;
        }
    }
    input{
            height: 20px;
            margin-bottom: 5px; 
            border: 1px solid ${Colors.black};
            border-radius: 8px;
            padding-left: 5px;
            outline: none;
        }
    .email-and-phone{
        width: 165px;
        position: absolute;
        top: 40px;
        right: 120px;
        text-align: center;
        .list-of-data-email-phone{
            li{
            margin-bottom: 5px;
            }
        }
        input{
           text-align: center;
           padding-left: 0;
        }
    }
`;