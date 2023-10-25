import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function SignOption({dispatch2, divRef, loggedin, setLoggedIn}){
    function handlesignout(){
      setLoggedIn(false)
    }

    return (
      <div className={loggedin ? "signout" : "sign-option"} ref={divRef}>
        {/* <Link className="signlink" to="/signup"> */}
         {!loggedin ?  <><div className="sign">
          <Link to="/signin"><nav>Sign In</nav></Link>
        </div>

        <div className="music" onClick={()=> dispatch2({type : "prefoption"})}>
          <nav>Music Preferences</nav>
        </div></>
        : <><Link to="/myprofile"><nav className="prof">My Profile</nav></Link>
            <p className="border1"></p>
            <div onClick={()=> dispatch2({type : "prefoption"})}>
              <nav className="prof">Music Preferences</nav>
            </div>
            <p className="border1"></p>
            <a href="https://www.amazon.in/gp/help/customer/display.html?pop-up=1&nodeId=201380010&language=en_IN" target="_blank"><nav className="prof">Terms and Conditions</nav></a>
            <p className="border1"></p>
            <nav className="prof" onClick={handlesignout}>Sign Out</nav>
            </>}
      </div>
    )
  }

export default SignOption;