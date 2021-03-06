import styled from 'styled-components';
import { Colors } from './../../../../../StyledHelpers/Colors';

export const SkillsInfoWrapper = styled.div`
    width: 90%;
    margin: 10px auto 15px;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Colors.lightgrey};
    .expertise, .specialties, .admission-to-practice-law, .countries{
        margin: 15px;
        h2{
            color: ${Colors.grey};
            margin: 5px 0;
            font-size: 13px;
        }
        p{
            height: 25px;
            display: inline-block;
            font-size: 15px;
            padding: 4px 5px;
            margin-right: 10px;
            border-radius: 5px;
            background-color: ${Colors.BackgroundToProfilSkills};
            color: ${Colors.lightblue};
        }
        select{
            height: 25px;
            margin-right: 10px;
            border-radius: 5px;
            outline: none;
            background-color: ${Colors.BackgroundToProfilSkills};
            border: none;
            color: ${Colors.lightblue};
        }
    }
`;
