import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function PlayBackError({state, dispatch}) {
    return (
      <div className="errordiv">
        <p className="errormsg">Playback Error! Check Your Network</p>
      </div>
    )
  }

export default PlayBackError;