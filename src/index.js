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

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home" component={Home} /> 
          <Route path="/pitch" component={Pitch} />
          <Route path="/profile" component={Modal} />
          <Route path="/info" component={Modal} />                  
          <Route path="/" component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
