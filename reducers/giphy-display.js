import {SHOW_GIPHY, HIDE_GIPHY} from '../actions/giphy-display';
const initialState={
    giphyDisplayed: null,
    giphyDisplayIsShown: false
};
export default (state = initialState, action ) =>{
    switch(action.type){
        case SHOW_GIPHY:
            return { ...state, giphygiphyDisplayed: action.giphyDisplayed, giphyDisplayIsShown: true };
        case HIDE_GIPHY:
            return { ...state, giphyDisplayed: initialState.giphyDisplayed, giphyDisplayIsShown: false };
        default: 
            return initialState;    
    }
}