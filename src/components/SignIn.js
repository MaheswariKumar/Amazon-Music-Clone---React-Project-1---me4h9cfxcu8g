import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function SignIn(){
    return (
      <div className="signin-page">
          <div className="signimg">
            <img className="amaimg" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"></img>
            <nav className="in">.in</nav>
          </div>
          <div className="signbox">
              <h1 className="signti">Sign in</h1>
              <form>
                <br></br>
                <label className="email">Email or mobile phone number</label>
                <br></br>
                <input className="emailbox" type="email"></input>
                <br></br>
                <br></br>
                <div className="passdiv">
                <label className="pass">Password</label>
                <a href="#">Forgot your Password?</a>
                </div>
                <input className="passbox" type="password"></input>
                <br></br>
                <br></br>
                <button className="signbtn">Sign in</button>
              </form>
              <div className="condition">
                <p>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a></p>
              </div>
              <form className="checksign">
                <input type="checkbox"></input>
                <label className="keep">Keep me signed in.</label>
                <a href="#" className="arow">Detail</a>
              </form>
              <div>
              <div className="account">
                <nav>New to Amazon?</nav>
                <p>Create your Amazon Account</p>
              </div>
          </div>
            </div>
          <div>
          <div className="help">
            <nav>Conditions of Use</nav>
            <nav>Privacy Notice</nav>
            <nav>Help</nav>
          </div>
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
          </div>
      
      </div>
    )
  }

export default SignIn;