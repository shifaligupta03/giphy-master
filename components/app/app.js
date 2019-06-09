import React from 'react';
import Navigation from '../navigation/navigation.container';
import styles from './app.css';
import GiphyDisplay from '../giphy-display/giphy-display';
import PropTypes from 'prop-types';
import * as customTypes from '../../lib/custom-types';
const App = ({children, giphyDisplayIsShown, giphyDisplayed, onHideGiphyDisplayed})=>(
    <div>
      <h1 className={styles.header}>Giphy Master</h1>
      <Navigation />
      {children}
      {giphyDisplayIsShown && <GiphyDisplay isShown={giphyDisplayIsShown} onClick={onHideGiphyDisplayed} giphy={giphyDisplayed} />}
    </div>
);


App.propTypes={
  giphyDisplayIsShown: PropTypes.bool.isRequired,
  giphyDisplayed: customTypes.searchResult,
  onHideGiphyDisplayed: PropTypes.func.isRequired,
  
}

export default App;