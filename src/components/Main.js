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
import MyCustomSkipIcon from "./MyCustomskipIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import { Container } from "@mui/material";
// import { runtime } from "webpack";

function Main(){
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
    // let [showmusiccomp, setShowMusicComp] = useState(true);
    let containerRef = useRef(null);
    let idxContainerRef = useRef(null);
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
      playing : true,
      showmusiccomp : false,
      title : "",
      img : "",
      desc : "",
      audio : "",
      playAudio : false,
      // index : 0,

      
    }

    function reducer(state, action) {
      switch(action.type) {
        case "playandpause" :
          // const { playlistIndex } = action;
          // const playlists = [...state.playlists];
          // playlists[playlistIndex].play = !playlists[playlistIndex].play;
          console.log(state.playId);     
          return {...state,  
                  showmusiccomp : true,
                  title : action.songTitle,
                  img : action.songImg,
                  desc : action.songDesc,
                  audio : action.songAudio,
                  playAudio : action.songPlay,
                  playId : action.playIdx,
                  playing : !state.playing,
                  index : action.idex};
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
          console.log("new");
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
          console.log(data.data);
          console.log(data.data[0]);
        } catch (error) {
          console.error("Error fetching artist lists:", error);
        }
      }

      async function fetchSongs() {
        try {
          const response = await fetch(
            'https://academics.newtonschool.co/api/v1/music/album/64cee72fe41f6d0a8b0cd0bd',
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
        console.log(selectleft["happySongs"]);
      }, [limit]);

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
      
        if (container.current.scrollLeft >= container.current.scrollWidth - container.current.clientWidth) {
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
        if (identifier === "trendingPlaylists") {
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier === "trendingSongs") {
            setShowTrendingPlaylists(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier=== "artistlists") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier=== "happySongs") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier=== "newRelease") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowSadSongs(false);
            setShowRomanticSongs(false);
        } else if (identifier=== "sadSongs") {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowRomanticSongs(false);
        }
        else {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
            setShowArtists(false);
            setShowHappySongs(false);
            setShowNewRelease(false);
            setShowSadSongs(false);
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

    return (
        <div className="Main-section">
            <div className="categories"></div>
            {showTrendingPlaylists && <TrendingPlayLists playlists={playlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["trendingPlaylists"]} 
                               selectright={selectright["trendingPlaylists"]} 
                               containerRef={containerRef} 
                               idxContainerRef={idxContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingPlaylists"
                               state={state} 
                               dispatch={dispatch} /> }
            {showTrendingSongs && <TrendingSongs songlists={songlists}
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["trendingSongs"]} 
                               selectright={selectright["trendingSongs"]} 
                               songContainerRef={songContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingSongs" /> }
            {showartists && <ArtistShowcase artistlists={artistlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["artistlists"]} 
                               selectright={selectright["artistlists"]} 
                               artistContainerRef={artistContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="artistlists"/> }
            {showhappysongs && <HappyHarmonies happylists={happylists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               happySongContainerRef={happySongContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="happySongs"/>}
            {shownewrelease && <NewMusicShowcase newlists={newlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               newReleaseContainerRef={newReleaseContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="newRelease"/>}
            {showsadsongs && <SoulfulHealing sadlists={sadlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               sadSongContainerRef={sadSongContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="sadSongs" />}
            {showromanticsongs && <RomanticRhythms romanticlists={romanticlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               romanticContainerRef={romanticContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="romanticSongs" />}
            {state.showmusiccomp && <MusicComponent state={state} 
                               dispatch={dispatch} 
                               songTitle={state.title} 
                               songImg={state.img} 
                               songDesc={state.desc} 
                               songAudio={state.audio}
                               songPlay={state.playAudio}
                               idex = {state.idex}
                              />}
        </div>

    )
}

function MusicComponent({state, dispatch, songTitle, songImg, songDesc, songAudio, songPlay, idex}) {
  function componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  console.log(state.idex);
  return (
    <>
    <input className="audio-input" type="range"></input>
    <div className="music-container">
      <div className="music-parts">
        <div className="img-container">
          <audio className="audio-element" >
            <source src={songAudio}></source>
          </audio>
          <img className="img" src={songImg} alt="hello"></img>
        </div>
        <div className="detail-container">
          <span className="link-title">{songTitle}</span>
          <span className="link-des">{songDesc}</span>
        </div>
      </div>
      <div className="music-icon-container">
        <div className="skip-container">
          <MyCustomSkipIcon style={{ fontSize: "18px"}}/>
        </div>
        <div className="prev-play-container">
          <MyCustomPrevIcon style={{ fontSize: "18px"}}/>
        </div>
        <div onClick={()=> dispatch({type : "playandpause", songTitle, songImg, songDesc, songAudio, idex})} className="play-pause-container">
          {state.playing ? <PlaybackPlayIcon /> : <MyCustomPauseIcon />}
        </div>
        <div className="next-play-container">
          <MyCustomNextIcon style={{ fontSize: "18px"}}/>
        </div>
        <div className="shuffle-container">
          <MyCustomShuffleIcon style={{ fontSize: "18px"}}/>
        </div>
      </div>
      <div className="volume-icon">
        <div className="volume-container">
          <MyCustomVolumeIcon style={{ fontSize: "40px"}}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main;