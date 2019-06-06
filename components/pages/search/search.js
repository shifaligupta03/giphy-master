import React from 'react';
import SearchForm from '../../search-form/search-form';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';
import PropTypes from 'prop-types';

export default function search({onSearchSubmitted, onInfiniteTrigger}){

    return(
        <div>
            <SearchForm onSearchSubmitted={onSearchSubmitted} />
            <InfiniteScroll isLoading={false} onTrigger={()=>{onInfiniteTrigger}}>
                <SearchResults />
            </InfiniteScroll>
        </div>
    )
}

search.propTypes ={
    onSearchSubmitted: PropTypes.func.isRequired,
    onInfiniteTrigger: PropTypes.func.isRequired
}
