import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  Component,
} from "react";
import { useLocation } from "react-router-dom";
import TrendingPlayLists from "./TrendingPlayLists";
import TrendingSongs from "./TrendingSongs";
import ArtistShowcase from "./ArtistShowcase";
import HappyHarmonies from "./HappyHarmonies";
import NewMusicShowcase from "./NewMusicShowcase";
import SoulfulHealing from "./SoulfulHealing";
import RomanticRhythms from "./RomanticRhythms";
import MusicComponent from "./MusicComponent";
import Loading from "./Loading";
import PlayBackError from "./PlayBackError";
import LoginMsg from "./LoginMsg";

function Main({
  opensearch,
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
  divRef,
  loggedin,
  favoriteSongs,
  addToFavorites,
  setLoggedIn,
}) {
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
    } catch (error) {
      console.error("Error fetching artist lists:", error);
    }
  }

  useEffect(() => {
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

    if (location.pathname === "/") {
      setShowTrendingPlaylists(true);
      setShowTrendingSongs(true);
      setShowArtists(true);
      setShowHappySongs(true);
      setShowNewRelease(true);
      setShowSadSongs(true);
      setShowRomanticSongs(true);
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (state.showerrorcomp) {
      const errorTimeout = setTimeout(() => {
        dispatch({ type: "error" });
      }, 1000);

      return () => {
        clearTimeout(errorTimeout);
      };
    }
  }, [state.showerrorcomp, dispatch]);

  useEffect(() => {
    if (state.showloginmsg) {
      const errorTimeout = setTimeout(() => {
        dispatch({ type: "showloginmsg" });
      }, 2000);

      return () => {
        clearTimeout(errorTimeout);
      };
    }
  }, [state.showloginmsg, dispatch]);

  function handleLeftIcon(identifier) {
    const container =
      identifier === "trendingPlaylists"
        ? containerRef
        : identifier === "trendingSongs"
        ? songContainerRef
        : identifier === "artistlists"
        ? artistContainerRef
        : identifier === "happySongs"
        ? happySongContainerRef
        : identifier === "newRelease"
        ? newReleaseContainerRef
        : identifier === "sadSongs"
        ? sadSongContainerRef
        : romanticContainerRef;

    if (container.current) {
      container.current.scrollLeft -= 1000;
    }

    if (container.current.scrollLeft > 0) {
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
    const container =
      identifier === "trendingPlaylists"
        ? containerRef
        : identifier === "trendingSongs"
        ? songContainerRef
        : identifier === "artistlists"
        ? artistContainerRef
        : identifier === "happySongs"
        ? happySongContainerRef
        : identifier === "newRelease"
        ? newReleaseContainerRef
        : identifier === "sadSongs"
        ? sadSongContainerRef
        : romanticContainerRef;

    if (container.current.scrollLeft === 0) {
      container.current.scrollLeft += 1000;
    }

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

  function handleSelectAll(identifier) {}

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
      {showTrendingPlaylists && (
        <TrendingPlayLists
          playlists={playlists}
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
          loggedin={loggedin}
          favoriteSongs={favoriteSongs}
          addToFavorites={addToFavorites}
          divRef={divRef}
        />
      )}
      {showTrendingSongs && (
        <TrendingSongs
          songlists={songlists}
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
          loggedin={loggedin}
          favoriteSongs={favoriteSongs}
          addToFavorites={addToFavorites}
          divRef={divRef}
        />
      )}
      {showartists && (
        <ArtistShowcase
          artistlists={artistlists}
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
          divRef={divRef}
        />
      )}
      {showhappysongs && (
        <HappyHarmonies
          happylists={happylists}
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
          loggedin={loggedin}
          favoriteSongs={favoriteSongs}
          addToFavorites={addToFavorites}
          divRef={divRef}
        />
      )}
      {shownewrelease && (
        <NewMusicShowcase
          newlists={newlists}
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
          loggedin={loggedin}
          favoriteSongs={favoriteSongs}
          addToFavorites={addToFavorites}
          divRef={divRef}
        />
      )}
      {showsadsongs && (
        <SoulfulHealing
          sadlists={sadlists}
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
          loggedin={loggedin}
          favoriteSongs={favoriteSongs}
          addToFavorites={addToFavorites}
          divRef={divRef}
        />
      )}
      {showromanticsongs && (
        <RomanticRhythms
          romanticlists={romanticlists}
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
          loggedin={loggedin}
          favoriteSongs={favoriteSongs}
          addToFavorites={addToFavorites}
          divRef={divRef}
        />
      )}
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
      {state.showerrorcomp && (
        <PlayBackError state={state} dispatch={dispatch} />
      )}
      {state.showloginmsg && <LoginMsg />}
    </div>
  );
}

export default Main;