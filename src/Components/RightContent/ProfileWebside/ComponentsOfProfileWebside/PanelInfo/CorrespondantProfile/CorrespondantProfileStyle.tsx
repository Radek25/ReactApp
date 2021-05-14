import styled from 'styled-components';
import { Colors } from '../../../../../../StyledHelpers/Colors';

export const CorrespondantProfileWrapper = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    align-items: center;
    margin: 5px 0;
    border-radius: 5px;
    background-color: ${Colors.BackgroundToProfilSkills};
    position: relative;
    p{
        font-size: 13px;
        margin: 5px 0;
        color: ${Colors.TopOptions};
    }
    img{
        width: 20px;
        height: 20px;
        margin: 0 10px;
        border-radius: 50px;
    }
    .option-of-correspondents{
        height: 30px;
        display: flex;
        align-items: center;
        position: absolute;
        right: 70px;
        img{
            width: 15px;
            height: 15px;
            margin-left: 40px;
            margin-right: 5px;
            border-radius: 0;
        }
    }
`;