import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Splash from './splash/splash';
import ProfileContainer from './profile/profile_container';
import AccountInfoContainer from './account_info/account_info_container';

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

          <Route path='/profile'
            component={ ProfileContainer }
            onEnter={ _redirectUnlessLoggedIn }>
          </Route>

          <Route path='/account-info'
            component={ AccountInfoContainer }
            onEnter={ _redirectUnlessLoggedIn }>
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
