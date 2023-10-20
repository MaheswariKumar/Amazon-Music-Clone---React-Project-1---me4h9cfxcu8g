import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function Options({divRef, state1, dispatch, dispatch1}) {
    return (
        <div className="option" ref={divRef}>
            <Link to="/"><nav>Go to Playlists</nav></Link>
            <p className="border1"></p>
            <nav onClick={()=> {dispatch({type : "showpremium"});  dispatch1({type : "showingoption", showoption : false})}}>Add to Queue</nav>
            <p className="border1"></p>
            <nav onClick={()=> {dispatch({type: "showsharesong",
                                         shareimg: state1.infoimg,
                                         shareti: state1.infotitle,
                                         sharepath: window.location.href
            }); dispatch1({type : "showingoption", showoption : false})}}>Share this Song</nav>
        </div>
    )
}

export default Options;