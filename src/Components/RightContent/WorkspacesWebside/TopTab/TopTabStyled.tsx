import styled from 'styled-components';
import { Colors } from './../../../../StyledHelpers/Colors';

interface IPhotoOfWrapper{
    photo: string | undefined;
}

export const TopTabWrapper = styled.div<IPhotoOfWrapper>`
    width: 90%;
    height: 280px;
    border: 1px solid ${Colors.grey};
    border-radius: 5px;
    background-image: url(${props => props.photo});
    background-size: cover;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;
    .bottom-module{
        height: 100px;
        padding: 15px;
        display: flex;
        align-items: center;
        border-top: 1px solid ${Colors.grey};
        border-radius: 5px;
        background-color: ${Colors.white};
        .title-of-workspace{
            margin-left: 15px;
            position: relative;
           h1{
               font-size: 19px;
           }
           p{
               font-size: 13px;
               padding-top: 5px;
               color: ${Colors.grey};
           }
           img{
               width: 16px;
               height: 16px;
               position: absolute;
               right: 0;
           }
        }
    }
`;