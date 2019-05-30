import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation-item.css';

export default function NavigationItem({path, onClick, children }){
    return ( 
        <div>
            <a 
                className={styles.link}
                href={path} 
                onClick={(e)=>{ 
                e.preventDefault();
                onClick(path);
            }}>
            {children}
            </a>
        </div>
     );
}


NavigationItem.propTypes ={
    path: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
