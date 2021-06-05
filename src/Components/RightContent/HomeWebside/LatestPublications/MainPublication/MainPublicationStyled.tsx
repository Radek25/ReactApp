import styled from 'styled-components';
import {Colors} from '../../../../../StyledHelpers/Colors';
interface IBackGroundPhoto{
    photo: string | undefined;
}

export const MainPublicationWrapper = styled.div<IBackGroundPhoto>`
    width: 29%;
    margin-right: 15px;
    padding: 15px;
    background-image: url(${props => props.photo});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 5px 0 0 5px;
    .date, p:first-child, p:last-child{
        color: ${Colors.white};
        letter-spacing: 1px;
    }
`;