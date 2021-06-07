import React, { FC, useEffect } from "react";

import {useDispatch} from 'react-redux';
 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import { TopNav } from "../TopNav/TopNav";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { RightContent } from '../RightContent/RightContent'
import { Wrapper } from './MainPageStyled';
import { Test } from '../RightContent/TestWebside/TestWebside';
import { Entities } from '../RightContent/EntitiesWebside/EntitiesWebside'
import { HomeWebside } from '../RightContent/HomeWebside/HomeWebside';
import { ProfileWebside } from '../RightContent/ProfileWebside/ProfileWebside';
import { WorkspacesWebside } from './../RightContent/WorkspacesWebside/WorkspacesWebside';

import { getUser } from '../../tools/actions/actionsTypes/userActions';
import { getPost } from "../../tools/actions/actionsTypes/postActions";
import { getComment } from "../../tools/actions/actionsTypes/commentAction";
import { getPhoto } from './../../tools/actions/actionsTypes/photoAction';

//Icons Import
import HomeIcon from '../../icons/house2.png';
import PublicationsIcon from '../../icons/publications.png';
import PeopleIcon from '../../icons/people.png';
import EntitiesIcon from '../../icons/entities3.png';
import AdministrationIcon from '../../icons/administration.png';
import FileSignatureIcon from '../../icons/file-signature.png';
import BookIcon from '../../icons/book.png';
import PersonIcon from '../../icons/person.png';
import PublicationIcon from '../../icons/publications.png';

//Backgrounds Import
import BackgroundWritePerson from '../../icons/writeperson2.jpg';
import BackgroundConferenceRoom from '../../icons/conference-room.jpg';
import BackgroundBuilding from '../../icons/building.jpg';
import BackgroundHandShake from '../../icons/handshake.jpg';
import BackgroundLibrary from '../../icons/library.jpg';

export const PlatformArray = [
{Index: 1, Icon: HomeIcon, Decsription: 'Home', Link: '/'},
{Index: 2, Icon: PublicationsIcon, Decsription: 'Publication', Link: '/publications'},
{Index: 3, Icon: PeopleIcon, Decsription: 'People', Link: '/people'},
{Index: 4, Icon: EntitiesIcon, Decsription: 'Entities', Link: '/entities'},
{Index: 5, Icon: AdministrationIcon, Decsription: 'Administration', Link: '/administration'}];

export const WorkspacesArray = [
{Id: 1, BackgroundImg : BackgroundWritePerson, MainIcon : FileSignatureIcon, TitleOfTile: 'Client contract', Description : 'Contract', UpdateNumber : '2', Link: '/workspace/1'},
{Id: 2, BackgroundImg : BackgroundWritePerson, MainIcon : FileSignatureIcon, TitleOfTile: 'Supplier contract', Description : 'Contract', UpdateNumber : '4', Link: '/workspace/2'},
{Id: 3, BackgroundImg : BackgroundConferenceRoom, MainIcon : EntitiesIcon, TitleOfTile: 'Corporate', Description : 'Corporate', UpdateNumber : '3', Link: '/workspace/3'},
{Id: 4, BackgroundImg : BackgroundLibrary, MainIcon : BookIcon, TitleOfTile: 'Group norms', Description : 'Norms', UpdateNumber : '6', Link: '/workspace/4'},
{Id: 5, BackgroundImg : BackgroundHandShake, MainIcon : PersonIcon, TitleOfTile: 'Customers', Description : 'Customers', UpdateNumber : '1', Link: '/workspace/5'},
{Id: 6, BackgroundImg : BackgroundLibrary, MainIcon : PublicationIcon, TitleOfTile: 'Documents', Description : 'Documents', UpdateNumber : '2', Link: '/workspace/6'},
{Id: 7, BackgroundImg : BackgroundBuilding, MainIcon : EntitiesIcon, TitleOfTile: 'Institutions', Description : 'Institutions', UpdateNumber : '2', Link: '/workspace/7'},
{Id: 8, BackgroundImg : BackgroundConferenceRoom, MainIcon : PersonIcon, TitleOfTile: 'Business meeting', Description : 'Meeting', UpdateNumber : '3', Link: '/workspace/8'}];


type GetUsers = ReturnType<typeof getUser>
type GetPosts = ReturnType<typeof getPost>
type GetComment = ReturnType<typeof getComment>
type GetPhoto = ReturnType<typeof getPhoto>

const MainPage: FC = () => {

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch<GetUsers>(getUser());
    dispatch<GetPosts>(getPost());
    dispatch<GetComment>(getComment());
    dispatch<GetPhoto>(getPhoto());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Wrapper>
        <TopNav />
        <LeftMenu />
        <RightContent>
          <Switch>
            <Route exact path='/' component={HomeWebside}/>
            <Route path='/profile' component={ProfileWebside}/>
            <Route path='/publications' component={Test}/>
            <Route path='/ecosystem' component={Test} />
            <Route path='/entities' component={Entities}/>
            <Route path='/workspace/:id' component={WorkspacesWebside}/>
            <Route path='/administration' component={Test}/>
            <Route path='/people' component={Test}/>
            <Route path='/test' component={Test}/>
          </Switch>
        </RightContent>
      </Wrapper>
    </Router>
  );
};
export default MainPage;
