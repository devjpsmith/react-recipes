import React from 'react';

const SearchResults = ({ hits }) => {
    if (!hits) {
        return <div>Loading...</div>
    }
    if (hits.length === 0) {
        return <h3>No Results</h3>;
    }
    else return hits.map(({ recipe }) => {
        return (<div key={recipe.uri}>
            {recipe.label}
        </div>);
    });
};

export default SearchResults;