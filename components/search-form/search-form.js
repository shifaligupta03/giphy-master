import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({onSearchSubmitted}) => {
    let searchField= null;
    const searchSubmitted=(e)=>{
        e.preventDefault();
        onSearchSubmitted(searchField.value);
    }

    return ( 
        <form onSubmit={searchSubmitted}>
        <input ref={(e)=> searchField=e} type="text" placeholder="Find me giphys.." ></input>
        <input type="Submit"value="Search" />
        </form>
     );
}


SearchForm.propTypes ={
    onSearchSubmitted: PropTypes.func.isRequired
}

 
export default SearchForm;