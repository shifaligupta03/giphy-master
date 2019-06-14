export const PERFORM_RANDOM_SEARCH = 'PERFORM_RANDOM_SEARCH';
export const RANDOM_SEARCH_SUCCESS = 'RANDOM_SEARCH_SUCCESS';
export const RANDOM_SEARCH_ERROR = 'RANDOM_SEARCH_ERROR';

export const randomSearchError =()=>({type: RANDOM_SEARCH_ERROR})

export const randomSearchSuccess =(result)=>({
    type: RANDOM_SEARCH_SUCCESS, 
    result
});
export const performRandomSearch =()=>({
    type: PERFORM_RANDOM_SEARCH
});