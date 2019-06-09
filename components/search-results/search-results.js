import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as customTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';
import styles from './search-results.css';

class SearchResults extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {results, searchResultClicked} = this.props;
        return ( 
            <div className={styles.container}>
                {results.map((result)=> <SearchResult key={result.id} result={result} onClick={()=>searchResultClicked(result)} />)}
            </div>
         );
    }
}

export default SearchResults;

SearchResults.proptypes={
    results: PropTypes.arrayOf(customTypes.searchResult),
    searchResultClicked: PropTypes.func.isRequired
}