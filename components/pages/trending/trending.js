import React, { Component } from 'react';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';
import PropTypes from 'prop-types';

class Trending extends Component {
    render() { 
        const {onInfiniteTrigger, isLoading, isActive} = this.props;
        return ( 
            <div>
                <InfiniteScroll isActive={isActive} isLoading={isLoading} onTrigger={()=>{onInfiniteTrigger()}}>
                    <SearchResults />
                </InfiniteScroll>
            </div>
         );
    }

    componentDidMount(){
        console.log('mounted');
        this.props.onSearchSubmitted();
    }
}
 
export default Trending;

Trending.propTypes ={
    onSearchSubmitted: PropTypes.func.isRequired,
    onInfiniteTrigger: PropTypes.func.isRequired,
    isLoading:PropTypes.bool.isRequired,
    isActive:PropTypes.bool.isRequired,
}
