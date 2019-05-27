const initialState={
    results:[]
};

function searchResultTransformer(rawResult){
    const { images } = rawResult;
    return {
        thumbnail:images.fixed_height_small_still.url,
        full: images.original.url
    }
}


export default (state = initialState, action) =>{
    const newState={...state};

    switch(action.type){
      case 'SEARCH_SUCCESS':
            newState.results = action.results.map(searchResultTransformer);
            break;
    }
    return newState;
}