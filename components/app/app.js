import React from 'react';
import Navigation from '../navigation/navigation.container';
import styles from './app.css';
import GiphyDisplay from '../giphy-display/giphy-display';

export default({children})=>(   
    <div>
      <h1 className={styles.header}>Giphy Master</h1>
      <Navigation />
      {children}
    </div>
)