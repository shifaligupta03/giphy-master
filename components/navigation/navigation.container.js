import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Navigation from './navigation';

const pages=[
    {path:'/', title:'search'}
];

function mapStateToProps(){
    return {pages};
}

function mapDispatchToProps(dispatch){
    return {
        navigate: ((path)=> dispatch(push(path)))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);