import styled from 'styled-components';
import { Colors } from './../../../StyledHelpers/Colors';

interface WorkspacesWebsideData{
    photo: string | undefined;
}

export const WorkspacesWebsideWrapper = styled.div<WorkspacesWebsideData>`
    width: 95%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .title-and-photo{
        width: 90%;
        height: 250px;
        margin-bottom: 30px;
        display: flex;
        align-items: flex-end;
        border: 2px solid ${Colors.lightgrey};
        border-radius: 10px;
        background-image: url(${props => props.photo});
        background-position: center;
        background-size: cover;
        .bottom-module{
            display: flex;
            align-items: center;
            padding: 5px 20px;
            background-color: white;
            border-top: 2px solid ${Colors.lightgrey};
            border-radius: 0 0 10px 10px;
        }
        .title-of-workspaces{
            margin: 0 20px;
        }
    }
    .start-working{
        width: 95%;
        background-color: ${Colors.lightgrey};
        padding: 20px 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 10px;
        margin-bottom: 30px;
        .tiles{
            width: 28%;
            height: 200px;
            margin: 20px 10px 20px;
            display: flex;
            flex-wrap: wrap;
            background-color: ${Colors.white};
            border-radius: 10px;
            padding: 10px;
            img{
                width: 50px;
                height: 50px;
            }
        }
        p{
            width: 100%;
        }
    }
`;