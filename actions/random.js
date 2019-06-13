export const PERFORM_RANDOM_SEARCH = 'PERFORM_RANDOM_SEARCH';
export const RANDOM_SEARCH_SUCCESS = 'RANDOM_SEARCH_SUCCESS';
export const RANDOM_SEARCH_ERROR = 'RANDOM_SEARCH_ERROR';

export const randomSearchError =()=>({type: RANDOM_SEARCH_ERROR})

export const randomSearchSuccess =(results)=>({
    type: RANDOM_SEARCH_SUCCESS, 
    results
});
export const performRandomSearch =()=>({
    type: PERFORM_RANDOM_SEARCH
});