import { connect } from 'react-redux';
import { performRandomSearch, randomSearchSuccess } from '../../../actions/random';
import Random  from './random';

function mapStateToProps(state){
    return {
        results: state.random.results
    };
}

function mapDispatchToProps(dispatch){
    return{
        doRandomSearch: ()=>{
            dispatch(performRandomSearch());
            // dispatch(randomSearchSuccess());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Random);