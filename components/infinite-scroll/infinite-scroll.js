import React from 'react';
import PropTypes from 'prop-types';

class InfiniteScroll  extends React.Component{
    constructor(props){
        super(props);
        this.container = null;
    }
    scrollListener(){
        const viewPortHeight = document.documentElement.clientHeight;
        const {bottom} = this.container.getBoundingClientRect();
    }
    render() { 
        const {children, isLoading} = this.props;
        return ( 
            <div ref={(e)=> this.container=e}>
                {children}
                {isLoading && <div>Loading ....</div>}
            </div>          
        );
    }
}
 
export default InfiniteScroll;

InfiniteScroll.propTypes ={
    children: PropTypes.element.isRequired,
    isLoading: PropTypes.bool.isRequired
}