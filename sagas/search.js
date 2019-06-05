import axios from "axios";
import { put, call, takeLatest, select } from "redux-saga/effects";
import { PERFORM_SEARCH, searchSuccess, searchError } from "../actions/search";

const apiKey = "je68JGJlKCNVThoUoI6J6E7f6HJAai2s";

const selectSearchState= (state)=>state.search;

export function* doSearch() {
    const {currentOffset, searchTerm} = yield select(selectSearchState);
    try{
        const searchResults = yield call(axios.get,
             "https://api.giphy.com/v1/gifs/search",
              {
            params: {
              apiKey,
              q: searchTerm,
              limit: 50,
              offset: currentOffset
            }
          });
          yield put(searchSuccess(searchResults.data.data));
    } catch(e){
        yield put(searchError());
    }
  
}

export default function*(){
    yield takeLatest(PERFORM_SEARCH, doSearch);
}

