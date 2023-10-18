import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function SignIn(){
    return (
      <div className="signin-page">
        <div className="signin">
          <div className="signimg">
            <img className="amaimg" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"></img>
            <nav className="in">.in</nav>
          </div>
          <div className="signbox">
            <div>
              <h1 className="signti">Sign in</h1>
            </div>
            <div className="form">
              <form>
                <br></br>
                <label className="email">Email or mobile phone number</label>
                <br></br>
                <input className="emailbox" type="email"></input>
                <br></br>
                <br></br>
                <label className="pass">Password</label>
                <br></br>
                <input className="passbox" type="password"></input>
                <br></br>
                <br></br>
                <button className="signbtn">Sign in</button>
              </form>
              <p className="condition">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
              <form>
                <input type="checkbox"></input>
                <label>Keep me signed in</label>
                <nav>Detail</nav>
              </form>
            </div>
            <div>
            <nav>New to Amazon?</nav>
            <button>Create your Amazon Account</button>
          </div>
          </div>
          <div>
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