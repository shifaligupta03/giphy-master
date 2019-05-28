import { connect } from 'react-redux';
import SearchForm from './search-form';
import { searchPerformed } from '../../actions/search'

const mapDispatchToProps=(dispatch)=>{
    return{
        onSearchSubmitted: (searchTerm)=>dispatch(searchPerformed(searchTerm)),
    }
  }

export default connect(()=>({}), mapDispatchToProps)(SearchForm);