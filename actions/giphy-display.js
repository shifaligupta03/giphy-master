export const SHOW_GIPHY = 'SHOW_GIPHY';
export const HIDE_GIPHY = 'HIDE_GIPHY';

export const showGiphy =(giphy)=>({
    type: SHOW_GIPHY, 
    giphyDisplayed: giphy
});

export const hideGiphy =()=>({
    type: HIDE_GIPHY
});