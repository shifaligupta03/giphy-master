import React from 'react';
import PropTypes from 'prop-types';
import * as customTypes from '../../lib/custom-types';
import styles from './search-result.css';

const SearchResult = ({result, onClick}) => {
    const {thumbnail} = result;
    const clicked=(e)=>{
        e.preventDefault();
        onClick();
    }
    return (
        <img className={styles.imageCursor} src={thumbnail} onClick={clicked} />
     );
}
 
export default SearchResult;

SearchResult.proptypes={
    result: customTypes.searchResult,
    onClick: PropTypes.func.isRequired
}