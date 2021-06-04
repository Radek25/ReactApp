import styled from 'styled-components';
import Arrow from './../../../icons/arrow-down-blue.png'
import { Colors } from '../../../StyledHelpers/Colors';


export const ResumeYourWorkWrapper = styled.div`
    width: 100%;
    height: auto;
    .top-of-resume-your-work{
        width: 100%;
        height: 35px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        position: relative;
        h2{
            margin-left: 20px;
            font-size: 17px;
            font-weight: 600;
            color: ${Colors.black};
        }
    }
    .top-of-resume-your-work-right-side{
        display: flex;
        align-items: center;
        position: absolute;
        right: 50px;
        input{
            height: 25px;
            margin: 0 25px;
            border: 1px solid ${Colors.lightgrey};
            border-radius: 10px;
            padding: 0 10px;
            outline: none;
            box-shadow: 0px 0px 5px 0px rgba(209,209,209,0.8);
        }
        img{
            width: 20px;
            height: 20px;
            margin: 0 10px;
        }
        select{
            padding-right: 20px;
            background-image: url(${Arrow});
            background-position: right -7px;
            background-size: 20px 20px;
            background-repeat: no-repeat;
            background-color:${Colors.background};
            border: none; 
            appearance: none;
            outline: none;
            color: ${Colors.NameAndSurname};
            font-weight: 550;
        }
        select:focus{
            outline: none;
        }
        option{
            font-weight: 550;
        }
    }
    #pagination-wrapper, #no-results{
        display: flex;
        justify-content: center; 
        margin-bottom: 30px;
    }
    #no-results{
        flex-wrap: wrap;
        p{
        width: 100%;
        margin: 50px auto;
        font-size: 20px;
        text-align: center;
        }
    }
`;