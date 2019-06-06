import Search from './search';
import { connect } from 'react-redux';
import {newSearch, performSearch} from '../../../actions/search';

function mapStateToProps(state){
    return{
        isLoading: state.search.isSearchLoading,
        isActive: state.search.isSearchActive
    };
}
function mapDispatchToProps(dispatch){
    return{
        onSearchSubmitted: (searchTerm)=>{
            dispatch(newSearch(searchTerm));
            dispatch(performSearch());
        },
        onInfiniteTrigger: ()=>{
            dispatch(performSearch());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);