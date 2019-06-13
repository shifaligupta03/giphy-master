import { combineReducers } from 'redux';
import searchReducer from './search';
import giphyDisplayReducer from './giphy-display';
import randomReducer from './random';
import { connectRouter } from 'connected-react-router';
// import { routerReducer } from 'react-router-redux';

const rootReducer = (history) => combineReducers({
    search: searchReducer,
    giphyDisplay: giphyDisplayReducer,
    random: randomReducer,
    router: connectRouter(history)
})
  
export default rootReducer;
