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
        li{
            font-size: 14px;
            margin: 2px 0;
        }
    .photo-of-profile{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 30px 0 100px;;
        img{
            width: 70px;
            height: 70px;
            border-radius: 50px;
            margin-bottom: 5px;
        }
        p{
            font-weight: 600;
            font-size: 12px;
            color: ${Colors.NameAndSurname};
        }
    }
    .info-of-userProfil{
        li:nth-child(1), li:nth-child(2){
            font-weight: 600;
        }
    }
    .email-and-phone{
        width: 165px;
        position: absolute;
        top: 40px;
        right: 120px;
        text-align: center;
        input{
           text-align: center;
           padding-left: 0;
        }
    }
    input{
        height: 18px;
        border: 1px solid ${Colors.lightgrey};
        border-radius: 5px;
        color: ${Colors.black};
        outline: none;
        padding: 5px;
    }
`;