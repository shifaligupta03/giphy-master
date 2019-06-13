import React, { Component } from 'react';
import SearchResults from '../../search-results/search-results.container';
import PropTypes from 'prop-types';

class Random extends Component {
    render() { 
        return ( 
            <div>
                <SearchResults />
            </div>
         );
    }

    componentDidMount(){
        console.log('mounted');
        this.props.doRandomSearch();
    }
}

export default Random;

Random.propTypes ={
    doRandomSearch: PropTypes.func.isRequired,
}
