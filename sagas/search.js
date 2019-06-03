import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { SEARCH_PERFORMED, searchSuccess, searchError } from "../actions/search";
// import { takeLatest } from 'redux-saga';

const apiKey = "je68JGJlKCNVThoUoI6J6E7f6HJAai2s";

export function* doSearch({ searchTerm }) {
    try{
        const searchResults = yield call(axios.get,
             "https://api.giphy.com/v1/gifs/search",
              {
            params: {
              apiKey,
              q: searchTerm,
              limit: 70
            }
          });
          yield put(searchSuccess(searchResults.data.data));
    } catch(e){
        yield put(searchError());
    }
  
}

export default function*(){
    yield takeLatest(SEARCH_PERFORMED, doSearch);
}

