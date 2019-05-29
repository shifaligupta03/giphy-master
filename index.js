import 'babel-regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app/app.container';

import {searchSuccess} from './actions/search';
import reducer from './reducers';
import { createLogger } from 'redux-logger';
import searchSaga from './sagas/search';
import createSagaMiddleware from 'redux-saga';

import { Router, Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const sagas = createSagaMiddleware();

const store = createStore(
    routerMiddleware(history),
    reducer,
     applyMiddleware(createLogger(), sagas)
    );

sagas.run(searchSaga)

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <App>
    </App>
    </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)