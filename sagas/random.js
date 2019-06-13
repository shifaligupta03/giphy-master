import axios from "axios";
import { put, call, takeLatest, select } from "redux-saga/effects";
import {PERFORM_RANDOM_SEARCH, randomSearchError, randomSearchSuccess } from "../actions/random";

const apiKey = "je68JGJlKCNVThoUoI6J6E7f6HJAai2s";

// const selectSearchState= (state)=>state.search;

export function* doRandomSearch() {
    try{
      let endpoint =  "random";
      const parameters = {
        apiKey
      };
      const searchResults = yield call(axios.get,
        `https://api.giphy.com/v1/gifs/${endpoint}`,
              {
            params: parameters
          });
          yield put(randomSearchSuccess(searchResults.data));
    } catch(e){
        yield put(randomSearchError());
    }
  
}

export default function*(){
    yield takeLatest(PERFORM_RANDOM_SEARCH, doRandomSearch);
}

