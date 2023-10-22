import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function AddOptions({dispatch, divRef, dispatch1, state1}) {
    return (
        <div className="addoption" ref={divRef}>
            <Link to={`/playlists/${state1.optionidx}`}>
                <nav onClick={()=> dispatch1({type : "showingaddoption", showaddoption: false})}>Go to Album</nav>
                </Link>
            <p className="border"></p>
            <nav onClick={()=> {dispatch({type : "showpremium"}); dispatch1({type : "showingaddoption", showaddoption: false})}}>Add to Queue</nav>
        </div>
    )
}

export default AddOptions;