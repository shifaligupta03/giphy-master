import React from 'react';
import SearchForm from './search-form/search-form';

export default()=>(   
    <div>
        <SearchForm onSearchSubmitted={(term)=> console.log(term)} />
    </div>
)