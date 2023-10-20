import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import FacebookShareIcon from "./FacebookShareIcon";
import TwitterShareIcon from "./TwitterShareIcon";
import EmailShareIcon from "./EmailShareIcon";
import LinkShareIcon from "./LinkShareIcon";

function ShareSong({dispatch, state}){
    return (
        <div className="share">
            <div className="cancel-pref1" onClick={()=> dispatch({type: "showsharesong"})}>
                <div className="x-pref">
                    <nav>X</nav>
                </div>
            </div>
            <div className="try">
                <h1>Share this playlist</h1>
            </div>
            <div className="tryp1">
                <div>
                <img className="play-img1" src={state.shareimg}></img>
                </div>
                    <div className="inlinep">
                        <nav className="info-art">PLAYLISTS</nav>
                        <p>{state.shareti}</p>
                    </div> 
            </div>
            <div className="sharelink">
                <nav>Share Link</nav>
            </div>
            <div className="path">
                <p>{state.sharepath}</p>
            </div>
          <div className="media">
            <div className="social">
            <a href="https://en-gb.facebook.com/" target="_blank" className="x-pref1"><FacebookShareIcon style={{ fontSize: '10px'}}/></a>
            <a href="https://twitter.com/?lang=en-in" target="_blank"  className="x-pref1"><TwitterShareIcon style={{ fontSize: '20px'}}/></a>
            <a href="https://www.google.co.in/" target="_blank"  className="x-pref1"><EmailShareIcon style={{ fontSize: '20px'}}/></a>
            </div>
          <div className="continue1">
            <LinkShareIcon />
            <nav>Copy Path</nav>
          </div>
          </div>
        </div>
    )
}

export default ShareSong;