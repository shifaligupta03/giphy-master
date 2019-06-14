import {SEARCH_SUCCESS, SEARCH_ERROR, PERFORM_SEARCH, NEW_SEARCH} from '../actions/search'
import { LOCATION_CHANGE } from 'react-router-redux';
import { PERFORM_RANDOM_SEARCH, RANDOM_SEARCH_SUCCESS, RANDOM_SEARCH_ERROR } from '../actions/random';

const initialState={
    result:{},
    isSearchLoading: false,
    isSearchActive: false
};

function searchResultTransformer(rawResult){
    const { images, id } = rawResult;
    return {
        thumbnail:images.fixed_width_downsampled.url, //fixed_width_downsampled
        full: images.original.url,
        id
    }
}


export default (state = initialState, action) =>{
    const newState={...state};
    switch(action.type){
      
        case PERFORM_RANDOM_SEARCH:
            
        break; 
        case RANDOM_SEARCH_SUCCESS: 
            
            newState.result = searchResultTransformer(action.result.data);
            break;
        case RANDOM_SEARCH_ERROR:
        
            break;
        case LOCATION_CHANGE:
            return initialState;  
    }
    return newState;
}