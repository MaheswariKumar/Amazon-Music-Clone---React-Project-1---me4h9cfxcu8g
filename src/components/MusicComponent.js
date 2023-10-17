import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import MyCustomNextIcon from "./MyCustomNextIcon";
import MyCustomShuffleIcon from "./MyCustomShuffleIcon";
import MyCustomPrevIcon from "./MyCustomPrevIcon";
import MyCustomVolumeIcon from "./MyCustomVolumeIcon";
import MyCustomVolumeOffIcon from "./MyCustomVolumeOffIcon";
import MyCustomSkipIcon from "./MyCustomskipIcon";
import MyCustomMaximizeIcon from "./MyCustomMaximizeIcon";
import MyCustomGoBackIcon from "./MyCustomGoBackIcon";
import { Container, Slider } from "@mui/material";

function MusicComponent({state, dispatch, songTitle, songImg, songName, songAudio, songPlay, id}) {
    let audioRef = useRef(null);
    let volumeSliderRef = useRef(null);
    let [currentTime, setCurrentTime] = useState(0);
    let [showVolumeSlider, setShowVolumeSlider] = useState(false);
    let [volume, setVolume] = useState(30);
    let [remainingTime, setRemainingTime] = useState(0);
    let [MaxWindow, setMaxWindow] = useState(false);
    
    useEffect(() => {
      if (audioRef.current.src !== songAudio && state.playing && state.id === id) {
        audioRef.current = new Audio(songAudio);
      }
  
        if (state.playing && state.id === id) {
          audioRef.current.play();
        } else{
          audioRef.current.pause();
        }
        if (state.playing) {
          const timer = setInterval(() => {
            setCurrentTime(audioRef.current.currentTime);
            setRemainingTime(audioRef.current.duration - audioRef.current.currentTime);
            console.log(songAudio);
            console.log(formatTime(audioRef.current.duration-audioRef.current.currentTime));
          }, 100); // Update every 100 milliseconds
  
          audioRef.current.addEventListener('ended', handleSongEnded);
          // Clean up the timer when component unmounts or when audio is paused
          return () => {
            clearInterval(timer);
            audioRef.current.removeEventListener('ended', handleSongEnded); 
          }
        }
  
        // console.log(formatTime(audioRef.current.duration-audioRef.current.currentTime))
  
    }, [state.playing]);
  
    const handleSongEnded = () => {
      dispatch({ type: "playandpause", songTitle, songImg, songName, songAudio, id });
    };
  
  
  
    const togglePlayPause = () => {
      dispatch({ type: "playandpause", songTitle, songImg, songName, songAudio, id });
    };
  
    const handleSliderChange = (_, newValue) => {
      if (audioRef.current) {
        audioRef.current.currentTime = newValue;
    
        // Update the current time in the component's state to keep the slider position updated
        setCurrentTime(newValue);
        setRemainingTime(audioRef.current.duration - newValue);
      }
    };
  
    const toggleVolumeSlider = () => {
      // Toggle the visibility of the volume slider
      setShowVolumeSlider(!showVolumeSlider);
    };
  
    const handleVolumeChange = (_, newValue) => {
      if (audioRef.current) {
        audioRef.current.volume = newValue / 100;
        setVolume(newValue);
      }
    };
  
    function formatTime(durationInSeconds) {
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = Math.floor(durationInSeconds % 60);
      const formattedMinutes = String(minutes).padStart(2, '0'); // Ensure two digits for minutes
      const formattedSeconds = String(seconds).padStart(2, '0'); // Ensure two digits for seconds
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  
    function handleMaxWindow() {
      setMaxWindow(true);
    }
  
    function handleMinWindow() {
      setMaxWindow(false);
    }
  
    return (
      <>
      <div style={MaxWindow ? { backgroundImage: `url(${songImg})` } : null} className={MaxWindow ? "music-container-1" : "music-container"}>
        {/* <input className="audio-input" type="range"></input> */}
        <Slider className={MaxWindow ? "audio-input-1" : "audio-input"}
                // max={100} min={0} 
                max={audioRef.current?.duration || 100}
                min={0}
                value={audioRef.current?.currentTime || 0}
                onChange={handleSliderChange}
                size="small" />
  
        {MaxWindow ?       <div className="timing">
          <nav className="start">{formatTime(currentTime)}</nav>
          <nav className="end">-{formatTime(remainingTime)}</nav>
        </div> : null}        
        <div className={MaxWindow ? "music-parts-1" : "music-parts"}>
          <audio ref={audioRef} className={MaxWindow ? "audio-element-1" : "audio-element"} >
              <source  src={songAudio}></source>
            </audio>
          <div className={MaxWindow ? "img-container-1" : "img-container"}>
            <img className={MaxWindow ? "img-1" : "img"} src={songImg} alt="hello"></img>
            <div className="hover-icon" onClick={handleMaxWindow}>
              <MyCustomMaximizeIcon style={{ fontSize: '24px', color: 'white' }} />
            </div> 
            {MaxWindow ?   <div className="goback" onClick={handleMinWindow}>
                <MyCustomGoBackIcon />
                </div> : null}
          </div>
          <div className={MaxWindow ? "detail-container-1" : "detail-container"}>
            <span className={MaxWindow ? "link-title-1" : "link-title"}>{songTitle}</span>
            <span className={MaxWindow ? "link-des-1" : "link-des"}>{songName}</span>
          </div>
        </div>
        <div className={MaxWindow ? "music-icon-container-1" : "music-icon-container"}>
          <div className="skip-container">
            <MyCustomSkipIcon style={{ fontSize: "18px", color: "grey"}}/>
          </div>
          <div className="prev-play-container">
            <MyCustomPrevIcon style={{ fontSize: "18px", color: "grey"}}/>
          </div>
          <div onClick={togglePlayPause} className="play-pause-container">
            {state.playing && state.id === id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
          </div>
          <div className="next-play-container">
            <MyCustomNextIcon style={{ fontSize: "18px", color: "grey"}}/>
          </div>
          <div className="shuffle-container">
            <MyCustomShuffleIcon style={{ fontSize: "18px", color: "grey"}}/>
          </div>
        </div>
        <div className={MaxWindow ? "adjust-1" : "adjust"}>
            <Slider
              className={  !MaxWindow
                ? !showVolumeSlider
                  ? 'volume-adjust'
                  : 'volume-adjust-visible'
                : !showVolumeSlider
                ? 'volume-adjust-1'
                : 'volume-adjust-visible-1'}
              sx={{
                '& input[type="range"]': {
                  WebkitAppearance: 'slider-vertical',
                },
              }}
              orientation="vertical"
              defaultValue={volume}
              valueLabelDisplay="off"
              onChange={handleVolumeChange}
            />
          </div>
        <div className={MaxWindow ? "volume-icon-1" : "volume-icon"}>
          {volume === 0 ? ( <MyCustomVolumeOffIcon style={{ fontSize: '25px', color: 'white' }} /> )
                        : ( <MyCustomVolumeIcon  fontSize="large" color="white" onClick={toggleVolumeSlider} /> )
          }
        </div>
      </div>
      </>
    )
}

export default MusicComponent;