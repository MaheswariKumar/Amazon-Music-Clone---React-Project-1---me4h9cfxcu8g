import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import AddOptions from "./AddOptions";
import CustomDoneIcon from "./CustomDoneIcon";

function RomanticRhythms({romanticlists,
                          handleLeftIcon, 
                          handleRightIcon, 
                          selectleft, 
                          selectright, 
                          romanticContainerRef, 
                          handleSelectAll, 
                          selectall, 
                          identifier,
                          options,
                          state,
                          state1,
                          dispatch,
                          dispatch1,
                          loggedin,
                          favoriteSongs,
                          addToFavorites,
                          divRef}) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getIconColorleft = () => {
    if (screenWidth <= 1064) {
      return 'white';
    } else {
      return `${selectleft[identifier]}`;
    }
  };

  const getIconColorright = () => {
    if (screenWidth <= 1064) {
      return 'white'; 
    } else {
      return `${selectright[identifier]}`; 
    }
  };

  const token = localStorage.getItem('token');
                
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Romantic Rhythms</h2>
                </div>
                <div className="options">
                    <div onClick={()=> handleLeftIcon(identifier)}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: getIconColorleft() }}/>
                    </div>
                    <div onClick={()=> handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: getIconColorright() }}/>
                    </div>
                </div>
        <Link to="/romantictracksCollections">{options ? <div onClick={() => handleSelectAll(identifier)} className="alloptions">
          <span className="all">SEE ALL</span>
        </div> : null }</Link>
            </div>
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={romanticContainerRef}>
                {romanticlists.map((song, idx)=>(
                <div className={selectall ? "collections-all" : "collections"} key={idx}>
                    <div className="image-container">
                    <img className="imgtab" src={song.thumbnail} alt={song.title}></img>
                    <div className="icon-container">
                    {!loggedin ? (<div onClick={()=> dispatch({type : "showpremium"})}>
              <ActionAddIcon style={{ color: 'white' }}/>
              </div>)
         : (<div onClick={() => addToFavorites(song._id, token, "me4h9cfxcu8g")}>
         {favoriteSongs.includes(song._id) ? (
           <CustomDoneIcon style={{ color: 'white' }} />
         ) : (
           <ActionAddIcon style={{ color: 'white' }} />
         )}
       </div>) }
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
                        <div onClick={()=> {dispatch1({type : "showingaddoption", showaddoption: true, optionidx: "amazon"+idx+100}); dispatch1({type : "playingall", 
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
                    {state1.showaddoption && state1.optionidx === "amazon"+idx+100 && <AddOptions state1={state1} dispatch={dispatch} dispatch1={dispatch1} divRef={divRef} />}
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

  export default RomanticRhythms;