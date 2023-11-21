import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  Component,
} from "react";
import { Link } from "react-router-dom";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import CustomChevronRightIcon from "./CustomChevronRightIcon";
import Loading from "./Loading";

function ArtistsSeeAll({ state, state1, dispatch, dispatch1, divRef }) {
  let [playlists, setPlayLists] = useState([]);
  let [limit, setLimit] = useState(100);
  let containerRef = useRef(null);
  let [loading, setLoading] = useState(true);

  async function fetchTrendingPlaylists() {
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
      setPlayLists((prevData) => [...prevData, ...data.data]);
    } catch (error) {
      console.error("Error fetching trending playlists:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([fetchTrendingPlaylists()]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Main-section" ref={containerRef}>
      {state.openshare && <ShareSong dispatch={dispatch} state={state} />}
      {state.openpremium && <TryPremium dispatch={dispatch} />}
      <div className="categories"></div>
      <div className="feature">
        <div className="headertab">
          <div className="header">
            <h2>Artist Showcase</h2>
          </div>
        </div>
        <div className="wrapper-all">
          {playlists.map((song, idx) => (
            <div className="collections-all" key={idx}>
              <div className="image-container">
                <img className="imgtab" src={song.image} alt={song.name}></img>
                <div className="icon-container">
                  <Link className="path-pref" to={`/playlists/${song._id}`}>
                    <div
                      onClick={() =>
                        dispatch1({
                          type: "playingall",
                          infotitle: song.name,
                          infoimg: song.image,
                          infodes: song.description,
                          infoid: song._id,
                          infocount: song.songs.length,
                          infotype: "Artists",
                        })
                      }
                      className="play-container"
                    >
                      {/* {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />} */}
                      <CustomChevronRightIcon style={{ fontSize: "40px" }} />
                    </div>
                  </Link>
                </div>
              </div>
              <Link className="path-pref" to={`/playlists/${song._id}`}>
                <div
                  onClick={() =>
                    dispatch1({
                      type: "playingall",
                      infotitle: song.name,
                      infoimg: song.image,
                      infodes: song.description,
                      infoid: song._id,
                      infocount: song.songs.length,
                      infotype: "Artists",
                    })
                  }
                  className="link-container"
                >
                  <span className="link">{song.name}</span>
                </div>
              </Link>
              <div className="content-container">
                <span className="content">{song.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistsSeeAll;