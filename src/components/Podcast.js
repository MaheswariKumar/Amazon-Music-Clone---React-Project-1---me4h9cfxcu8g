import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function Podcast(){
    return (
        <div className="Podcast">
            <img className="logoamznpod" src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg"></img>
            <div className="castall">
            <h1>We're Sorry</h1>
            <div className="request">
            <p>We are unable to complete your Request. Please</p>
            <Link to="/"><nav>Go Home</nav></Link>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/music/player/recs-error-headphones._SX626_SY213_BL0_QL100_FMpng_.png"></img>
            </div>
        </div>
    )
}

export default Podcast;