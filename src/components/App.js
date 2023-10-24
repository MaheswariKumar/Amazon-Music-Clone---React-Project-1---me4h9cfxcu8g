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
// import Logo from "./Logo";
// import Home from "./Home";
// import Podcasts from "./Podcasts";
// import Library from "./Library";
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

// {/* <Route path="/products/:id" element={<SingleProduct />} /> */}

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
  const apiEndpoint = "https://academics.newtonschool.co/api/v1/music/song";
  const apiEndpointArtist =
    "https://academics.newtonschool.co/api/v1/music/artist";

  let initialState = {
    // playlists: Array(100).fill().map(() => ({
    //   play: true,
    // })),
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
  };

  function reducer(state, action) {
    switch (action.type) {
      case "playandpause":
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
        return {
          ...state,
          showmusiccomp: true,
          title: action.songTitle,
          img: action.songImg,
          name: action.songName,
          audio: action.songAudio,
          playingIndex: action.playingIndex,
          // playAudio : action.songPlay,
          // playId : action.playIdx,
          playing: !state.playing,
          // index : action.idex,
          id: action.id,
        };
      case "error":
        return {
          ...state,
          showerrorcomp: !state.showerrorcomp,
        };

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

      default:
        return state1;
    }
  }

  const [state1, dispatch1] = useReducer(reducer1, initialState1);

  let initialState2 = {
    opensignoption: false,
    openmusicpref: false,
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
      // setSearchSeenResults(updatedResults);
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

      setFilteredSuggestions(...[data.data]); // Update the song list state with the fetched data
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
    // Fetch the song list when the search term changes
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

  useEffect(() => {
    console.log(state2.opensignoption);
  });

  return (
    // <Router>
    //   <div id="main">
    //     <NavBar />
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">logo</Link>
    //         </li>
    //         <li>
    //           <Link to="/home">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/podcasts">Podcasts</Link>
    //         </li>
    //         <li>
    //           <Link to="/library">Library</Link>
    //         </li>
    //       </ul>
    //     </nav>

    // <Routes>
    //   <Route path="/" element={<Logo />}/>
    //   <Route path="/home" element={<Home />}/>
    //   <Route path="/podcasts" element={<Podcasts />}/>
    //   <Route path="/library" element={<Library />}/>
    // </Routes>
    //   </div>
    // </Router>

    <div id="main">
      {/* <Subscription /> */}
      {/* <SearchComponent 
                handleSelectAll={handleSelectAll} 
                setOpenSearch={setOpenSearch}
                searchseenresults={searchseenresults}
                deleteSearchRes={deleteSearchRes} /> */}
      {/* <BrowserRouter> */}
      {/* <NavBar searching={searching} 
              handleSearchChange={handleSearchChange} 
              searchTerm={searchTerm} 
              handleSearchSubmit={handleSearchSubmit}
              opensearch={opensearch}
              setSubmit={setSubmit}
              dispatch2={dispatch2} /> */}
      {/* <Loading /> */}
      {/* <Podcast /> */}
      {/* <SignIn />  */}
      {/* <Register /> */}
      {/* <SeeAll state={state}
            state1={state1}
            dispatch={dispatch}
            dispatch1={dispatch1}
            divRef={divRef}/> */}
      {/* <Router> */}
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
                />
              </>
            }
          />
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
           exact path="/album/collections"
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
                    //  idex = {state.idex}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/songs/collections"
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
                    //  idex = {state.idex}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/artists/collections"
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
                    //  idex = {state.idex}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/songs/happytracks/collections"
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
                    //  idex = {state.idex}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/songs/newtracks/collections"
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
                    //  idex = {state.idex}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/songs/sadtracks/collections"
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
                    //  idex = {state.idex}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/songs/romantictracks/collections"
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
                    //  idex = {state.idex}
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
                    dispatch1={dispatch1}
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
                    //  idex = {state.idex}
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
                <MyPlaylists />
              </>
            }
          ></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      {/* </Router> */}
      {/* </BrowserRouter> */}
      {/* <NavBar searching={searching} 
              handleSearchChange={handleSearchChange} 
              searchTerm={searchTerm} 
              handleSearchSubmit={handleSearchSubmit}
              opensearch={opensearch}
              setSubmit={setSubmit}
              dispatch2={dispatch2} />
      <Main opensearch={opensearch} 
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
            state2={state2}
            dispatch2={dispatch2} /> */}
    </div>
  );
};

export default App;
