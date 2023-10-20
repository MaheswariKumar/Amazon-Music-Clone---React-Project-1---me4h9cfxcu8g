import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function AddOptions({dispatch}) {
    return (
        <div className="addoption">
            <nav>View Album</nav>
            <p className="border"></p>
            <nav onClick={()=> dispatch({type : "showpremium"})}>Add to Queue</nav>
        </div>
    )
}

export default AddOptions;