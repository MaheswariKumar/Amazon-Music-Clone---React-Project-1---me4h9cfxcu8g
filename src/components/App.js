import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  Component,
} from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./NavBar";
import Main from "./Main";
import Loading from "./Loading";
import MusicComponent from "./MusicComponent";
import DetailPage from "./DetailPage";
import SearchComponent from "./SearchComponent";
import Suggestions from "./Suggestions";
import ShowResults from "./ShowResults";
import Podcast from "./Podcast";
import SignIn from "./SignIn";
import Register from "./Register";
import SeeAll from "./SeeAll";
import NoResults from "./NoResults";
import TrendingSeeAll from "./TrendingSeeAll";
import ArtistsSeeAll from "./ArtistsSeeAll";
import HappySeeAll from "./HappySeeAll";
import NewMusicSeeAll from "./NewMusicSeeAll";
import SadSongsSeeAll from "./SadSongsSeeAll";
import RomanticSongSeeAll from "./RomanticSongSeeAll";
import MyPlaylists from "./MyPlaylists";
import Subscription from "./Subscription";
import MyProfile from "./MyProfile";
import SignOption from "./SignOption";
import MusicPreferences from "./MusicPreferences";
import TryPremium from "./TryPremium";


const App = () => {
  let [opensearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [songList, setSongList] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([
    "happy",
    "sad",
    "newcollections",
  ]);
  let [openresults, setOpenResults] = useState(false);
  let [opensuggestion, setOpenSuggestion] = useState(false);
  let [submit, setSubmit] = useState(false);
  let [searchseenresults, setSearchSeenResults] = useState([]);
  let divRef = useRef(null);
  let [result, setResults] = useState("");
  const inputRef = useRef(null);
  let [loggedin, setLoggedIn] = useState(false);
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [mylist, setMylist] = useState([])
  const apiEndpoint = "https://academics.newtonschool.co/api/v1/music/song";
  const apiEndpointArtist =
    "https://academics.newtonschool.co/api/v1/music/artist";

  let initialState = {
    playing: false,
    showmusiccomp: false,
    showerrorcomp: false,
    title: "",
    img: "",
    name: "",
    audio: "",
    playAudio: false,
    playingIndex: -1,
    id: null,
    openpremium: false,
    openshare: false,
    shareimg: "",
    shareti: "",
    sharepath: "",
    showloginmsg : false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "playandpause":
        return {
          ...state,
          showmusiccomp: true,
          title: action.songTitle,
          img: action.songImg,
          name: action.songName,
          audio: action.songAudio,
          playingIndex: action.playingIndex,
          playing: !state.playing,
          id: action.id,
        };
      case "error":
        return {
          ...state,
          showerrorcomp: !state.showerrorcomp,
        };

      case "showloginmsg":
        return {
          ...state,
          showloginmsg: !state.showloginmsg,
        }

      case "showpremium":
        return {
          ...state,
          openpremium: !state.openpremium,
        };

      case "showsharesong":
        return {
          ...state,
          openshare: !state.openshare,
          shareimg: action.shareimg,
          shareti: action.shareti,
          sharepath: action.sharepath,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  let initialState1 = {
    detailpageopen: false,
    albumlist: [],
    infotitle: "",
    infodes: "",
    infoimg: "",
    infoid: "",
    infocount: "",
    infotype: "",
    infoaudio: "",
    showaddoption: false,
    optionidx: "",
    showoption: false,
    musicidx: "",
    playsongid: "",
    removesongid: ""
  };

  function reducer1(state1, action) {
    switch (action.type) {
      case "playingall":
        return {
          ...state1,
          detailpageopen: true,
          albumlist: action.albumlist,
          infotitle: action.infotitle,
          infodes: action.infodes,
          infoimg: action.infoimg,
          infoid: action.infoid,
          infocount: action.infocount,
          infotype: action.infotype,
          infoaudio: action.infoaudio,
        };

      case "showingaddoption":
        return {
          ...state1,
          showaddoption: action.showaddoption,
          optionidx: action.optionidx,
        };

      case "showingoption":
        return {
          ...state1,
          showoption: action.showoption,
          musicidx: action.musicidx,
        };

      case "addplaylist":
        return {
          ...state1,
          playsongid: action.playsongid,
        }

      case "removesong":
        return {
          ...state1,
          removesongid: action.playsongid,
        }

      default:
        return state1;
    }
  }

  const [state1, dispatch1] = useReducer(reducer1, initialState1);

  let initialState2 = {
    opensignoption: false,
    openmusicpref: false,
    username: "",

  };

  function reducer2(state2, action) {
    switch (action.type) {
      case "signoption":
        return {
          ...state2,
          opensignoption: action.opensignoption,
        };

      case "prefoption":
        return {
          ...state2,
          openmusicpref: !state2.openmusicpref,
        };

      case "setusername":
        return {
          ...state2,
          username: action.username,
        }

      default:
        return state2;
    }
  }

  const [state2, dispatch2] = useReducer(reducer2, initialState2);

  function searching() {
    setOpenSearch(true);
    setOpenSuggestion(false);
    setOpenResults(false);
    setSubmit(false);
  }

  function deleteSearchRes() {
    setSearchSeenResults([]);
    localStorage.removeItem("searchResults");
  }

  const handleSearchChange = (event) => {
    setOpenSuggestion(true);
    setSearchTerm(event.target.value);
    console.log(searchseenresults);

    // const filtered = songList.some((lst)=>{
    //   lst.filter((song) =>
    //   song.title.toLowerCase().includes(event.target.value.toLowerCase())
    // )
    //   lst.title.toLowerCase().includes(searchTerm.toLowerCase());
    // })
    const filtered = songList.filter((song) => {
      song.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // console.log(filtered)
    // const filtered = songList.filter((song) =>
    //   song.title.toLowerCase().includes(event.target.value.toLowerCase())
    // );

    // setFilteredSuggestions(filtered);
    console.log(filtered);
  };

  function handleValue() {
    setSearchTerm("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setOpenSearch(false);
      setOpenSuggestion(false);
      setOpenResults(false);
      setSubmit(true);
      inputRef.current.blur();
      let existingResults = localStorage.getItem("searchResults");
      let parsedResults = existingResults ? JSON.parse(existingResults) : [];
      localStorage.setItem(
        "searchResults",
        JSON.stringify([...parsedResults, searchTerm])
      );
      console.log("enter");
    }
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const fetchSongList = async () => {
    try {
      const response = await fetch(
        `${apiEndpoint}?search={"title":"${searchTerm}"}`,
        {
          headers: {
            projectID: "f104bi07c490",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSongList(data.data);
      console.log("data");
      console.log(data.data);
      console.log(Object.values(data.data));
      {
        data.data.map((suggestion, index) => console.log(suggestion.title));
      }

      setFilteredSuggestions(...[data.data]);
    } catch (error) {
      console.error("Error fetching song list:", error);
    }
  };

  const fetchArtistList = async () => {
    try {
      const response = await fetch(
        `${apiEndpointArtist}?search={"name":"${searchTerm}"}`,
        {
          headers: {
            projectID: "YOUR_PROJECT_ID",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFilteredSuggestions(...[data.data]);
    } catch (error) {
      console.error("Error fetching artist list:", error);
    }
  };

  useEffect(() => {
    fetchSongList();
    fetchArtistList();
    console.log("hi");
    console.log(submit);
    console.log(state2.opensignoption);
  }, [searchTerm]);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        dispatch2({ type: "signoption", opensignoption: false });
        dispatch1({ type: "showingaddoption", showaddoption: false });
        dispatch1({ type: "showingoption", showoption: false });
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };

    // console.log(state2.opensignoption)
  }, [dispatch2]);

  // useEffect(() => {
  //   console.log(state2.opensignoption);
  // });

  const token = localStorage.getItem('token');
  const addToFavorites = async (songId, jwtToken, projectId) => {
      try {
        const url = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'projectID': projectId,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "songId": songId })
        });
    
        const data = await response.json();
        console.log(data);
        console.log(data.data.songs);
        setMylist(data.data.songs);
        setFavoriteSongs(data.data.songs.map(item => item._id));
        // if (favoriteSongs.includes(state1.playsongid)) {
        //   // dispatch({type: "removesong", removesongid: (state1.removesongid.filter((id) => id !== songId)) })
        //   setFavoriteSongs(favoriteSongs.filter((id) => id !== state1.playsongid)); 
        // } else {
        //   // dispatch({type: "removesong", removesongid: [...state1.removesongid, songId]})
        //   setFavoriteSongs([...favoriteSongs, state1.playsongid]);
        // }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // const fetchFavorites = async () => {
    //   try {
    //     const url = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
    //     const response = await fetch(url, {
    //       method: 'GET',
    //       headers: {
    //         'Authorization': `Bearer ${token}`,
    //         'projectID': 'me4h9cfxcu8g',
    //         'Content-Type': 'application/json'
    //       }
    //     });
  
    //     const data = await response.json();
    //     console.log(data);
    //     if (data && data.data && data.data.songs) {
    //       setMylist(data.data.songs);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching favorites:', error);
    //   }
    // };

    useEffect(()=>{
      addToFavorites(state1.playsongid, token, "me4h9cfxcu8g")
      // fetchFavorites();
      console.log(state1.playsongid)
    }, [state1.playsongid])

  return (
    <div id="main">      
      {state2.opensignoption &&  <SignOption dispatch2={dispatch2} divRef={divRef} loggedin={loggedin} setLoggedIn={setLoggedIn} />}
      {state.openpremium && <TryPremium dispatch={dispatch} loggedin={loggedin} />}
      {state2.openmusicpref && <MusicPreferences dispatch2={dispatch2} />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <Main
                  opensearch={opensearch}
                  setOpenSearch={setOpenSearch}
                  filteredSuggestions={filteredSuggestions}
                  opensuggestion={opensuggestion}
                  openresults={openresults}
                  setOpenResults={setOpenResults}
                  searchTerm={searchTerm}
                  submit={submit}
                  setSubmit={setSubmit}
                  searchseenresults={searchseenresults}
                  setSearchSeenResults={setSearchSeenResults}
                  deleteSearchRes={deleteSearchRes}
                  state={state}
                  state1={state1}
                  state2={state2}
                  dispatch={dispatch}
                  dispatch1={dispatch1}
                  dispatch2={dispatch2}
                  divRef={divRef}
                  loggedin={loggedin}
                  setLoggedIn={setLoggedIn}
                />
              </>
            }
          />
        {/* <Route path="/playlists" element={<Podcast />}></Route> */}
            <Route
            path="/playlists/:Id"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <DetailPage
                  state1={state1}
                  dispatch1={dispatch1}
                  state={state}
                  dispatch={dispatch}
                  favoriteSongs={favoriteSongs}
                  setFavoriteSongs={setFavoriteSongs}
                  mylist={mylist}
                  setMylist={setMylist}
                  loggedin={loggedin}
                  divRef={divRef}
                />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                    //  idex = {state.idex}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/albumCollections"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <SeeAll
                  state={state}
                  state1={state1}
                  dispatch={dispatch}
                  dispatch1={dispatch1}
                  divRef={divRef}
                />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/songsCollections"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <TrendingSeeAll
                  state={state}
                  state1={state1}
                  dispatch={dispatch}
                  dispatch1={dispatch1}
                  divRef={divRef}
                />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/artistsCollections"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <ArtistsSeeAll
                  state={state}
                  state1={state1}
                  dispatch={dispatch}
                  dispatch1={dispatch1}
                  divRef={divRef}
                />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/happytracksCollections"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <HappySeeAll
                  state={state}
                  state1={state1}
                  dispatch={dispatch}
                  dispatch1={dispatch1}
                  divRef={divRef}
                />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/newtracksCollections"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <NewMusicSeeAll
                  state={state}
                  state1={state1}
                  dispatch={dispatch}
                  dispatch1={dispatch1}
                  divRef={divRef}
                />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/sadtracksCollections"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <SadSongsSeeAll
                  state={state}
                  state1={state1}
                  dispatch={dispatch}
                  dispatch1={dispatch1}
                  divRef={divRef}
                />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/romantictracksCollections"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <RomanticSongSeeAll
                  state={state}
                  state1={state1}
                  dispatch={dispatch}
                  dispatch1={dispatch1}
                  divRef={divRef}
                />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                {!opensuggestion && !openresults && opensearch && (
                  <SearchComponent
                    setOpenSearch={setOpenSearch}
                    searchseenresults={searchseenresults}
                    deleteSearchRes={deleteSearchRes}
                  />
                )}
                {opensuggestion && !openresults && (
                  <Suggestions
                    filteredSuggestions={filteredSuggestions}
                    setResults={setResults}
                    setOpenResults={setOpenResults}
                    searchTerm={searchTerm}
                    submit={submit}
                    setSubmit={setSubmit}
                    setSearchSeenResults={setSearchSeenResults}
                    searchseenresults={searchseenresults}
                  />
                )}
                {openresults && (
                  <ShowResults
                    result={result}
                    state={state}
                    dispatch={dispatch}
                    state1={state1}
                    dispatch1={dispatch1}
                    divRef={divRef}
                  />
                )}
                {submit && <NoResults searchTerm={searchTerm} />}
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route path="/podcasts" element={<Podcast />}></Route>
          <Route
            path="/myplaylists"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <MyPlaylists state={state} 
                             dispatch={dispatch} 
                             dispatch1={dispatch1} 
                             state1={state1}
                             favoriteSongs={favoriteSongs}
                             setFavoriteSongs={setFavoriteSongs}
                             mylist={mylist}
                             setMylist={setMylist}
                             addToFavorites={addToFavorites} 
                             loggedin={loggedin} />
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
          <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} dispatch={dispatch} dispatch2={dispatch2} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/subscribe" element={<Subscription />}></Route>
          <Route
            path="/myprofile"
            element={
              <>
                <NavBar
                  searching={searching}
                  handleSearchChange={handleSearchChange}
                  searchTerm={searchTerm}
                  handleSearchSubmit={handleSearchSubmit}
                  opensearch={opensearch}
                  setSubmit={setSubmit}
                  dispatch2={dispatch2}
                  handleValue={handleValue}
                  handleKeyPress={handleKeyPress}
                  inputRef={inputRef}
                />
                <MyProfile state2={state2}/>
                {state.showmusiccomp && (
                  <MusicComponent
                    state={state}
                    dispatch={dispatch}
                    songTitle={state.title}
                    songImg={state.img}
                    songName={state.name}
                    songAudio={state.audio}
                    songPlay={state.playAudio}
                    id={state.id}
                  />
                )}
              </>
            }
          ></Route>
        </Routes>
    </div>
  );
};

export default App;
