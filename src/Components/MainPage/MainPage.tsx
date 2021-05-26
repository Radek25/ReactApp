import React, { FC, useEffect } from "react";

import {useDispatch} from 'react-redux';
 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { TopNav } from "../TopNav/TopNav";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { RightContent } from '../RightContent/RightContent'
import { Wrapper } from "../../StyledHelpers/Components";
import { Test } from "../RightContent/TestWebside/TestWebside";
import { Entities } from '../RightContent/EntitiesWebside/EntitiesWebside'
import { HomeWebside } from '../RightContent/HomeWebside/HomeWebside';
import { ProfileWebside } from "../RightContent/ProfileWebside/ProfileWebside";
import { WorkspacesWebside } from './../RightContent/WorkspacesWebside/WorkspacesWebside';

import { getUser } from '../../tools/actions/actionsTypes/userActions';
import { getPost } from "../../tools/actions/actionsTypes/postActions";
import { getComment } from "../../tools/actions/actionsTypes/commentAction";
import { getPhoto } from './../../tools/actions/actionsTypes/photoAction';

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
  }, []);

  return (
    <Router>
      <Wrapper>
        <TopNav />
        <LeftMenu />
        <RightContent>
          <Switch>
            <Route path='/home' component={HomeWebside}/>
            <Route path='/profile' component={ProfileWebside}/>
            <Route path='/publications' component={Test}/>
            <Route path='/ecosystem' component={Test} />
            <Route path='/entities' component={Entities}/>
            <Route path='/workspace/:id' component={WorkspacesWebside}/>
          </Switch>
        </RightContent>
      </Wrapper>
    </Router>
  );
};
export default MainPage;
