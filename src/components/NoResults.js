import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  Component,
} from "react";

function NoResults({ searchTerm }) {
  return (
    <div className="suggestions-list">
      <div className="noresult">No Results Found "{searchTerm}"</div>
    </div>
  );
}

export default NoResults;