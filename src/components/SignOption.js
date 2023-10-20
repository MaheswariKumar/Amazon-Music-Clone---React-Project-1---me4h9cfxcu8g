import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function SignOption({dispatch2, divRef}){
    return (
      <div className="sign-option" ref={divRef}>
        {/* <Link className="signlink" to="/signup"> */}
            <div className="sign">
          <Link to="/signin"><nav>Sign In</nav></Link>
        </div>
        {/* </Link> */}
        <div className="music" onClick={()=> dispatch2({type : "prefoption"})}>
          <nav>Music Preferences</nav>
        </div>
      </div>
    )
  }

export default SignOption;