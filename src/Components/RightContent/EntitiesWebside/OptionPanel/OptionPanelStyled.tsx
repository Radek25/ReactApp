import styled from 'styled-components';
import { Colors } from '../../../../StyledHelpers/Colors';

//Icons Import
import DotInCircle from '../../../../icons/dot-circle.png';
import Search from '../../../../icons/search.png';
import Signal from '../../../../icons/signal.png';

export const OptionPanelWrapper = styled.div`
    width: 100%;
    height: 30px;
    margin: 10px 0;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${Colors.grey};
    img{
            width: 15px;
            height: 15px;
            margin-right: 5px;
        }
    select{
        width: 65px;
        background-color: ${Colors.BackgroundToProfilSkills};
        border: 1px solid ${Colors.NameAndSurname};
        border-radius: 5px;
        background-image: url(${DotInCircle});
        background-position: left;
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position-x: 4px;
        padding: 6px 0 5px 25px;
        color: ${Colors.NameAndSurname};
        outline: none;
        font-weight: 600;
        appearance: none;
    }
    .arrow-down{
        width: 18px;
        height: 19px;
        position: absolute;
        left: 45px;
        top: 2px;
    }
    .arrow-down2{
        width: 18px;
        height: 19px;
        position: absolute;
        right: 10px;
        top: 1px;
    }
    .three-dots{
        margin: 0 15px;
        width: 16px;
        height: 15px;
        cursor: pointer;
    }
    .filter-options{
        width: 140px;
        padding: 4px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 1px solid ${Colors.grey};
        border-right: 1px solid ${Colors.grey};
    }
    .sort-option, .filter-option{
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .view-option{
        width: 18px;
        height: 18px;
        margin: 0 10px;
        cursor: pointer;
    }
    .share-option{
        display: flex;
        align-items: center;
        border-left: 1px solid ${Colors.grey};
        padding: 4px 10px;
        cursor: pointer;
    }
    .right-side-of-optional-panel{
        width: 350px;
        padding: 0 10px;
        position: absolute;
        right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
            height: 25px;
            border-radius: 5px;
            outline: none;
            border: 1px solid ${Colors.lightgrey};
            padding: 0 5px;
            background-image: url(${Search});
            background-size: 15px 15px;
            background-position-x: 150px;
            background-position-y: center;
            background-repeat: no-repeat;
            cursor: pointer;
        }
        select{
            width: 115px;
            background-image: url(${Signal});
            background-color: ${Colors.white};
        }
    }
`;