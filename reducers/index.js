import { combineReducers } from 'redux';
import searchReducer from './search';
import { connectRouter } from 'connected-react-router';
// import { routerReducer } from 'react-router-redux';

const rootReducer = (history) => combineReducers({
    search: searchReducer,
    router: connectRouter(history)
})
  
export default rootReducer;
