import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function SignOption({dispatch2}){
    return (
      <div className="sign-option">
        {/* <Link className="signlink" to="/signup"> */}
            <div className="sign">
          <nav>Sign In</nav>
        </div>
        {/* </Link> */}
        <div className="music" onClick={()=> dispatch2({type : "prefoption"})}>
          <nav>Music Preferences</nav>
        </div>
      </div>
    )
  }

export default SignOption;