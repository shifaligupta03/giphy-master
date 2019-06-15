const apiKey = "je68JGJlKCNVThoUoI6J6E7f6HJAai2s";
import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {PERFORM_RANDOM_SEARCH, randomSearchError, randomSearchSuccess } from "../actions/random";

export function* doRandomSearch() {
  try{
    const searchResults = yield call(axios.get,
      `https://api.giphy.com/v1/gifs/random`,
        {
          params: { apiKey }
        }
      );
      yield put(randomSearchSuccess(searchResults.data));
  } catch(e){
      yield put(randomSearchError());
  } 
}

export default function*(){
    yield takeLatest(PERFORM_RANDOM_SEARCH, doRandomSearch);
}

