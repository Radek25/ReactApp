import React, { FC, useEffect } from "react";

import {useDispatch} from 'react-redux';
 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";

import { TopNav } from "../TopNav/TopNav";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { RightContent } from '../RightContent/RightContent'
import { Wrapper } from "../../StyledHelpers/Components";
import { Test } from "../RightContent/TestWebside/TestWebside";
import { Entities } from '../RightContent/EntitiesWebside/EntitiesWebside'
import { HomeWebside } from '../RightContent/HomeWebside/HomeWebside';

import { getUsers } from '../../tools/actions/actionsTypes/usersActions';

type GetUsers = ReturnType<typeof getUsers>

const MainPage: FC = () => {

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch<GetUsers>(getUsers());
  }, []);

  return (
    <Router>
      <Wrapper>
        <TopNav />
        <LeftMenu />
        <RightContent>
          <Switch>
            <Route path='/home' component={HomeWebside}/>
            <Route path='/publications' component={Test}/>
            <Route path='/ecosystem' component={Test} />
            <Route path='/entities' component={Entities}/>
          </Switch>
        </RightContent>
      </Wrapper>
    </Router>
  );
};
export default MainPage;
