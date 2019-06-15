import React, { Component } from 'react';
import SearchResult from '../../search-result/search-result';
import PropTypes from 'prop-types';
import Button from '../../button/button';
import styles from './random.css';
import Spinner from '../../spinner/spinner';

class Random extends Component {
    componentDidMount(){
        this.props.doRandomSearch();
    }
    render() { 
        const {result, randomResultClicked, doRandomSearch, isLoading} = this.props;
        const refreshRandomSearch = ()=>{
            doRandomSearch();
        }
        return ( 
            <div className={styles.container}>
                <div>
                <Button buttonText="Refresh" buttonCallback={refreshRandomSearch} />
                </div>
                <div className={styles.imageContainer}>
                {isLoading  && <Spinner />}
                {!isLoading && <SearchResult key={result.id} result={result} onClick={()=>randomResultClicked(result)} />}
                </div> 
            </div>
         );
    }
}

export default Random;

Random.propTypes ={
    doRandomSearch: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired,
    randomResultClicked: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,

}
