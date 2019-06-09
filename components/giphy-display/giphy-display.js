import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as customTypes from '../../lib/custom-types';
import classNames from 'classnames';
import styles from './giphy-display.css';


export default function GiphyDisplay({isShown, giphy, onClick}){
    const containerClass= classNames(
        styles.container,
        {
            [styles.isShown]: isShown
        }
    )
    return (
        <div className={containerClass} onClick={onClick}>
            <img className={styles.image} src={giphy ? giphy.full : ''} />
        </div>
    );

}

GiphyDisplay.propTypes= {
    isShown: PropTypes.bool.isRequired,
    giphy: customTypes.searchResult,
    onClick: PropTypes.func.isRequired
};