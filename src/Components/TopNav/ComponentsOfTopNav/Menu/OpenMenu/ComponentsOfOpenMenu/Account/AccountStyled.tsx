import styled from 'styled-components';
import {Colors} from '../../../../../../../StyledHelpers/Colors';

export const AccountWrapper = styled.div`
    width: 95%;
    margin: 5px auto;
    border-bottom: 1px solid ${Colors.lightgrey};
    h5{
        font-size: 11px;
        color: ${Colors.grey};
        font-weight: 600;
        margin: 5px 0 10px;
    }
    .user-profile-in-open-menu{
        display: flex;
        align-items: center;
        img{
            width: 30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 50px;
        }
        p:last-child{
        font-size: 11px;
        padding-top: 2px;
        color: ${Colors.NameAndSurname};
        cursor: pointer;
    }
    }
    .options-of-profile-in-open-menu{
        display: flex;
        align-items: center;
        margin: 10px 5px;
        img{
            width: 20px;
            height: 18px;
            margin-right: 10px;
        }
        p{
            cursor: pointer;
        }
    }
`;