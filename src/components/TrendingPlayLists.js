import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";

function TrendingPlayLists({ playlists, 
                             handleLeftIcon, 
                             handleRightIcon, 
                             selectleft, 
                             selectright, 
                             containerRef, 
                             handleSelectAll, 
                             selectall, 
                             identifier,
                             state,
                             dispatch }) {
  return (
    <div className="feature">
      <div className="headertab">
        <div className="header">
          <h2>Trending Playlists</h2>
        </div>
        <div className="options">
          <div onClick={() => handleLeftIcon(identifier)}>
            <ChevronCaretLeftIcon style={{ fontSize: "20px", color: `${selectleft}` }} />
          </div>
          <div onClick={() => handleRightIcon(identifier)}>
            <ChevronCaretrightIcon style={{ fontSize: "20px", color: `${selectright}` }} />
          </div>
        </div>
        <div onClick={() => handleSelectAll(identifier)} className="alloptions">
          <span className="all">SEE ALL</span>
        </div>
      </div>
      <div className={selectall ? "wrapper-all" : "wrapper"} ref={containerRef}>
        {playlists.map((song, idx) => (
          <div className={selectall ? "collections-all" : "collections"} key={idx}>
            <div className="image-container">
              <img className="imgtab" src={song.image} alt={song.title}></img>
              <div className="icon-container">
                <ActionAddIcon />
                <div onClick={()=> dispatch({type : "playandpause"})} className="play-container">
                  {state.play ? <PlaybackPlayIcon /> : <MyCustomPauseIcon />}
                </div>
                <ActionMoreIcon />
              </div>
            </div>
            <div className="link-container">
              <span className="link">{song.title}</span>
            </div>
            <div className="content-container">
              {song.artists.map((artist, idx) => (
                <span className="content" key={idx}>
                  {artist.name}
                  {idx < song.artists.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingPlayLists;