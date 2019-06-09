import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';
import {hideGiphy} from '../../actions/giphy-display';

function mapStateToProps(state){
    return {
        giphyDisplayIsShown: state.giphyDisplay.giphyDisplayIsShown,
        giphyDisplayed: state.giphyDisplay.giphyDisplayed,
    };
}

function mapDispatchToProps(dispatch){
    return{
        onHideGiphyDisplayed: ()=>{
            dispatch(hideGiphy());
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));