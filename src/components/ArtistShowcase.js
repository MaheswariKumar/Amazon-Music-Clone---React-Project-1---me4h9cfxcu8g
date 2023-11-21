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

function ArtistShowcase({
  artistlists,
  handleLeftIcon,
  handleRightIcon,
  selectleft,
  selectright,
  artistContainerRef,
  handleSelectAll,
  selectall,
  identifier,
  options,
  state,
  state1,
  dispatch,
  dispatch1,
  divRef,
}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIconColorleft = () => {
    if (screenWidth <= 1064) {
      return "white";
    } else {
      return `${selectleft}`;
    }
  };

  const getIconColorright = () => {
    if (screenWidth <= 1064) {
      return "white";
    } else {
      return `${selectright}`;
    }
  };
  return (
    <div className="feature">
      <div className="headertab">
        <div className="header">
          <h2>Artist Showcase</h2>
        </div>
        <div className="options">
          <div onClick={() => handleLeftIcon(identifier)}>
            <ChevronCaretLeftIcon
              style={{ fontSize: "20px", color: getIconColorleft() }}
            />
          </div>
          <div onClick={() => handleRightIcon(identifier)}>
            <ChevronCaretrightIcon
              style={{ fontSize: "20px", color: getIconColorright() }}
            />
          </div>
        </div>
        <Link to="/artistsCollections">
          {options ? (
            <div className="alloptions">
              <span className="all">SEE ALL</span>
            </div>
          ) : null}
        </Link>
      </div>
      <div
        className={selectall ? "wrapper-all" : "wrapper"}
        ref={artistContainerRef}
      >
        {artistlists.map((song, idx) => (
          <div
            className={selectall ? "collections-all" : "collections"}
            key={idx}
          >
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
  );
}

export default ArtistShowcase;