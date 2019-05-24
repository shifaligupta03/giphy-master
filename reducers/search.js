const initialState={
    results:[]
};

export default (state = initialState, action) =>{
    const newState={...state};

    switch(action.type){
      case 'SEARCH_SUCCESS':
            newState.results = action.results;
            break;
    }
    return newState;
}