import React, { Component } from 'react';
import SearchResult from '../../search-result/search-result';
import PropTypes from 'prop-types';

class Random extends Component {
    render() { 
        const {result, randomResultClicked} = this.props;
        return ( 
            <div>
                <SearchResult key={result.id} result={result} onClick={()=>randomResultClicked()} /> 
            </div>
         );
    }

    componentDidMount(){
        this.props.doRandomSearch();
    }
}

export default Random;

Random.propTypes ={
    doRandomSearch: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired,
    randomResultClicked: PropTypes.func.isRequired,
}
