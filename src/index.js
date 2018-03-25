import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import Home from './components/home';
import LogIn from './components/login';
import Profile from './components/profile';
import Modal from './components/modal';
import Pitch from './components/pitch';
import Info from './components/info';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home" component={Home} /> 
          <Route path="/pitch" component={Pitch} />
          <Route path="/profile" component={Profile} />
          <Route path="/info" component={Info} />                  
          <Route path="/" component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
