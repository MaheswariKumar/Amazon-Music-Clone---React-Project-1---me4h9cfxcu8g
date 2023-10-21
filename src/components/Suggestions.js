import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function Suggestions({filteredSuggestions, setResults, setOpenResults, searchTerm, submit, setSubmit, setSearchSeenResults, searchseenresults}) {
    let existingResults = localStorage.getItem('searchResults');
    let parsedResults = existingResults ? JSON.parse(existingResults) : [];
  
    useEffect(()=>{
      console.log(handleFunction("Rhythms"))
    } )
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
  
    function handleFunction(opt) {
      // setSubmit(true);
      // localStorage.setItem(
      //   'searchResults',
      //   JSON.stringify([...parsedResults, opt])
      // );
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
              <li onClick={handleFunction("Happy Songs")}>Happy Songs</li>
              <li onClick={handleFunction("New Songs")}>New Songs</li>
              <li onClick={handleFunction("Podcasts")}>Podcasts</li>
              <li onClick={handleFunction("Rhythms")}>Rhythms</li>
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