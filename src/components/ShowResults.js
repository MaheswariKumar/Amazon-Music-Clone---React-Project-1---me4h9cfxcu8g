import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import CustomChevronRightIcon from "./CustomChevronRightIcon";

function ShowResults({result, state, dispatch, dispatch1}) {
    return (
    <div className="Main-section">
        <div className="categories"></div>
      <div className="showresult">
        {!result.name ? <div className="result">Search results for "{result.title}"</div> : <div className="result">Search results for "{result.name}"</div> }
        <div className="result">Songs</div>
        {!result.name ? 
        (
        <div className="collections" key={0}>
                      <div className="image-container">
                      <img className="imgtab" src={result.thumbnail} alt={result.title}></img>
                      <div className="icon-container">
                          <ActionAddIcon />
                          <div onClick={()=> {if (result.audio_url) {dispatch({type : "playandpause", 
                                              songTitle : result.title, 
                                              songImg : result.thumbnail, 
                                              songName : result.artist[0].name, 
                                              id : result._id,
                                              songAudio : result.audio_url,
                                              }) } 
                                              else {dispatch({ type: "error" })}}} 
                                               className="play-container">
                           {state.playing && state.id === result._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
                          </div>
                          <ActionMoreIcon />
                      </div>
                      {state.playing && state.id === result._id ?
                      <div className="rythm-container">
                          <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "40px", height: "40px"}}></img>
                      </div> :  null} 
                      </div>
                      <div className="link-container">
                          <span className="link">{result.title}</span>
                      </div> 
                      <div className="content-container">
                          {/* <span className="content">{song.artist[0].name}</span> */}
                            {result.artist.map((artist, idx) => (
                              <span className="content" key={idx}>
                              {artist.name}
                              {idx < result.artist.length - 1 ? ', ' : ''}
                              </span>
                          ))}
                      </div>
                  </div>) :
        (              <div className="collections" key={0}>
        <div className="image-container">
        <img className="imgtab" src={result.image} alt={result.name}></img>
        <div className="icon-container">
        <div onClick={()=> dispatch1({type : "playingall", 
                                              infotitle : result.name, 
                                              infoimg : result.image, 
                                              infodes : result.description, 
                                              infoid : result._id,
                                              infocount : result.songs.length,
                                              })} 
                                               className="play-container">
                          {/* {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />} */}
                          <CustomChevronRightIcon style={{ fontSize: '40px'}}/>
                          </div>
        </div> 
        </div>
        <div className="link-container">
            <span className="link">{result.name}</span>
        </div> 
        <div className="content-container">
            <span className="content">{result.description}</span>
        </div>
    </div>)  
  }    
      </div>
    </div>
    )
  }

export default ShowResults;