import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';

import {searchSuccess} from './actions/search';
import reducer from './reducers';
import { createLogger } from 'redux-logger';

const store = createStore(
    reducer, applyMiddleware(createLogger())
    );

const results=[
    {
        full:'https:\/\/media3.giphy.com\/media\/dzaUX7CAG0Ihi\/giphy_s.gif',
        thumbnail:'https://media3.giphy.com/media/dzaUX7CAG0Ihi/100_s.gif',
        id: "dzaUX7CAG0Ihi",
    },
    {
        full:'https:\/\/media0.giphy.com\/media\/xT9IgG50Fb7Mi0prBC\/giphy_s.gif',
        thumbnail:'https:\/\/media0.giphy.com\/media\/xT9IgG50Fb7Mi0prBC\/100_s.gif',
        id: "xT9IgG50Fb7Mi0prBC",
    }
];
setTimeout(()=>{
    store.dispatch(searchSuccess(results));
},2000);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
)