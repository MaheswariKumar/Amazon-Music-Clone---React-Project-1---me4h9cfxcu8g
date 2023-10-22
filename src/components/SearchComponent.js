import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function SearchComponent({setOpenSearch, searchseenresults, deleteSearchRes}){
    let storedResults = JSON.parse(localStorage.getItem('searchResults'))
    return (
    <div className="Main-section">
        <div className="categories"></div>
      <div className="Search-Lists">
        <div className="Search-Types">
          {storedResults  && storedResults.length > 0 ? (
            <div className="topresult">
                <div>Search History</div>
                    <ul className="res-list">
                      <div className="x" onClick={deleteSearchRes}>
                        <div className="x-btn">X</div>
                      </div>
                        {storedResults.map((res, idx)=> (
                          <div key={idx} className="res-li">
                            <li>{res}</li>
                          </div>
                        ))}
                    </ul> 
            </div>
          ):    (<div className="topresult">
            <div>No Search History</div>
            </div>)}
          <div className="Moods">Moods</div>
            <ul className="mood-list">
              <Link to="/songs/happytracks/collections"><li className="box-1">Happy</li></Link>
              <Link to="/songs/newtracks/collections"><li className="box-2">Fresh</li></Link>
              <Link to="/songs/sadtracks/collections"><li className="box-3">Sad</li></Link>
              <Link to="/songs/romantictracks/collections"><li className="box-4">Romatic</li></Link>
            </ul>
          <div className="Listen-Your-Way">Listen Your Way</div>
            <ul className="Listen-list">
              <Link to="/album/collections"><li className="box-5">Trending Albums</li></Link>
              <Link to="/songs/collections"><li className="box-6">Trending Songs</li></Link>
            </ul>
          <div className="Artists">Artists</div>
            <ul className="Artists-list">
              <Link to="/artists/collections"><li className="box-7">Artistic Collection</li></Link>
            </ul>
        </div>
      </div>
    </div>
    )
  }

export default SearchComponent;