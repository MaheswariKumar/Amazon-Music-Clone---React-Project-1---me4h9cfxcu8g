import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link, useLocation } from "react-router-dom";

function Suggestions({filteredSuggestions, setResults, setOpenResults, searchTerm, submit, setSubmit, setSearchSeenResults, searchseenresults}) {
    let existingResults = localStorage.getItem('searchResults');
    let parsedResults = existingResults ? JSON.parse(existingResults) : [];
    let location = useLocation();
  
    function showres(suggestion) {
      setResults(suggestion);
      setOpenResults(true);
      if (!suggestion.name){
        localStorage.setItem(
          'searchResults',
          JSON.stringify([...parsedResults, suggestion.title])
        );  
      }
      else {
        localStorage.setItem(
          'searchResults',
          JSON.stringify([...parsedResults, suggestion.name])
        );
      }
    }
  
    return (
    <div className="Main-section">
        <div className="categories"></div>
      <div className="suggestions-list">
        <div className="suggestions">Suggestions</div>
        {filteredSuggestions.length === 0 ? (
          // submit ? 
          //   <div className="noresult">No Results Found "{searchTerm}"</div> 
          //   : 
            <ul className="sugg-list">
              <Link to="/songs/happytracks/collections"><li>Happy Songs</li></Link>
              <Link to="/songs/newtracks/collections"><li>New Songs</li></Link>
              <Link to="/podcasts"><li>Podcasts</li></Link>
              <Link to="/songs/romantictracks/collections"><li>Rhythms</li></Link>
            </ul>
        ) : (
          <ul className="sugg-list">
            {filteredSuggestions.slice(0, 10).map((suggestion, index) => (
              <li key={index} onClick={() => showres(suggestion)}>
                {suggestion.title}
              </li>
            ))}
            {filteredSuggestions.slice(0, 10).map((suggestion, index) => (
              <li key={index} onClick={()=> showres(suggestion)}>{suggestion.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
    );
  }

export default Suggestions;