import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function LoginMsg({state, dispatch}) {
    return (
      <div className="errordiv">
        <p className="errormsg">Loggedin Successfully</p>
      </div>
    )
  }

export default LoginMsg;