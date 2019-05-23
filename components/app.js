import React from 'react';
import SearchForm from './search-form/search-form';
import SearchResults from './search-results/search-results';

const results=[
    {
        full:'https:\/\/media3.giphy.com\/media\/dzaUX7CAG0Ihi\/giphy_s.gif',
        thumbnail:'https://media3.giphy.com/media/dzaUX7CAG0Ihi/100_s.gif',
        id: "dzaUX7CAG0Ihi",
    },
    {
        full:'https:\/\/media0.giphy.com\/media\/xT9IgG50Fb7Mi0prBC\/giphy_s.gif',
        thumbnail:'https:\/\/media0.giphy.com\/media\/xT9IgG50Fb7Mi0prBC\/100_s.gif',
        id: "xT9IgG50Fb7Mi0prBC",
    }
];

export default()=>(   
    <div>
        <SearchForm onSearchSubmitted={(term)=> console.log(term)} />
        <SearchResults results={results} />
    </div>
)