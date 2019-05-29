import 'babel-regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app/app.container';

import {searchSuccess} from './actions/search';
import createRootReducer from './reducers';
import { createLogger } from 'redux-logger';
import searchSaga from './sagas/search';
import createSagaMiddleware from 'redux-saga';

import { Router, Route } from 'react-router';
import {ConnectedRouter, routerMiddleware } from 'connected-react-router'
// import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
// import { createBrowserHistory } from 'history';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
const sagas = createSagaMiddleware();

const store = createStore(
    createRootReducer(history),
    applyMiddleware(
        routerMiddleware(history),
        createLogger(),
        sagas
    )
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