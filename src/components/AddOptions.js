import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function AddOptions({dispatch, divRef, dispatch1}) {
    return (
        <div className="addoption" ref={divRef}>
            <nav>Go to Album</nav>
            <p className="border"></p>
            <nav onClick={()=> {dispatch({type : "showpremium"}); dispatch1({type : "showingaddoption", showaddoption: false})}}>Add to Queue</nav>
        </div>
    )
}

export default AddOptions;