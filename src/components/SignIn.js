import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link, useNavigate } from "react-router-dom";

let initialStateSignUp1 = {
  email : "",
  pass : "",
  error: false,
  errormsg: ""
}

function reducerSignUp1(stateSignUp1, action) {
  switch(action.type) {
      case "handleNameInput" :
          return {
              ...stateSignUp1,
              name : action.name,
              error:false,
              errormsg:""
          }
      case "handleEmailInput" :
          return {
              ...stateSignUp1,
              email : action.email,
              error:false,
              errormsg:""
          }

      case "handlePassInput" :
          return {
              ...stateSignUp1,
              pass : action.pass,
              error:false,
              errormsg:""
          }

      case "handleRepassInput" :
          return {
              ...stateSignUp1,
              rePass : action.rePass,
              error:false,
              errormsg:""
          }
      
      case "handleError":
          return {
              ...stateSignUp1,
              error: true,
              errormsg: action.errormsg
          }

      default :
        return stateSignUp1
      
  }
} 

function SignIn({setLoggedIn, dispatch, dispatch2}){
  const navigate = useNavigate();
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  let [stateSignUp1, dispatchSignUp1] = useReducer(reducerSignUp1, initialStateSignUp1)

  let handleSignIn = (e) => {
    e.preventDefault();

    if (!stateSignUp1.email || !stateSignUp1.pass) {
      dispatchSignUp1({ type: "handleError", errormsg: "Please fill in all the required fields." });
      return;
    }

    const postData = {
      email: stateSignUp1.email,
      password: stateSignUp1.pass,
      appType: 'music',
    };

    const url = 'https://academics.newtonschool.co/api/v1/user/login';
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
        if (!response.ok){
          if (response.status===403) {
            dispatchSignUp1({type: "handleError", errormsg: "Email Id or Password Incorrect"})
          }
          else {
            throw new Error("error found")
          }
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        dispatch2({type: "setusername", username: data.data.name})
        console.log("Loggedin");
        console.log(data.data.name);
        if (keepSignedIn) {
          localStorage.setItem("keepSignedIn", true);
        }
        localStorage.setItem("token", data.token);
        const token = localStorage.getItem('token');
        if (data.token && token === data.token) {
          navigate('/');
          setLoggedIn(true)
          dispatch({type: "showloginmsg"})
          dispatch2({type : "signoption", opensignoption : false})
        } else {
          dispatchSignUp1({ type: 'handleError', errormsg: "Email Id or Password Incorrect" });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        dispatchSignUp1({type: "handleError", errormsg: "Email Id or Password Incorrect"})
      });
  };

    return (
      <div className="signin-page">
          <div className="signimg">
            <img className="amaimg" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"></img>
            <nav className="in">.in</nav>
          </div>
          {/* <span>{stateSignUp1.error && stateSignUp1.errormsg}</span> */}
          {stateSignUp1.error && 
          <div className="errorbox">
            <div>
                <h1>!</h1>
            </div>
            <div>
            <h2>There was a Problem</h2>
            <nav>{stateSignUp1.errormsg}</nav>
            </div>
          </div>
          }
          <div className="signbox">
              <h1 className="signti">Sign in</h1>
              <form>
                <br></br>
                <label className="email">Email or mobile phone number</label>
                <br></br>
                <input required className="emailbox" value={stateSignUp1.email} onChange={(e)=> dispatchSignUp1({type: "handleEmailInput", email: e.target.value})} type="email"></input>
                <br></br>
                <br></br>
                <div className="passdiv">
                <label className="pass">Password</label>
                <a>Forgot your Password?</a>
                </div>
                <input required className="passbox" value={stateSignUp1.pass} onChange={(e)=> dispatchSignUp1({type: "handlePassInput", pass: e.target.value })} type="password"></input>
                <br></br>
                <br></br>
                <button className="signbtn" onClick={(e)=> handleSignIn(e)}>Sign in</button>
              </form>
              <div className="condition">
                <p>By continuing, you agree to Amazon's <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Conditions of Use</a> and <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">Privacy Notice.</a></p>
              </div>
              <form className="checksign">
                <input type="checkbox" checked={keepSignedIn} onChange={() => setKeepSignedIn(!keepSignedIn)}></input>
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