import React from 'react';
import PropTypes from 'prop-types';
import * as customTypes from '../../lib/custom-types';

const SearchResult = ({result, onClick}) => {
    const {thumbnail} = result;
    const clicked=(e)=>{
        e.preventDefault();
        onClick();
    }
    return (
        <img src={thumbnail} onClick={clicked} />
     );
}
 
export default SearchResult;

SearchResult.proptypes={
    result: customTypes.searchResult,
    onClick: PropTypes.func.isRequired
}