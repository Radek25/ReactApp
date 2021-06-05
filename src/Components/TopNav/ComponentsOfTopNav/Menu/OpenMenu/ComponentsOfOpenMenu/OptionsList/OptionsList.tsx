import React, {FC} from 'react';
import {Link} from 'react-router-dom';

//Styled Import
import {OptionListWrapper} from '../OptionsList/OptionsListStyled';

//Arrays Import
import {WorkspacesArray} from './../../../../../../MainPage/MainPage'
import {PlatformArray} from './../../../../../../MainPage/MainPage';

interface ITextFromInput{
    text : string;
}


export const OptionsList: FC<ITextFromInput> = (props) =>{

    const dropDownMenuPlatformArray = PlatformArray.filter(Platform => Platform.Decsription.toLowerCase().includes(props.text.toLowerCase()));
    const dropDownMenuWorkspacesArray = WorkspacesArray.filter(Workspaces => Workspaces.TitleOfTile.toLowerCase().includes(props.text.toLowerCase()));
    const mapPlatfromArray = dropDownMenuPlatformArray.map(Platform => <Link to = {Platform.Link}><li key={Platform.Index}><img src={Platform.Icon} alt='IconOfPlatformOption'/><p>{Platform.Decsription}</p></li></Link>);
    const mapWorkspacesArray = dropDownMenuWorkspacesArray.map(Workspaces => <Link to = {`/workspace/${Workspaces.Id}`}><li key={Workspaces.Id}><img src={Workspaces.MainIcon} alt='IconOfWorkspacesOption'/><p>{Workspaces.TitleOfTile}</p></li></Link>)
    return(
        <OptionListWrapper>
            <ul>
                <li className='title-of-list'>Platform</li>
                <ul>
                    {dropDownMenuPlatformArray.length > 0? mapPlatfromArray : <li>No results!</li>}
                </ul>
                <li className='title-of-list'>Workspaces</li>
                <ul>
                    {dropDownMenuWorkspacesArray.length > 0? mapWorkspacesArray : <li>No results!</li>}
                </ul>
            </ul>
        </OptionListWrapper>
    );
};