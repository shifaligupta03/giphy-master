import { connect } from 'react-redux';
import { performRandomSearch, randomSearchSuccess } from '../../../actions/random';
import Random  from './random';
import {showGiphy} from '../../../actions/giphy-display';

function mapStateToProps(state){
    return {
        result: state.random.result,
        isLoading: state.random.isLoading
    };
}

function mapDispatchToProps(dispatch){
    return{
        doRandomSearch: ()=>{
            dispatch(performRandomSearch());
        },
        randomResultClicked: (giphy)=>{
            dispatch(showGiphy(giphy));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Random);