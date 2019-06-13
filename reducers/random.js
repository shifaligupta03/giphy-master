import {SEARCH_SUCCESS, SEARCH_ERROR, PERFORM_SEARCH, NEW_SEARCH} from '../actions/search'
import { LOCATION_CHANGE } from 'react-router-redux';
import { PERFORM_RANDOM_SEARCH, RANDOM_SEARCH_SUCCESS, RANDOM_SEARCH_ERROR } from '../actions/random';

const initialState={
    results:[],
    isSearchLoading: false,
    isSearchActive: false
};

function searchResultTransformer(rawResult){
    const { images, id } = rawResult;
    return {
        thumbnail:images.fixed_height_small_still.url, //fixed_width_downsampled
        full: images.original.url,
        id
    }
}


export default (state = initialState, action) =>{
    const newState={...state};

    switch(action.type){
      
        case PERFORM_RANDOM_SEARCH:
                // newState.results = [...action.results.map(searchResultTransformer)];
            // console.log(action.results);
            console.log('inside reducer');
            // newState.isSearchLoading= true;
            // newState.isSearchActive = true;
        break; 
        case RANDOM_SEARCH_SUCCESS:
                
                newState.results = [...(searchResultTransformer(action.results.data))];
                console.log(newState.results);
                // newState.currentOffset= state.currentOffset+50;
                // newState.isSearchLoading= false;
                // newState.isSearchActive = (action.results.length === 50);
                break;
        case RANDOM_SEARCH_ERROR:
            // newState.isSearchLoading= false;
            // newState.isSearchActive = false;
            break;
        case LOCATION_CHANGE:
                return initialState;  
    }
    return newState;
}