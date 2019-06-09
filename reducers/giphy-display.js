import {SHOW_GIPHY, HIDE_GIPHY} from '../actions/giphy-display';
const initialState={
    giphyDisplayed: null,
    giphyDisplayIsShown: false
};
export default (state = initialState, action) =>{
    const newState={...state};

    switch(action.type){
        case SHOW_GIPHY:
            newState.giphyDisplayed = action.giphyDisplayed;
            newState.giphyDisplayIsShown = true;
            break;
        case HIDE_GIPHY:
            newState.giphyDisplayIsShown = false;
            newState.giphyDisplayed = initialState.giphyDisplayed;
            break;        
    }
    return newState;
}