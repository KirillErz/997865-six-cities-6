import PropTypes from 'prop-types';
import React from 'react';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favorites from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {AppRoute} from '../../utils/const';
import browserHistory from "../../browser-history";
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';

const App = (props) => {
  const {placeCount} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={() => (
            <MainPage
              placeCount={placeCount}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.SIGN_IN}
          render={() => (
            <Login

            />
          )}
        />
        <Route
          exact
          path={AppRoute.FAVORITES}
          render={() => (
            <Favorites

            />
          )}
        />
        <Route
          exact
          path={AppRoute.ROOM}
          render={() => (
            <RoomPage

            />
          )}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placeCount: PropTypes.array.isRequired,
};

export default App;
