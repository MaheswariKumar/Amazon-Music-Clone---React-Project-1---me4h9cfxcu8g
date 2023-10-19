import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function SignIn(){

//  handleLogin = () => {
//     const postData = {
//       email: 'user_email',
//       password: 'user_password',
//       appType: 'music',
//     };

//     const url = 'https://academics.newtonschool.co/api/v1/user/login';
//     const projectId = 'f104bi07c490';

//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'projectId': projectId
//       },
//       body: JSON.stringify(postData)
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Success:', data);
//         // Handle the success response here
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         // Handle errors here
//       });
//   };
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
                <p>By continuing, you agree to Amazon's <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Conditions of Use</a> and <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">Privacy Notice.</a></p>
              </div>
              <form className="checksign">
                <input type="checkbox"></input>
                <label className="keep">Keep me signed in.</label>
                <nav href="#" className="arow">Detail</nav>
              </form>
              <div>
              <div className="account">
                <nav>New to Amazon?</nav>
                <Link to="/register"><p className="createacc">Create your Amazon Account</p></Link>
              </div>
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

export default SignIn;