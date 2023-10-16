import React from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";

function TrendingSongs({songlists, 
                        handleLeftIcon, 
                        handleRightIcon, 
                        selectleft, 
                        selectright, 
                        songContainerRef, 
                        handleSelectAll, 
                        selectall, 
                        identifier,
                        state,
                        dispatch,
                        dispatch1}) {
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Trending Songs</h2>
                </div>
                <div className="options">
                    <div onClick={()=> handleLeftIcon(identifier)}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft}` }}/>
                    </div>
                    <div onClick={()=> handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright}` }}/>
                    </div>
                </div>
                <div onClick={()=> handleSelectAll(identifier)} className="alloptions">
                    <span className="all">SEE ALL</span>
                </div>
            </div>
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={songContainerRef}>
                {songlists.map((song, idx)=>(
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
                    {state.playing && state.id === song._id ?
                    <div className="rythm-container">
                        <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "40px", height: "40px"}}></img>
                    </div> :  null} 
                    </div>
                    <div className="link-container" onClick={()=> dispatch1({type : "playingall", 
                                            infotitle : song.title, 
                                            infoimg : song.thumbnail, 
                                            infodes : song.description, 
                                            infoid : song._id,
                                            infocount : 0,
                                            infotype : "Songs",
                                            infoaudio : song.audio_url
                                            })}>
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

export default TrendingSongs;