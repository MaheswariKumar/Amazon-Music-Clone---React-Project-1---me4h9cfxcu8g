import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function NoResults({searchTerm}){
    return (
        // <div className="Main-section">
        // <div className="categories"></div>
      <div className="suggestions-list">
            <div className="noresult">No Results Found "{searchTerm}"</div> 
        </div>
    // </div>
    )
}

export default NoResults;