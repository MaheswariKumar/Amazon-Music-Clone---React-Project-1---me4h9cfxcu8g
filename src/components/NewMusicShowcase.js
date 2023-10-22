import React from "react";
import { Link } from "react-router-dom";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import AddOptions from "./AddOptions";

function NewMusicShowcase({newlists, 
                           handleLeftIcon, 
                           handleRightIcon, 
                           selectleft, 
                           selectright, 
                           newReleaseContainerRef, 
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
                    <h2>New Music Showcase</h2>
                </div>
                <div className="options">
                    <div onClick={()=> handleLeftIcon(identifier)}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft[identifier]}` }}/>
                    </div>
                    <div onClick={()=> handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright[identifier]}` }}/>
                    </div>
                </div>
        <Link to="/songs/newtracks/collections">{options ? <div onClick={() => handleSelectAll(identifier)} className="alloptions">
          <span className="all">SEE ALL</span>
        </div> : null }</Link>
            </div>
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={newReleaseContainerRef}>
                {newlists.map((song, idx)=>(
                <div className={selectall ? "collections-all" : "collections"} key={idx}>
                    <div className="image-container">
                    <img className="imgtab" src={song.thumbnail} alt={song.title}></img>
                    <div className="icon-container">
                <div onClick={()=> dispatch({type: "showpremium"})}>
                <ActionAddIcon />
                </div>
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
                        <div onClick={()=> {dispatch1({type : "showingaddoption", showaddoption: true, optionidx: "amazon"+idx+60}); dispatch1({type : "playingall", 
                                            infotitle : song.title, 
                                            infoimg : song.thumbnail, 
                                            infodes : song.artist[0].description, 
                                            infoid : song._id,
                                            infocount : 1,
                                            infoaudio : song.audio_url,
                                            infotype : "Songs"
                                            })}}>
                <ActionMoreIcon />
                </div>
                    </div>
                    {state1.showaddoption && state1.optionidx === "amazon"+idx+60 && <AddOptions state1={state1} dispatch={dispatch} dispatch1={dispatch1} divRef={divRef} />}
                    {state.playing && state.id === song._id ?               
                    <div className="rythm-container">
                        <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "40px", height: "40px"}}></img>
                    </div> :  null}
                    </div>
                    <Link className="path-pref" to={`/playlists/${song._id}`}><div className="link-container" onClick={()=> dispatch1({type : "playingall", 
                                            infotitle : song.title, 
                                            infoimg : song.thumbnail, 
                                            infodes : song.artist[0].description, 
                                            infoid : song._id,
                                            infocount : 1,
                                            infotype : "Songs",
                                            infoaudio : song.audio_url
                                            })}>
                        <span className="link">{song.title}</span>
                    </div></Link>
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

export default NewMusicShowcase;