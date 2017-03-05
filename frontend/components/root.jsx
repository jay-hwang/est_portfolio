import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import Splash from './splash/splash';

const Root = ({ store }) => {
  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>

          <IndexRoute component={ Splash }></IndexRoute>

          <Route path='/home'
            component={ HomeContainer }
            onEnter={ _redirectUnlessLoggedIn } >
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
