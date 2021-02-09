import React from 'react';
import {
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import HomePage from '@Pages/Home';
import GamePage from '@Pages/Game';

import C from '@Constants/index';
import Public from './public';
// import Private from './private';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Public path={C.paths.game} exact component={GamePage} />
      <Public path={C.paths.leaderboards} exact component={GamePage} />
      <Public path={C.paths.home} exact component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
