const initialState={
    results:[]
};

export default (state = initialState, action) =>{
    const newState={...state};

    if(action.type === 'SEARCH_SUCCESS'){
      newState.results = action.results;
    }
    return newState;
}