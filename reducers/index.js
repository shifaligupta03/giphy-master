import { combineReducers } from 'redux';
import searchReducer from './search';
import giphyDisplayReducer from './giphy-display';
import { connectRouter } from 'connected-react-router';
// import { routerReducer } from 'react-router-redux';

const rootReducer = (history) => combineReducers({
    search: searchReducer,
    giphyDisplay: giphyDisplayReducer,
    router: connectRouter(history)
})
  
export default rootReducer;
