import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function TryPremium({dispatch}){
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
          <div className="clear-all">
            <nav>ALREADY SIGN IN</nav>
          </div>
          <div className="continue">
            <nav>TRY NOW</nav>
          </div>
        </div>
        </div>
    )
}

export default TryPremium;