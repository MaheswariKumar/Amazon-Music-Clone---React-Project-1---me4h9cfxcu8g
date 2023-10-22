import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import TrendingPlayLists from "./TrendingPlayLists";
import TrendingSongs from "./TrendingSongs";
import ArtistShowcase from "./ArtistShowcase";
import HappyHarmonies from "./HappyHarmonies";
import NewMusicShowcase from "./NewMusicShowcase";
import SoulfulHealing from "./SoulfulHealing";
import RomanticRhythms from "./RomanticRhythms";
import MusicComponent from "./MusicComponent";
import SignOption from "./SignOption";
import DetailPage from "./DetailPage";
import SignIn from "./SignIn";
import Loading from "./Loading";
import MusicPreferences from "./MusicPreferences";
import TryPremium from "./TryPremium";
import PlayBackError from "./PlayBackError";
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
import CustomPlayIcon from "./CustomPlayIcon";
import CustomShareIcon from "./CustomShareIcon";
import CustomChevronRightIcon from "./CustomChevronRightIcon";
import CustomLikeIcon from "./CustomLikeIcon";
import { Container, Slider } from "@mui/material";
import ShareSong from "./ShareSong";
import MyPlaylists from "./MyPlaylists";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
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
               deleteSearchRes,
               setSearchSeenResults,
               state,
               state1,
               state2,
               dispatch,
               dispatch1,
               dispatch2,
               divRef }){
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
    let [loading, setLoading] = useState(true);
    const location = useLocation();

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



    async function fetchTrendingPlaylists() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/album?limit=${limit}`,
            {
              headers: {
                projectId: "me4h9cfxcu8g",
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
                projectId: "me4h9cfxcu8g",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          
          setSongLists(data.data);
          console.log("trendSongggggggggggg");
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
                projectId: "me4h9cfxcu8g",
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
                projectId: "me4h9cfxcu8g",
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
                projectId: "me4h9cfxcu8g",
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
                projectId: "me4h9cfxcu8g",
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
                projectId: "me4h9cfxcu8g",
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


    useEffect(()=>{
      async function fetchData() {
        try {
          await Promise.all([
            fetchTrendingPlaylists(),
            fetchTrendingSongs(),
            fetchArtistLists(),
            fetchHappySongs(),
            fetchNewRelease(),
            fetchSadSongs(),
            fetchRomanticSongs(),
          ]);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      }
      fetchData();
          // fetchTrendingPlaylists();
          // fetchTrendingSongs();
          // fetchArtistLists();
          // fetchHappySongs();
          // fetchNewRelease();
          // fetchSadSongs();
          // fetchRomanticSongs();
          // console.log("hello");
          // console.log(selectleft);
          // console.log(selectright);

      if (location.pathname === "/"){
        setShowTrendingPlaylists(true);
        setShowTrendingSongs(true);
        setShowArtists(true);
        setShowHappySongs(true);
        setShowNewRelease(true);
        setShowSadSongs(true);
        setShowRomanticSongs(true);
        fetchData();
      }
      console.log(location.pathname)
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
        if (location.pathname === "/"){
          setLimit(20)
        }
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
      // setOptions(false)
      //   if (identifier === "trendingPlaylists") {
      //       setShowTrendingPlaylists(true);
      //       setShowTrendingSongs(false);
      //       setShowArtists(false);
      //       setShowHappySongs(false);
      //       setShowNewRelease(false);
      //       setShowSadSongs(false);
      //       setShowRomanticSongs(false);
      //   } else if (identifier === "trendingSongs") {
      //       setShowTrendingPlaylists(false);
      //       setShowTrendingSongs(true);
      //       setShowArtists(false);
      //       setShowHappySongs(false);
      //       setShowNewRelease(false);
      //       setShowSadSongs(false);
      //       setShowRomanticSongs(false);
      //   } else if (identifier=== "artistlists") {
      //       setShowTrendingPlaylists(false);
      //       setShowTrendingSongs(false);
      //       setShowArtists(true);
      //       setShowHappySongs(false);
      //       setShowNewRelease(false);
      //       setShowSadSongs(false);
      //       setShowRomanticSongs(false);
      //   } else if (identifier=== "happySongs") {
      //       setShowTrendingPlaylists(false);
      //       setShowTrendingSongs(false);
      //       setShowArtists(false);
      //       setShowHappySongs(true);
      //       setShowNewRelease(false);
      //       setShowSadSongs(false);
      //       setShowRomanticSongs(false);
      //   } else if (identifier=== "newRelease") {
      //       setShowTrendingPlaylists(false);
      //       setShowTrendingSongs(false);
      //       setShowArtists(false);
      //       setShowHappySongs(false);
      //       setShowNewRelease(true);
      //       setShowSadSongs(false);
      //       setShowRomanticSongs(false);
      //   } else if (identifier=== "sadSongs") {
      //       setShowTrendingPlaylists(false);
      //       setShowTrendingSongs(false);
      //       setShowArtists(false);
      //       setShowHappySongs(false);
      //       setShowNewRelease(false);
      //       setShowSadSongs(true);
      //       setShowRomanticSongs(false);
      //   }
      //   else {
      //       setShowTrendingPlaylists(false);
      //       setShowTrendingSongs(false);
      //       setShowArtists(false);
      //       setShowHappySongs(false);
      //       setShowNewRelease(false);
      //       setShowSadSongs(false);
      //       setShowRomanticSongs(true);
      //   }
      //   setLimit((prevLimit)=> prevLimit+20);
      //   setSelectAll(true);
      //   function handleScroll() {
      //       // if (
      //       //   containerRef.current &&
      //       //   containerRef.current.scrollTop + containerRef.current.clientHeight >=
      //       //     containerRef.current.scrollHeight
      //       // ) {
      //         setLimit((prevLimit) => prevLimit + 12);
      //       // }
      //     }
      //     window.addEventListener("scroll", handleScroll);
        
      //     return () => {
      //       window.removeEventListener("scroll", handleScroll);
      //     }; 
    }

    if (loading) {
      return (
        <div className="Main-section">
          <Loading />
        </div>
      );
    }
    

    return (
        <div className="Main-section">
            <div className="categories"></div>
            {/* <SignIn /> */}
            {/* <Router>
      <Routes>
        <Route path="/music/album/:albumId" element={<DetailPage state1={state1} dispatch1={dispatch1} state={state} dispatch={dispatch} />}></Route>  
      </Routes>
      </Router> */}
            {/* <MyPlaylists dispatch={dispatch} /> */}
            {state.openpremium && <TryPremium dispatch={dispatch} />}
            {state2.openmusicpref && <MusicPreferences dispatch2={dispatch2} />}
            {state2.opensignoption &&  <SignOption dispatch2={dispatch2} divRef={divRef} />}
            {/* {state1.detailpageopen && <DetailPage state1={state1} dispatch1={dispatch1} state={state} dispatch={dispatch} />} */}
            {/* {!state1.detailpageopen && openresults && opensuggestion && opensearch && <ShowResults result={result} state={state} dispatch={dispatch} dispatch1={dispatch1} />} */}
            {/* {opensuggestion && !openresults && opensearch && <Suggestions 
                              filteredSuggestions={filteredSuggestions} 
                              setResults={setResults}
                              setOpenResults={setOpenResults}
                              searchTerm={searchTerm}
                              submit={submit}
                              setSubmit={setSubmit}
                              setSearchSeenResults={setSearchSeenResults}
                              searchseenresults={searchseenresults}  />} */}
            {/* {opensearch && !opensuggestion && !openresults && <SearchComponent 
                                                               handleSelectAll={handleSelectAll} 
                                                               setOpenSearch={setOpenSearch}
                                                               searchseenresults={searchseenresults}
                                                               deleteSearchRes={deleteSearchRes} />} */}
            {showTrendingPlaylists && <TrendingPlayLists playlists={playlists} 
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
                               state1={state1}
                               dispatch={dispatch}
                               dispatch1={dispatch1}
                               divRef={divRef} /> }
            {showTrendingSongs && <TrendingSongs songlists={songlists}
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["trendingSongs"]} 
                               selectright={selectright["trendingSongs"]} 
                               songContainerRef={songContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingSongs"
                               options={options}
                               state={state} 
                               state1={state1}
                               dispatch={dispatch}
                               dispatch1={dispatch1}
                               divRef={divRef} /> }
            {showartists && <ArtistShowcase artistlists={artistlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["artistlists"]} 
                               selectright={selectright["artistlists"]} 
                               artistContainerRef={artistContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="artistlists"
                               options={options}
                               state={state} 
                               state1={state1}
                               dispatch={dispatch}
                               dispatch1={dispatch1}
                               divRef={divRef} /> }
            {showhappysongs && <HappyHarmonies happylists={happylists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               happySongContainerRef={happySongContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="happySongs"
                               options={options}
                               state={state} 
                               state1={state1}
                               dispatch={dispatch}
                               dispatch1={dispatch1}
                               divRef={divRef} />}
            {shownewrelease && <NewMusicShowcase newlists={newlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               newReleaseContainerRef={newReleaseContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="newRelease"
                               options={options}
                               state={state} 
                               state1={state1}
                               dispatch={dispatch}
                               dispatch1={dispatch1}
                               divRef={divRef} />}
            {showsadsongs && <SoulfulHealing sadlists={sadlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               sadSongContainerRef={sadSongContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="sadSongs"
                               options={options}
                               state={state} 
                               state1={state1}
                               dispatch={dispatch}
                               dispatch1={dispatch1}
                               divRef={divRef} />}
            {showromanticsongs && <RomanticRhythms romanticlists={romanticlists}
                               handleLeftIcon={handleLeftIcon}
                               handleRightIcon={handleRightIcon}
                               selectleft={selectleft}
                               selectright={selectright}
                               romanticContainerRef={romanticContainerRef}
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="romanticSongs"
                               options={options}
                               state={state} 
                               state1={state1}
                               dispatch={dispatch}
                               dispatch1={dispatch1}
                               divRef={divRef}/>}
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


// function SearchComponent({handleSelectAll, setOpenSearch, searchseenresults, deleteSearchRes}){
//   let storedResults = JSON.parse(localStorage.getItem('searchResults'))
//   return (
//     <div className="Search-Lists">
//       <div className="Search-Types">
//         {storedResults  && storedResults.length > 0 ? (
//           <div className="topresult">
//               <div>Search History</div>
//                   <ul className="res-list">
//                     <div className="x" onClick={deleteSearchRes}>
//                       <div className="x-btn">X</div>
//                     </div>
//                       {storedResults.map((res, idx)=> (
//                         <div key={idx} className="res-li">
//                           <li>{res}</li>
//                         </div>
//                       ))}
//                   </ul> 
//           </div>
//         ):    (<div className="topresult">
//           <div>No Search History</div>
//           </div>)}
//         <div className="Moods">Moods</div>
//           <ul className="mood-list">
//             <li className="box-1" onClick={() => {handleSelectAll("happySongs"); setOpenSearch(false);}}>Happy</li>
//             <li className="box-2" onClick={() => {handleSelectAll("newRelease"); setOpenSearch(false);}}>Fresh</li>
//             <li className="box-3" onClick={() => {handleSelectAll("sadSongs"); setOpenSearch(false);}}>Sad</li>
//             <li className="box-4" onClick={() => {handleSelectAll("romanticSongs"); setOpenSearch(false);}}>Romatic</li>
//           </ul>
//         <div className="Listen-Your-Way">Listen Your Way</div>
//           <ul className="Listen-list">
//             <li className="box-5" onClick={() => {handleSelectAll("trendingPlaylists"); setOpenSearch(false);}}>Trending Albums</li>
//             <li className="box-6" onClick={() => {handleSelectAll("trendingSongs"); setOpenSearch(false);}}>Trending Songs</li>
//           </ul>
//         <div className="Artists">Artists</div>
//           <ul className="Artists-list">
//             <li className="box-7" onClick={() => {handleSelectAll("artistlists"); setOpenSearch(false);}}>Artistic Collection</li>
//           </ul>
//       </div>
//     </div>
//   )
// }

// function Suggestions({filteredSuggestions, setResults, setOpenResults, searchTerm, submit, setSubmit, setSearchSeenResults, searchseenresults}) {
//   let existingResults = localStorage.getItem('searchResults');
//   let parsedResults = existingResults ? JSON.parse(existingResults) : [];

//   useEffect(()=>{
//     console.log(handleFunction("Rhythms"))
//   } )
//   function showres(suggestion) {
//     setResults(suggestion);
//     setOpenResults(true);
//     if (!suggestion.name){
//       localStorage.setItem(
//         'searchResults',
//         JSON.stringify([...parsedResults, suggestion.title])
//       );  
//     }
//     else {
//       localStorage.setItem(
//         'searchResults',
//         JSON.stringify([...parsedResults, suggestion.name])
//       );
//     }
//   }

//   function handleFunction(opt) {
//     // setSubmit(true);
//     // localStorage.setItem(
//     //   'searchResults',
//     //   JSON.stringify([...parsedResults, opt])
//     // );
//   }

//   return (
//     <div className="suggestions-list">
//       {filteredSuggestions.length === 0 && submit ? null : <div className="suggestions">Suggestions</div>}
//       {filteredSuggestions.length === 0 ? (
//         submit ? 
//           <div className="noresult">No Results Found "{searchTerm}"</div> 
//           : 
//           <ul className="sugg-list">
//             <li onClick={handleFunction("Happy Songs")}>Happy Songs</li>
//             <li onClick={handleFunction("New Songs")}>New Songs</li>
//             <li onClick={handleFunction("Podcasts")}>Podcasts</li>
//             <li onClick={handleFunction("Rhythms")}>Rhythms</li>
//           </ul>
//       ) : (
//         <ul className="sugg-list">
//           {filteredSuggestions.slice(0, 10).map((suggestion, index) => (
//             <li key={index} onClick={() => showres(suggestion)}>
//               {suggestion.title}
//             </li>
//           ))}
//           {filteredSuggestions.slice(0, 10).map((suggestion, index) => (
//             <li key={index} onClick={()=> showres(suggestion)}>{suggestion.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// function ShowResults({result, state, dispatch, dispatch1}) {
//   return (
//     <div className="showresult">
//       {!result.name ? <div className="result">Search results for "{result.title}"</div> : <div className="result">Search results for "{result.name}"</div> }
//       <div className="result">Songs</div>
//       {!result.name ? 
//       (
//       <div className="collections" key={0}>
//                     <div className="image-container">
//                     <img className="imgtab" src={result.thumbnail} alt={result.title}></img>
//                     <div className="icon-container">
//                         <ActionAddIcon />
//                         <div onClick={()=> {if (result.audio_url) {dispatch({type : "playandpause", 
//                                             songTitle : result.title, 
//                                             songImg : result.thumbnail, 
//                                             songName : result.artist[0].name, 
//                                             id : result._id,
//                                             songAudio : result.audio_url,
//                                             }) } 
//                                             else {dispatch({ type: "error" })}}} 
//                                              className="play-container">
//                          {state.playing && state.id === result._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
//                         </div>
//                         <ActionMoreIcon />
//                     </div>
//                     {state.playing && state.id === result._id ?
//                     <div className="rythm-container">
//                         <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "40px", height: "40px"}}></img>
//                     </div> :  null} 
//                     </div>
//                     <div className="link-container">
//                         <span className="link">{result.title}</span>
//                     </div> 
//                     <div className="content-container">
//                         {/* <span className="content">{song.artist[0].name}</span> */}
//                           {result.artist.map((artist, idx) => (
//                             <span className="content" key={idx}>
//                             {artist.name}
//                             {idx < result.artist.length - 1 ? ', ' : ''}
//                             </span>
//                         ))}
//                     </div>
//                 </div>) :
//       (              <div className="collections" key={0}>
//       <div className="image-container">
//       <img className="imgtab" src={result.image} alt={result.name}></img>
//       <div className="icon-container">
//       <div onClick={()=> dispatch1({type : "playingall", 
//                                             infotitle : result.name, 
//                                             infoimg : result.image, 
//                                             infodes : result.description, 
//                                             infoid : result._id,
//                                             infocount : result.songs.length,
//                                             })} 
//                                              className="play-container">
//                         {/* {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />} */}
//                         <CustomChevronRightIcon style={{ fontSize: '40px'}}/>
//                         </div>
//       </div> 
//       </div>
//       <div className="link-container">
//           <span className="link">{result.name}</span>
//       </div> 
//       <div className="content-container">
//           <span className="content">{result.description}</span>
//       </div>
//   </div>)  
// }    
//     </div>
//   )
// }


export default Main;