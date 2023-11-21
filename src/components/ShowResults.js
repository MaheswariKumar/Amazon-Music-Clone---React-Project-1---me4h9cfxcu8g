import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  Component,
} from "react";
import { Link } from "react-router-dom";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import CustomChevronRightIcon from "./CustomChevronRightIcon";
import AddOptions from "./AddOptions";
import CustomDoneIcon from "./CustomDoneIcon";

function ShowResults({
  result,
  state,
  dispatch,
  state1,
  dispatch1,
  loggedin,
  favoriteSongs,
  addToFavorites,
  divRef,
}) {
  const token = localStorage.getItem("token");
  return (
    <div className="showresult">
      {!result.name ? (
        <div className="result">Search results for "{result.title}"</div>
      ) : (
        <div className="result">Search results for "{result.name}"</div>
      )}
      <div className="result">Songs</div>
      {!result.name ? (
        <div className="collections" key={0}>
          <div className="image-container">
            <img
              className="imgtab"
              src={result.thumbnail}
              alt={result.title}
            ></img>
            <div className="icon-container">
              {!loggedin ? (
                <div onClick={() => dispatch({ type: "showpremium" })}>
                  <ActionAddIcon style={{ color: "white" }} />
                </div>
              ) : (
                <div
                  onClick={() =>
                    addToFavorites(result._id, token, "me4h9cfxcu8g")
                  }
                >
                  {favoriteSongs.includes(result._id) ? (
                    <CustomDoneIcon style={{ color: "white" }} />
                  ) : (
                    <ActionAddIcon style={{ color: "white" }} />
                  )}
                </div>
              )}
              <div
                onClick={() => {
                  if (result.audio_url) {
                    dispatch({
                      type: "playandpause",
                      songTitle: result.title,
                      songImg: result.thumbnail,
                      songName: result.artist[0].name,
                      id: result._id,
                      songAudio: result.audio_url,
                    });
                  } else {
                    dispatch({ type: "error" });
                  }
                }}
                className="play-container"
              >
                {state.playing && state.id === result._id ? (
                  <MyCustomPauseIcon />
                ) : (
                  <PlaybackPlayIcon />
                )}
              </div>
              <div
                onClick={() => {
                  dispatch1({
                    type: "showingaddoption",
                    showaddoption: true,
                    optionidx: result._id,
                  });
                  dispatch1({
                    type: "playingall",
                    infotitle: result.title,
                    infoimg: result.thumbnail,
                    infodes: result.artist[0].description,
                    infoid: result._id,
                    infocount: 1,
                    infotype: "Songs",
                    infoaudio: result.audio_url,
                  });
                }}
              >
                <ActionMoreIcon style={{ color: "white" }} />
              </div>
            </div>
            {state1.showaddoption && state1.optionidx === result._id && (
              <AddOptions
                state1={state1}
                dispatch={dispatch}
                dispatch1={dispatch1}
                divRef={divRef}
              />
            )}
            {state.playing && state.id === result._id ? (
              <div className="rythm-container">
                <img
                  src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif"
                  alt="Rythm"
                  style={{ width: "40px", height: "40px" }}
                ></img>
              </div>
            ) : null}
          </div>
          <Link className="path-pref" to={`/playlists/${result._id}`}>
            <div
              className="link-container"
              onClick={() =>
                dispatch1({
                  type: "playingall",
                  infotitle: result.title,
                  infoimg: result.thumbnail,
                  infodes: result.artist[0].description,
                  infoid: result._id,
                  infocount: 1,
                  infotype: "Songs",
                  infoaudio: result.audio_url,
                })
              }
            >
              <span className="link">{result.title}</span>
            </div>
          </Link>
          <div className="content-container">
            {result.artist.map((artist, idx) => (
              <span className="content" key={idx}>
                {artist.name}
                {idx < result.artist.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="collections" key={0}>
          <div className="image-container">
            <img className="imgtab" src={result.image} alt={result.name}></img>
            <div className="icon-container">
              <Link className="path-pref" to={`/playlists/${result._id}`}>
                <div
                  onClick={() =>
                    dispatch1({
                      type: "playingall",
                      infotitle: result.name,
                      infoimg: result.image,
                      infodes: result.description,
                      infoid: result._id,
                      infocount: result.songs.length,
                      infotype: "Artists",
                    })
                  }
                  className="play-container"
                >
                  <CustomChevronRightIcon style={{ fontSize: "40px" }} />
                </div>
              </Link>
            </div>
          </div>
          <Link className="path-pref" to={`/playlists/${result._id}`}>
            <div
              className="link-container"
              onClick={() =>
                dispatch1({
                  type: "playingall",
                  infotitle: result.name,
                  infoimg: result.image,
                  infodes: result.description,
                  infoid: result._id,
                  infocount: result.songs.length,
                  infotype: "Artists",
                })
              }
            >
              <span className="link">{result.name}</span>
            </div>
          </Link>
          <div className="content-container">
            <span className="content">{result.description}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowResults;