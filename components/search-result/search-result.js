import React from 'react';
import PropTypes from 'prop-types';
import * as customTypes from '../../lib/custom-types';

const SearchResult = ({result}) => {
    const {thumbnail} = result;
    return ( 
        <img src={thumbnail} />
     );
}
 
export default SearchResult;

SearchResult.proptypes={
    result: customTypes.searchResult
}