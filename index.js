import 'babel-regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app/app.container';

import createRootReducer from './reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { Route } from 'react-router';
import {ConnectedRouter, routerMiddleware } from 'connected-react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import SearchPage from './components/pages/search/search.container';
import TrendingPage from './components/pages/trending/trending.container';
import RandomPage from './components/pages/random/random.container';
import rootSaga from './sagas/rootSaga';

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

sagas.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <App>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/trending" component={TrendingPage} />
        <Route exact path="/random" component={RandomPage} />
    </App>
    </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)