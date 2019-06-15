import { LOCATION_CHANGE } from 'react-router-redux';
import { PERFORM_RANDOM_SEARCH, RANDOM_SEARCH_SUCCESS, RANDOM_SEARCH_ERROR } from '../actions/random';

const initialState={
    result:{},
    isLoading: false,
};

function transformRandomGiphyResult(rawResult){
    const { images, id } = rawResult;
    return {
        thumbnail:images.fixed_width_downsampled.url,
        full: images.original.url,
        id
    }
}

export default (state = initialState, action) =>{
    const newState={...state};
    switch(action.type){
        case PERFORM_RANDOM_SEARCH:
            newState.isLoading = true;
            break;
        case RANDOM_SEARCH_SUCCESS: 
            newState.isLoading = false;
            newState.result = transformRandomGiphyResult(action.result.data);
            break;
        case RANDOM_SEARCH_ERROR:
            newState.isLoading = false;
            break;
        case LOCATION_CHANGE:
            return initialState;  
    }
    return newState;
}