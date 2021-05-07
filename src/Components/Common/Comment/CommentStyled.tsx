import styled from 'styled-components';
import { Colors } from './../../../StyledHelpers/Colors';

export const CommentWrapper =styled.div`
    width: 100%;
    height: 110px;
    margin: 10px 0;
    border-radius: 5px;
    padding: 5px 15px;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
    position: relative;
    h4{
        padding-bottom: 8px;
        color: ${Colors.NameAndSurname}
    }
    .subtitles{
        min-width: 480px;;
        height: 18px;
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color: ${Colors.grey};
        img{
            width: 5px;
            height: 5px;
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 13px;
                height: 13px;
                margin-right: 5px;
            }
        }
    }
`;