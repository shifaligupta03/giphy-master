import React from 'react';
import PropTypes from 'prop-types';
import * as customTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';

const SearchResults = ({results}) => {
    return ( 
        <div>
            {results.map((result)=> <SearchResult key={result.id} result={result} />)}
        </div>
     );
}
 
export default SearchResults;

SearchResults.proptypes={
    results: PropTypes.arrayOf(customTypes.searchResult)
}