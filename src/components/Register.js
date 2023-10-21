import { name } from "file-loader";
import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function Register() {
    let initialStateSignUp = {
        name : "",
        email : "",
        pass : "",
        rePass : "",
        error: false
    }

    function reducerSignUp(stateSignUp, action) {
        switch(action.type) {
            case "handleNameInput" :
                return {
                    ...stateSignUp,
                    name : action.name
                }
            case "handleEmailInput" :
                return {
                    ...stateSignUp,
                    email : action.email
                }

            case "handlePassInput" :
                return {
                    ...stateSignUp,
                    pass : action.pass
                }

            case "handleRepassInput" :
                return {
                    ...stateSignUp,
                    rePass : action.rePass
                }
            
            case "handleError":
                return {
                    ...stateSignUp,
                    error: !stateSignUp.error
                }

            default :
              return stateSignUp
            
        }
    }  

    let [stateSignUp, dispatchSignUp] = useReducer(reducerSignUp, initialStateSignUp)

  let handleSignup = (e) => {
    // if (stateSignUp.pass !== stateSignUp.rePass ) {
    //     dispatchSignUp({type: "handleError"})
    // }
    e.preventDefault();
    
    const postData = {
      name: stateSignUp.name,
      email: stateSignUp.email,
      password: stateSignUp.pass,
      rePass: stateSignUp.rePass,
      appType: 'music',
    };

    const url = 'https://academics.newtonschool.co/api/v1/user/signup';
    const projectId = 'me4h9cfxcu8g';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'projectId': projectId
      },
      body: JSON.stringify(postData)
    })
      .then(response => {
        console.log(response.json())
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        // Handle the success response here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });
  };
    return (
      <div className="Create-page">
          <div className="signimg">
            <img className="amaimg" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"></img>
            <nav className="in">.in</nav>
          </div>
          {stateSignUp.error && 
          <div className="errorbox">
            <div>
                <h1>!</h1>
            </div>
            <div>
            <h2>There was a Problem</h2>
            <nav>Password must match</nav>
            </div>
          </div>
          }
          <div className="accbox">
              <h1 className="createti">Create Account</h1>
              <form>
                <br></br>
                <label className="name">Your name</label>
                <br></br>
                <input className="namebox" type="text" value={stateSignUp.name} onChange={(e)=> dispatchSignUp({type: "handleNameInput", name: e.target.value})} placeholder="First and Last name"></input>
                <br></br>
                <br></br>
                <label className="email">Email</label>
                <br></br>
                <input className="emailbox" value={stateSignUp.email} onChange={(e)=> dispatchSignUp({type: "handleEmailInput", email: e.target.value})} type="email"></input>
                <br></br>
                <br></br>
                <label className="pass">Password</label>
                <br></br>
                <input className="passbox" type="password" value={stateSignUp.pass} onChange={(e)=> dispatchSignUp({type: "handlePassInput", pass: e.target.value })} placeholder="Password"></input>
                <div className="passdiv1">
                    <nav className="i">i</nav>
                    <nav className="pass-char">Passwords must be at least 6 characters.</nav>
                </div>
                <label className="pass">Re-enter password</label>
                <br></br>
                <input className="passbox" type="password" value={stateSignUp.rePass} onChange={(e) => dispatchSignUp({ type: "handleRepassInput", rePass: e.target.value })}></input>
                <br></br>
                <br></br>
                <button className="signbtn" onClick={(e)=> handleSignup(e)}>Create your Amazon Account</button>
              </form>
              <div className="condition">
                <p>By continuing, you agree to Amazon's <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Conditions of Use</a> and <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">Privacy Notice.</a></p>
              </div>
              <form className="checksign1">
                <label className="keep">Already have an account?</label>
                <a href="#" className="again">Sign in</a>
              </form>
              <div>
          </div>
            </div>
          <div>
          <div className="help">
            <nav>Conditions of Use</nav>
            <nav>Privacy Notice</nav>
            <nav>Help</nav>
          </div>
          <p className="copyrights">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
          </div>
      
      </div>
    )
  }

export default Register;