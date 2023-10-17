import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import CustomPlayIcon from "./CustomPlayIcon";
import CustomShareIcon from "./CustomShareIcon";

function DetailPage({state1, dispatch1, state, dispatch}) {
    let [list, setList] = useState([]);
    let [durations, setDurations] = useState([]);
    let [type, setType] = useState("");
  
  
    async function fetchSongs() {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/music/${type}/${state1.infoid}`,
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
        setList(data.data.songs);
        console.log("songssssssss");
        console.log(data);
        console.log(data.data.songs);
      } catch (error) {
        console.error("Error fetching artist lists:", error);
      }
    }
      useEffect(() => {
        if (state1.infotype === "Artists") {
          setType("artist");
        }
        else if (state1.infotype === "Album") {
          setType("album")
        }
        else {
          setType("Songs")
        }
        fetchSongs(); 
          const fetchDurations = async () => {
              const durationsArray = await Promise.all(
                  list.map(async (li) => {
                      const audio = new Audio(li.audio_url);
                      await new Promise((resolve) => {
                          audio.addEventListener("loadedmetadata", () => {
                              resolve();
                          });
                          audio.load();
                      });
                      return audio.duration;
                  })
              );
              setDurations(durationsArray);
          };
  
          const getDuration = async (audioUrl) => {
            const audio = new Audio(audioUrl);
            await new Promise((resolve) => {
                audio.addEventListener("loadedmetadata", () => {
                    resolve();
                });
                audio.load();
            });
            return audio.duration;
        };
        const fetchAudioDuration = async () => {
          try {
              const duration = await getDuration(state1.infoaudio);
              console.log("Duration:", duration);
              setDurations([duration])
              console.log(dur);
              console.log(durations[0]);
              // Set the duration in the state or use it as required
          } catch (error) {
              console.error("Error fetching audio duration:", error);
          }
      };
  
      if (type==="Songs"){
        fetchAudioDuration();
      }
      else {
        fetchDurations();
      }
      
      }, [list, type, state1.infoid, state1.infotype, state1.infoaudio]);
      
      function formatTime(durationInSeconds) {
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = Math.floor(durationInSeconds % 60);
        const formattedMinutes = String(minutes).padStart(2, '0'); // Ensure two digits for minutes
        const formattedSeconds = String(seconds).padStart(2, '0'); // Ensure two digits for seconds
        return `${formattedMinutes}:${formattedSeconds}`;
      }
  
    return (
      <div className="detail">
        <div className="deatil-info">
          <img className="img-page" src={state1.infoimg}></img>
          <div className="artist-info">
            <nav className="info-art">PLAYLISTS</nav>
            <div className="name-con">
            <h1 className="info-name">{state1.infotitle}</h1>
            </div>
            <p className="info-azn">Curated by Amazon Music</p>
            <div className="des-con">
            <p className="info-des">{state1.infodes}</p>
            </div>
            <p className="info-count">{state1.infocount} SONGS</p>
            <div className="detail-icon">
              <div className="play-btn">
                <CustomPlayIcon style={{ fontSize: '20px', color: 'black' }}/>
                <nav className="play-text">Play</nav>
              </div>
              <ActionAddIcon />
              <CustomShareIcon />
            </div>
          </div>
        </div>
        <div className="playlist">
         {type !== "Songs" ? (list.map((li, idx)=> (
          <div key={idx} className="all-list">
            <div className="play-half1">
            <p>{idx+1}</p>
            <div className="play-img-container">
              <img className="play-img" src={li.thumbnail}></img>
              <div onClick={()=> {if (li.audio_url) {dispatch({type : "playandpause", 
                                              songTitle : li.title, 
                                              songImg : li.thumbnail, 
                                              songName : li.mood, 
                                              id : li._id,
                                              songAudio : li.audio_url, 
                                              }) } 
                                              else {dispatch({ type: "error" })}}} 
                                               className="play-icon">
                    {state.playing && state.id === li._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
              </div>
              {state.playing && state.id === li._id ?               
                <div className="rythm-container-1">
                  <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "30px", height: "30px"}}></img>
                </div> 
                :  null}
            </div>
            <div className="play-info">
              <nav className="play-name">{li.title}</nav>
              <nav className="play-item">{li.mood}</nav>
            </div>
            </div>
            <div className="play-half2">
            <nav className="play-art">{state1.infotitle}</nav>
            <nav className="play-time">{formatTime(durations[idx])}</nav>
            <ActionAddIcon />
            <ActionMoreIcon />
            </div>
          </div>
          ))) : (       <div className="all-list">
          <div className="play-half1">
          <p>1</p>
          <div className="play-img-container">
            <img className="play-img" src={state1.infoimg}></img>
            <div onClick={()=> {if (state1.infoaudio) {dispatch({type : "playandpause", 
                                            songTitle : state1.infotitle, 
                                            songImg : state1.infoimg, 
                                            songName : state1.infodes, 
                                            id : state1.infoid,
                                            songAudio : state1.infoaudio, 
                                            }) } 
                                            else {dispatch({ type: "error" })}}} 
                                             className="play-icon">
                  {state.playing && state.id === state1.infoid ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
            </div>
            {state.playing && state.id === state1.infoid ?               
              <div className="rythm-container-1">
                <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "30px", height: "30px"}}></img>
              </div> 
              :  null}
          </div>
          <div className="play-info">
            <nav className="play-name">{state1.infotitle}</nav>
            <nav className="play-item">{state1.infodes}</nav>
          </div>
          </div>
          <div className="play-half2">
          <nav className="play-art">{state1.infotitle}</nav>
          <nav className="play-time">{formatTime(durations[0])}</nav>
          <ActionAddIcon />
          <ActionMoreIcon />
          </div>
        </div>)
              }
        </div>
      </div>
    )
  }

  export default DetailPage;