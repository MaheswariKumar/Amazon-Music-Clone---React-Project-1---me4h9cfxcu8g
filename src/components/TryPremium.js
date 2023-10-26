import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function TryPremium({dispatch, loggedin}){
    return (
        <div className="premium">
            <div className="cancel-pref" onClick={()=> dispatch({type: "showpremium"})}>
                <div className="x-pref">
                    <nav>X</nav>
                </div>
            </div>
            <div className="try">
                <h1>Try Amazon Prime Music</h1>
                <div className="tryp">
                    <p>Ad-free music streaming included with Prime membership. Also includes free shipping and video streaming.</p>
                </div>
            </div>
            <div className="clear">
          {!loggedin && <Link to="/signin"><div className="clear-all" onClick={()=> dispatch({type: "showpremium"})}>
            <nav>ALREADY SIGN IN</nav>
          </div></Link>}
          {!loggedin ? <Link to="/signin"><div className="continue" onClick={()=> dispatch({type: "showpremium"})}>
            <nav>TRY NOW</nav>
          </div></Link>
          : <Link to="/subscribe"><div className="continue" onClick={()=> dispatch({type: "showpremium"})}>
          <nav>TRY NOW</nav>
        </div></Link> }
        </div>
        </div>
    )
}

export default TryPremium;