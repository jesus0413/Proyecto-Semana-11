import React from 'react';
import SearchResults from '../../components/searchResults/searchResults';
import GetResults from '../../components/getResults/getResults';
import "../Results/styleResults.css";

const Results= ()  => {
  return (
    <div className="resultsContainer">
       <SearchResults/>
       <GetResults />
     
    </div>
  );
}

export default Results;