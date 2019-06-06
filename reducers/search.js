import {SEARCH_SUCCESS, SEARCH_ERROR, PERFORM_SEARCH, NEW_SEARCH} from '../actions/search'
import { LOCATION_CHANGE } from 'react-router-redux';
const initialState={
    results:[],
    currentOffset:0,
    searchTerm:null,
    isSearchLoading: false,
    isSearchActive: false
};

function searchResultTransformer(rawResult){
    const { images, id } = rawResult;
    return {
        thumbnail:images.fixed_height_small_still.url,
        full: images.original.url,
        id
    }
}


export default (state = initialState, action) =>{
    const newState={...state};

    switch(action.type){
        case SEARCH_SUCCESS:
            newState.results = [...state.results,...action.results.map(searchResultTransformer)];
            newState.currentOffset= state.currentOffset+50;
            newState.isSearchLoading= false;
            newState.isSearchActive = (action.results.length === 50);
            break;
        case NEW_SEARCH:
            newState.results = [];
            newState.currentOffset= 0;
            newState.searchTerm= action.searchTerm;
            newState.isSearchLoading= false;
            newState.isSearchActive = false;
            break;
        case PERFORM_SEARCH:
            newState.isSearchLoading= true;
            newState.isSearchActive = true;
            break;
        case SEARCH_ERROR:
            newState.isSearchLoading= false;
            newState.isSearchActive = false;
            break;
        case LOCATION_CHANGE:
            return initialState;
        
    }
    return newState;
}