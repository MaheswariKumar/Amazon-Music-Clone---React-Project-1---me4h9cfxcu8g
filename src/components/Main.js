import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import TrendingPlayLists from "./TrendingPlayLists";
import TrendingSongs from "./TrendingSongs";
import ArtistShowcase from "./ArtistShowcase";
import HappyHarmonies from "./HappyHarmonies";
import NewMusicShowcase from "./NewMusicShowcase";
import SoulfulHealing from "./SoulfulHealing";
import RomanticRhythms from "./RomanticRhythms";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomNextIcon from "./MyCustomNextIcon";
import MyCustomShuffleIcon from "./MyCustomShuffleIcon";
import MyCustomPrevIcon from "./MyCustomPrevIcon";
import MyCustomVolumeIcon from "./MyCustomVolumeIcon";
import MyCustomVolumeOffIcon from "./MyCustomVolumeOffIcon";
import MyCustomSkipIcon from "./MyCustomskipIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import MyCustomMaximizeIcon from "./MyCustomMaximizeIcon";
import MyCustomGoBackIcon from "./MyCustomGoBackIcon";
import { Container, Slider } from "@mui/material";
// import { runtime } from "webpack";

function Main({opensearch, 
               setOpenSearch, 
               filteredSuggestions, 
               opensuggestion, 
               openresults, 
               setOpenResults, 
               searchTerm, 
               submit,
               setSubmit,
               searchseenresults,
               deleteSearchRes }){
    let [playlists, setPlayLists] = useState([]);
    let [songlists, setSongLists] = useState([]);
    let [artistlists, setArtistLists] = useState([]);
    let [happylists, setHappyLists] = useState([]);
    let [newlists, setNewLists] = useState([]);
    let [sadlists, setSadLists] = useState([]);
    let [romanticlists, setRomanticLists] = useState([]);
    let [selectleft, setSelectLeft] = useState({
        trendingPlaylists: "rgba(255, 255, 255, 0.3)", 
        trendingSongs: "rgba(255, 255, 255, 0.3)",
        artistlists: "rgba(255, 255, 255, 0.3)",
        happySongs: "rgba(255, 255, 255, 0.3)",
        newRelease: "rgba(255, 255, 255, 0.3)",
        sadSongs: "rgba(255, 255, 255, 0.3)",
        romanticSongs: "rgba(255, 255, 255, 0.3)",
      });
    let [selectright, setSelectRight] = useState({
        trendingPlaylists: "white", 
        trendingSongs: "white",
        artistlists: "white",
        happySongs: "white",
        newRelease: "white",
        sadSongs: "white",
        romanticSongs: "white",
      });
    let [scrollLeft, setScrollLeft] = useState(0);
    let [selectall, setSelectAll] = useState(false);
    let [limit, setLimit] = useState(12);
    let [options, setOptions] = useState(true);
    let [result, setResults] = useState("");

    // let initialState = {
    //   showTrendingPlaylists : true,
    //   showTrendingSongs : true,
    //   showartists : true,
    //   showhappysongs : true,
    //   shownewrelease : true,
    //   showsadsongs : true,
    //   showromanticsongs : true,
    // }
    let [showTrendingPlaylists, setShowTrendingPlaylists] = useState(true);
    let [showTrendingSongs, setShowTrendingSongs] = useState(true);
    let [showartists, setShowArtists] = useState(true);
    let [showhappysongs, setShowHappySongs] = useState(true);
    let [shownewrelease, setShowNewRelease] = useState(true);
    let [showsadsongs, setShowSadSongs] = useState(true);
    let [showromanticsongs, setShowRomanticSongs] = useState(true);
    let containerRef = useRef(null);

    let songContainerRef = useRef(null);
    let artistContainerRef = useRef(null);
    let happySongContainerRef = useRef(null);
    let newReleaseContainerRef = useRef(null);
    let sadSongContainerRef = useRef(null);
    let romanticContainerRef = useRef(null);

    let initialState = {
      // playlists: Array(100).fill().map(() => ({
      //   play: true,
      // })),
      playing : false,
      showmusiccomp : false,
      showerrorcomp : false,
      title : "",
      img : "",
      name : "",
      audio : "",
      playAudio : false,
      playingIndex : -1,
      id : null,
    }

    function reducer(state, action) {
      switch(action.type) {
        case "playandpause" :
          // const { playlistIndex } = action;
          // const playlists = [...state.playlists];
          // playlists[playlistIndex].play = !playlists[playlistIndex].play;
          // console.log(audio);
          // console.log(state.audio);
          // console.log(action.audio);


          // if (window.onerror) {
          //   return {
          //     ...state,
          //     showerrorcomp: true,
          //   };
          // }  
          return {...state,  
                  showmusiccomp : true,
                  title : action.songTitle,
                  img : action.songImg,
                  name : action.songName,
                  audio : action.songAudio,
                  playingIndex : action.playingIndex,
                  // playAudio : action.songPlay,
                  // playId : action.playIdx,
                  playing : !state.playing,
                  // index : action.idex,
                  id : action.id,

                };
        case "error":
          return {
            ...state,
            showerrorcomp: !state.showerrorcomp,
          };

        default:
          return state;
      }      
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    async function fetchTrendingPlaylists() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/album?limit=${limit}`,
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
          setPlayLists(data.data);
          
          console.log("trend");
          console.log(data.data);
          console.log(data.data[0]);

        } catch (error) {
          console.error("Error fetching trending playlists:", error);
        }
      }
  
      async function fetchTrendingSongs() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/song?limit=${limit}`,
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
          
          setSongLists(data.data);
          console.log("trendSong");
          console.log(data.data);
          console.log(data.data[0]);
        } catch (error) {
          console.error("Error fetching trending songs:", error);
        }
      }
  
      async function fetchArtistLists() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/artist?limit=${limit}`,
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
          setArtistLists(data.data);
          console.log("trendSong");
          console.log(data.data);
          console.log(data.data[0]);
        } catch (error) {
          console.error("Error fetching artist lists:", error);
        }
      }

      async function fetchHappySongs() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}&limit=${limit}`,
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
          setHappyLists(data.data);
          console.log("Happy");
          console.log(data.data);
          console.log(data.data[0]);
        } catch (error) {
          console.error("Error fetching artist lists:", error);
        }
      }

      async function fetchNewRelease() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}&limit=${limit}`,
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
          setNewLists(data.data);
          console.log("new");
          console.log(data.data);
          console.log(data.data[0]);
        } catch (error) {
          console.error("Error fetching artist lists:", error);
        }
      }

      async function fetchSadSongs() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}&limit=${limit}`,
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
          setSadLists(data.data);
          console.log("sad");
          console.log(data.data);
          console.log(data.data[0]);
        } catch (error) {
          console.error("Error fetching artist lists:", error);
        }
      }

      async function fetchRomanticSongs() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}&limit=${limit}`,
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
          setRomanticLists(data.data);
          console.log("romatic")
          console.log(data.data);
          console.log(data.data[0]);
        } catch (error) {
          console.error("Error fetching artist lists:", error);
        }
      }

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
          fetchTrendingPlaylists();
          fetchTrendingSongs();
          fetchArtistLists();
          fetchHappySongs();
          fetchNewRelease();
          fetchSadSongs();
          fetchRomanticSongs();
          fetchSongs();
          console.log("hello");
          console.log(selectleft);
          console.log(selectright);
    }, [])

    useEffect(() => {
        if (showTrendingPlaylists) {
            fetchTrendingPlaylists();
            console.log("album");
        }
          
        else if (showTrendingSongs) {
            fetchTrendingSongs();
            console.log("song");
        }
          
        else if (showartists) {
            fetchArtistLists();
            console.log("artist");
        }

        else if (showhappysongs) {
            fetchHappySongs();
            console.log("happy");
        }

        else if (shownewrelease) {
            fetchNewRelease();
            console.log("new");
        }

        else if (showsadsongs) {
            fetchSadSongs();
            console.log("sad");
        }

        else if (showromanticsongs) {
            fetchRomanticSongs();
            console.log("rom");
        }
        console.log("hello");
        console.log(selectleft["trendingPlaylists"]);
      }, [limit]);

      useEffect(() => {
        if (state.showerrorcomp) {
          // Set a timeout to hide the error component after 2 seconds
          const errorTimeout = setTimeout(() => {
            dispatch({ type: "error"});
          }, 1000);
    
          return () => {
            clearTimeout(errorTimeout);
          };
        }
      }, [state.showerrorcomp, dispatch]);

    function handleLeftIcon(identifier) {
        const container =   identifier === "trendingPlaylists" ? containerRef
        : identifier === "trendingSongs" ? songContainerRef
        : identifier === "artistlists" ? artistContainerRef
        : identifier === "happySongs" ? happySongContainerRef
        : identifier === "newRelease" ? newReleaseContainerRef
        : identifier === "sadSongs" ? sadSongContainerRef
        : romanticContainerRef;

        if (container.current) {
          container.current.scrollLeft -= 1000;
        }
      
        if (container.current.scrollLeft <= 0) {
            setSelectRight((prevSelectRight) => ({
                ...prevSelectRight,
                [identifier]: "white",
            }));
            setSelectLeft((prevSelectLeft) => ({
                ...prevSelectLeft,
                [identifier]: "rgba(255, 255, 255, 0.3)",
            }));
        }
    }
    
    function handleRightIcon(identifier) {
        const container =   identifier === "trendingPlaylists" ? containerRef
        : identifier === "trendingSongs" ? songContainerRef
        : identifier === "artistlists" ? artistContainerRef
        : identifier === "happySongs" ? happySongContainerRef
        : identifier === "newRelease" ? newReleaseContainerRef
        : identifier === "sadSongs" ? sadSongContainerRef
        : romanticContainerRef;

        if (container.current) {
          container.current.scrollLeft += 1000;
        }

        // console.log(container.current.scrollWidth - container.current.clientWidth);
      
        if (container.current.scrollLeft < 1000) {
            setSelectRight((prevSelectRight) => ({
                ...prevSelectRight,
                [identifier]: "rgba(255, 255, 255, 0.3)",
            }));
            setSelectLeft((prevSelectLeft) => ({
                ...prevSelectLeft,
                [identifier]: "white",
            }));
        }
      }
      

    function handleSelectAll(identifier) {
      setOptions(false)
        if (identifier === "trendingPlaylists") {
            setShowTrendingPlaylists(true);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier === "trendingSongs") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(true);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier=== "artistlists") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(true);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier=== "happySongs") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(true);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier=== "newRelease") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(true);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier=== "sadSongs") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(true);
            setShowRomanticSongs(false);
        }
        else {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(true);
        }
        setLimit((prevLimit)=> prevLimit+20);
        setSelectAll(true);
        function handleScroll() {
            // if (
            //   containerRef.current &&
            //   containerRef.current.scrollTop + containerRef.current.clientHeight >=
            //     containerRef.current.scrollHeight
            // ) {
              setLimit((prevLimit) => prevLimit + 12);
            // }
          }
          window.addEventListener("scroll", handleScroll);
        
          return () => {
            window.removeEventListener("scroll", handleScroll);
          }; 
    }

    // function handleOtherComp() {

    // }

    

    return (
        <div className="Main-section">
            <div className="categories"></div>
            {openresults && opensuggestion && opensearch && <ShowResults result={result} state={state} dispatch={dispatch} />}
            {opensuggestion && !openresults && opensearch && <Suggestions 
                              filteredSuggestions={filteredSuggestions} 
                              setResults={setResults}
                              setOpenResults={setOpenResults}
                              searchTerm={searchTerm}
                              submit={submit}
                              setSubmit={setSubmit}  />}
            {opensearch && !opensuggestion && !openresults && <SearchComponent 
                                                               handleSelectAll={handleSelectAll} 
                                                               setOpenSearch={setOpenSearch}
                                                               searchseenresults={searchseenresults}
                                                               deleteSearchRes={deleteSearchRes} />}
            {!opensearch && !opensuggestion && !openresults && showTrendingPlaylists && <TrendingPlayLists playlists={playlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["trendingPlaylists"]} 
                               selectright={selectright["trendingPlaylists"]} 
                               containerRef={containerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingPlaylists"
                               options={options}
                               state={state} 
                               dispatch={dispatch} /> }
            {!opensearch && !opensuggestion && !openresults && showTrendingSongs && <TrendingSongs songlists={songlists}
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["trendingSongs"]} 
                               selectright={selectright["trendingSongs"]} 
                               songContainerRef={songContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingSongs"
                               state={state}
                               dispatch={dispatch} /> }
            {!opensearch && !opensuggestion && !openresults && showartists && <ArtistShowcase artistlists={artistlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["artistlists"]} 
                               selectright={selectright["artistlists"]} 
                               artistContainerRef={artistContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="artistlists"
                               state={state}
                               dispatch={dispatch}/> }
            {!opensearch && !opensuggestion && !openresults && showhappysongs && <HappyHarmonies happylists={happylists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               happySongContainerRef={happySongContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="happySongs"
                               state={state}
                               dispatch={dispatch} />}
            {!opensearch && !opensuggestion && !openresults && shownewrelease && <NewMusicShowcase newlists={newlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               newReleaseContainerRef={newReleaseContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="newRelease"
                               state={state}
                               dispatch={dispatch} />}
            {!opensearch && !opensuggestion && !openresults && showsadsongs && <SoulfulHealing sadlists={sadlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               sadSongContainerRef={sadSongContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="sadSongs"
                               state={state}
                               dispatch={dispatch} />}
            {!opensearch && !opensuggestion && !openresults && showromanticsongs && <RomanticRhythms romanticlists={romanticlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               romanticContainerRef={romanticContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="romanticSongs"
                               state={state}
                               dispatch={dispatch} />}
            {state.showmusiccomp && <MusicComponent state={state} 
                               dispatch={dispatch} 
                               songTitle={state.title} 
                               songImg={state.img} 
                               songName={state.name} 
                               songAudio={state.audio}
                               songPlay={state.playAudio}
                               id = {state.id}
                              //  idex = {state.idex}
                              />}
            {state.showerrorcomp && <PlayBackError state={state} dispatch={dispatch}/>}
        </div>

    )
}

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


function PlayBackError({state, dispatch}) {
  return (
    <div className="errordiv">
      <p className="errormsg">Playback Error! Check Your Network</p>
    </div>
  )
}

function SearchComponent({handleSelectAll, setOpenSearch, searchseenresults, deleteSearchRes}){
  return (
    <div className="Search-Lists">
      <div className="Search-Types">
        {searchseenresults.length > 0 ? (
          <div className="topresult">
              <div>Search Results</div>
                  <ul className="res-list">
                    <div className="x" onClick={deleteSearchRes}>
                      <div className="x-btn">X</div>
                    </div>
                      {searchseenresults.map((res, idx)=> (
                        <div className="res-li">
                          <li key={idx}>{res}</li>
                        </div>
                      ))}
                  </ul> 
          </div>
        ): null}
        <div className="Moods">Moods</div>
          <ul className="mood-list">
            <li className="box-1" onClick={() => {handleSelectAll("happySongs"); setOpenSearch(false);}}>Happy</li>
            <li className="box-2" onClick={() => {handleSelectAll("newRelease"); setOpenSearch(false);}}>Fresh</li>
            <li className="box-3" onClick={() => {handleSelectAll("sadSongs"); setOpenSearch(false);}}>Sad</li>
            <li className="box-4" onClick={() => {handleSelectAll("romanticSongs"); setOpenSearch(false);}}>Romatic</li>
          </ul>
        <div className="Listen-Your-Way">Listen Your Way</div>
          <ul className="Listen-list">
            <li className="box-5" onClick={() => {handleSelectAll("trendingPlaylists"); setOpenSearch(false);}}>Trending Albums</li>
            <li className="box-6" onClick={() => {handleSelectAll("trendingSongs"); setOpenSearch(false);}}>Trending Songs</li>
          </ul>
        <div className="Artists">Artists</div>
          <ul className="Artists-list">
            <li className="box-7" onClick={() => {handleSelectAll("artistlists"); setOpenSearch(false);}}>Artistic Collection</li>
          </ul>
      </div>
    </div>
  )
}

function Suggestions({filteredSuggestions, setResults, setOpenResults, searchTerm, submit, setSubmit}) {
  function showres(suggestion) {
    setResults(suggestion);
    setOpenResults(true);
  }

  function handleFunction() {
    setSubmit(true);
  }

  return (
    <div className="suggestions-list">
      {submit ? null : <div className="suggestions">Suggestions</div>}
      {filteredSuggestions.length === 0 ? (
        submit ? 
          <div className="noresult">No Results Found "{searchTerm}"</div> 
          : 
          <ul className="sugg-list">
            <li onClick={handleFunction}>Happy Songs</li>
            <li onClick={handleFunction}>New Songs</li>
            <li onClick={handleFunction}>Podcasts</li>
            <li onClick={handleFunction}>Rhythms</li>
          </ul>
      ) : (
        <ul className="sugg-list">
          {filteredSuggestions.slice(0, 10).map((suggestion, index) => (
            <li key={index} onClick={() => showres(suggestion)}>
              {suggestion.title}
            </li>
          ))}
          {filteredSuggestions.slice(0, 10).map((suggestion, index) => (
            <li key={index}>{suggestion.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ShowResults({result, state, dispatch}) {
  return (
    <div className="showresult">
      <div className="result">Search results for "{result.title}"</div>
      <div className="result">Songs</div>
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
                </div>
      

    </div>
  )
}


export default Main;