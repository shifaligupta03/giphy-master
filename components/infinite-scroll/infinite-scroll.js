import React from 'react';
import PropTypes from 'prop-types';

class InfiniteScroll  extends React.Component{
    constructor(props){
        super(props);
        this.container = null;
        this.scrollListener = this.scrollListener.bind(this);
    }

    componentDidMount(){
        document.addEventListener('scroll', this.scrollListener);
    }
    componentWillUnmount(){
        document.removeEventListener('scroll', this.scrollListener);
    }

    scrollListener(){
        const {isLoading, onTrigger} = this.props;
        const viewPortHeight = document.documentElement.clientHeight;
        const {bottom} = this.container.getBoundingClientRect();
        if(!isLoading && bottom<= viewPortHeight){
            //trigger infinite scroll
            onTrigger();
        }
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
    isLoading: PropTypes.bool.isRequired,
    onTrigger: PropTypes.func.isRequired
}