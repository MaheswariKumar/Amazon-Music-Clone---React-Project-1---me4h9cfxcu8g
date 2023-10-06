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
                             audioContainerRef, 
                             handleSelectAll, 
                             selectall, 
                             identifier,
                             state,
                             dispatch}) {

      async function fetchSongs() {
        try {
          const response = await fetch(
            'https://academics.newtonschool.co/api/v1/music/playlistsalbum/64cee72fe41f6d0a8b0cd0bd',
            {
              headers: {
                projectId: "f104bi07c490",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log("songssssssss");
          console.log(data);
        } catch (error) {
          console.error("Error fetching artist lists:", error);
        }
      }

      useEffect(()=>{
        fetchSongs()          
      }, [])

      

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
                <div onClick={()=> dispatch({type : "playandpause", 
                                            songTitle : song.title, 
                                            songImg : song.image, 
                                            songDesc : song.description, 
                                            id : song._id,
                                            // playingIndex : state.playing ? -1 : idx,
                                            // playlistIndex: idx, 
                                            // playIdx : idx,
                                            songAudio : song.songs[0].audio_url,
                                            // idex : idx,
                                            // songPlay: state.playlists[idx].play, 
                                            })} className="play-container">
                  {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
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

function isPlaying(state, song) {

}

export default TrendingPlayLists;