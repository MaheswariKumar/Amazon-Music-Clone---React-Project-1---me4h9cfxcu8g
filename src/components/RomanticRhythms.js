import React from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";

function RomanticRhythms({romanticlists,
                          handleLeftIcon, 
                          handleRightIcon, 
                          selectleft, 
                          selectright, 
                          romanticContainerRef, 
                          handleSelectAll, 
                          selectall, 
                          identifier,
                          state,
                          dispatch}) {
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Romantic Rhythms</h2>
                </div>
                <div className="options">
                    <div onClick={()=> handleLeftIcon(identifier)}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft[identifier]}` }}/>
                    </div>
                    <div onClick={()=> handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright[identifier]}` }}/>
                    </div>
                </div>
                <div onClick={()=> handleSelectAll(identifier)} className="alloptions">
                    <span className="all">SEE ALL</span>
                </div>
            </div>
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={romanticContainerRef}>
                {romanticlists.map((song, idx)=>(
                <div className={selectall ? "collections-all" : "collections"} key={idx}>
                    <div className="image-container">
                    <img className="imgtab" src={song.thumbnail} alt={song.title}></img>
                    <div className="icon-container">
                        <ActionAddIcon />
                        <div onClick={()=> {if (song.audio_url) {dispatch({type : "playandpause", 
                                            songTitle : song.title, 
                                            songImg : song.thumbnail, 
                                            songName : song.artist[0].name, 
                                            id : song._id,
                                            songAudio : song.audio_url, 
                                            }) } 
                                            else {dispatch({ type: "error" })}}} 
                                             className="play-container">
                        {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
                        </div>
                        <ActionMoreIcon />
                    </div> 
                    </div>
                    <div className="link-container">
                        <span className="link">{song.title}</span>
                    </div> 
                    <div className="content-container">
                        {/* <span className="content">{song.artist[0].name}</span> */}
                          {song.artist.map((artist, idx) => (
                            <span className="content" key={idx}>
                            {artist.name}
                            {idx < song.artist.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
  }

  export default RomanticRhythms;