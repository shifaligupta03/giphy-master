const initialState={
    results:[],
    currentOffset:0,
    searchTerm:null
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
        case 'SEARCH_SUCCESS':
            newState.results = [...state.results,...action.results.map(searchResultTransformer)];
            // newState.results = action.results.map(searchResultTransformer);
            newState.currentOffset= state.currentOffset+50;
            break;
        case 'NEW_SEARCH':
            newState.results = [];
            newState.currentOffset= 0;
            newState.searchTerm= action.searchTerm;
            break;
        
    }
    return newState;
}