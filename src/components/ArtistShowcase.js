import React from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";

function ArtistShowcase({artistlists, 
                         handleLeftIcon, 
                         handleRightIcon, 
                         selectleft, 
                         selectright, 
                         artistContainerRef, 
                         handleSelectAll, 
                         selectall, 
                         identifier,
                         state,
                         dispatch}) {
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Artist Showcase</h2>
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
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={artistContainerRef}>
                {artistlists.map((song, idx)=>(
                <div className={selectall ? "collections-all" : "collections"} key={idx}>
                    <div className="image-container">
                    <img className="imgtab" src={song.image} alt={song.name}></img>
                    <div className="icon-container">
                        <ActionAddIcon />
                        <div onClick={()=> {if (song.songs && song.songs.length > 0 && song.songs[0]) {dispatch({type : "playandpause", 
                                            songTitle : song.name, 
                                            songImg : song.image, 
                                            songName : song.description, 
                                            id : song._id,
                                            songAudio : song.songs[0], 
                                            }) } 
                                            else {dispatch({ type: "error" })}}} 
                                             className="play-container">
                        {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
                        </div>
                        <ActionMoreIcon />
                    </div> 
                    </div>
                    <div className="link-container">
                        <span className="link">{song.name}</span>
                    </div> 
                    <div className="content-container">
                        <span className="content">{song.description}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ArtistShowcase;