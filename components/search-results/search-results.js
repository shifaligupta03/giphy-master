import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as customTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';

class SearchResults extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {results} = this.props;
        return ( 
            <div>
                {results.map((result)=> <SearchResult key={result.id} result={result} />)}
            </div>
         );
    }
}

// const SearchResults = ({results}) => {
//     return ( 
//         <div>
//             {results.map((result)=> <SearchResult key={result.id} result={result} />)}
//         </div>
//      );
// }
 
export default SearchResults;

SearchResults.proptypes={
    results: PropTypes.arrayOf(customTypes.searchResult)
}