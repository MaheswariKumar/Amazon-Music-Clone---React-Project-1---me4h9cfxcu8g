import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import AddOptions from "./AddOptions";

function TrendingPlayLists({ playlists, 
                             handleLeftIcon, 
                             handleRightIcon, 
                             selectleft, 
                             selectright, 
                             containerRef,
                             handleSelectAll, 
                             selectall, 
                             identifier,
                             options,
                             state,
                             state1,
                             dispatch,
                             dispatch1,
                             divRef}) {
                              

  return (
    <div className="feature">
      <div className="headertab">
        <div className="header">
          <h2>Trending Playlists</h2>
        </div>
        <div className="options">
          <div onClick={() => handleLeftIcon(identifier)}>
            {options ? <ChevronCaretLeftIcon style={{ fontSize: "20px", color: `${selectleft}` }} /> : null}
          </div>
          <div onClick={() => handleRightIcon(identifier)}>
            {options ? <ChevronCaretrightIcon style={{ fontSize: "20px", color: `${selectright}` }} /> : null}
          </div>
        </div>
        <Link to="/album/allplaylists">{options ? <div onClick={() => handleSelectAll(identifier)} className="alloptions">
          <span className="all">SEE ALL</span>
        </div> : null }</Link>
      </div>
      <div className={selectall ? "wrapper-all" : "wrapper"} ref={containerRef}>
        {playlists.map((song, idx) => (
          <div className={selectall ? "collections-all" : "collections"} key={idx}>
            <div className="image-container">
              <img className="imgtab" src={song.image} alt={song.title}></img>
              <div className="icon-container">
                <div onClick={()=> dispatch({type: "showpremium"})}>
                <ActionAddIcon />
                </div>
                <div onClick={()=> {if (song.songs && song.songs.length > 0 && song.songs[0].audio_url) {dispatch({type : "playandpause", 
                                            songTitle : song.title, 
                                            songImg : song.image, 
                                            songName : song.artists[0].name, 
                                            id : song._id,
                                            songAudio : song.songs[0].audio_url, 
                                            }) } 
                                            else {dispatch({ type: "error" })}}} 
                                             className="play-container">
                  {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
                </div>
                <div onClick={()=> {dispatch1({type : "showingaddoption", showaddoption: true, optionidx: song._id}); dispatch1({type : "playingall", 
                                            infotitle : song.title, 
                                            infoimg : song.image, 
                                            infodes : song.description, 
                                            infoid : song._id,
                                            infocount : song.songs.length,
                                            infotype : "Album"
                                            })}}>
                <ActionMoreIcon />
                </div>
              </div>
              {state1.showaddoption && state1.optionidx === song._id && <AddOptions state1={state1} dispatch={dispatch} dispatch1={dispatch1} divRef={divRef} />}
              {state.playing && state.id === song._id ?               
              <div className="rythm-container">
                <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "40px", height: "40px"}}></img>
              </div> :  null}
            </div>
            <Link className="path-pref" to={`/playlists/${song._id}`}><div className="link-container" onClick={()=> dispatch1({type : "playingall", 
                                            infotitle : song.title, 
                                            infoimg : song.image, 
                                            infodes : song.description, 
                                            infoid : song._id,
                                            infocount : song.songs.length,
                                            infotype : "Album"
                                            })}>
              <span className="link">{song.title}</span>
            </div></Link>
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