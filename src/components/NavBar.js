import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  Component,
} from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "./HomeIcon";
import PodcastIcon from "./PodcastIcon";
import MyMusicIcon from "./MyMusicIcon";
import ProfileIcon from "./ProfileIcon";
import Search from "./Search";
import ChevronCaretdownIcon from "./ChevronCaretdownIcon";

function NavBar({
  searching,
  handleSearchChange,
  searchTerm,
  handleSearchSubmit,
  inputRef,
  opensearch,
  setSubmit,
  dispatch2,
  handleValue,
  handleKeyPress,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [screen, setScreen] = useState(window.innerWidth <= 376);
  const [clickedInside, setClickedInside] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setScreen(window.innerWidth <= 376);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (inputRef.current && inputRef.current.contains(e.target)) {
        setClickedInside(true);
      } else {
        setClickedInside(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div id={screen && !clickedInside ? "Navbar-1" : "Navbar"}>
      <div
        className={isMobile && clickedInside ? "left-icons-1" : "left-icons"}
      >
        <ul className="left-lists">
          <div className="logo-div">
            <img
              className="logo"
              src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg"
            ></img>
          </div>
          <Link to="/">
            <div className={location.pathname === "/" ? "home-li" : "home-div"}>
              <li>
                <HomeIcon />
              </li>
              <li className="icon-li">HOME</li>
            </div>
          </Link>
          <Link className="pod-li" to="/podcasts">
            <div className="pod-div">
              <li>
                <PodcastIcon />
              </li>
              <li>PODCASTS</li>
            </div>
          </Link>
          <Link to="/myplaylists">
            <div
              className={
                location.pathname === "/myplaylists" ? "lib-li" : "lib-div"
              }
            >
              <li>
                <MyMusicIcon />
              </li>
              <li className="icon-li">LIBRARY</li>
              <li className="icon-li">
                <ChevronCaretdownIcon />
              </li>
            </div>
          </Link>
        </ul>
      </div>

      <div
        className={isMobile && clickedInside ? "right-icons-1" : "right-icons"}
      >
        <ul
          className={
            isMobile && clickedInside ? "right-lists-1" : "right-lists"
          }
        >
          {isMobile ? (
            <Link to="/search">
              <div
                className={
                  clickedInside ? "search-container-1" : "search-container"
                }
                onKeyPress={(event) => handleKeyPress(event)}
                onClick={searching}
              >
                {!clickedInside ? (
                  <div ref={inputRef}>
                    {" "}
                    <Search style={{ color: "white" }} />{" "}
                  </div>
                ) : null}
                {clickedInside ? (
                  <input
                    ref={inputRef}
                    className="search"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                ) : null}
                {clickedInside ? (
                  <button onClick={handleValue} className="cancel-1">
                    X
                  </button>
                ) : null}
                {clickedInside ? (
                  <div className="icon-2">
                    <div className="search-icon-1">
                      <Search style={{ color: "black" }} />
                    </div>
                  </div>
                ) : null}
              </div>
            </Link>
          ) : (
            <Link to="/search">
              <div
                className={
                  clickedInside ? "search-container-1" : "search-container"
                }
                onKeyPress={(event) => handleKeyPress(event)}
                onClick={searching}
              >
                <input
                  ref={inputRef}
                  className="search"
                  type="search"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {clickedInside ? (
                  <button onClick={handleValue} className="cancel">
                    X
                  </button>
                ) : null}
                <div className={clickedInside ? "icon-1" : "icon"}>
                  <div
                    className={clickedInside ? "search-icon-1" : "search-icon"}
                  >
                    <Search style={{ color: "black" }} />
                  </div>
                </div>
              </div>
            </Link>
          )}
          <div
            className={isMobile && clickedInside ? "user-icon-1" : "user-icon"}
            onClick={() =>
              dispatch2({ type: "signoption", opensignoption: true })
            }
          >
            <li>
              <ProfileIcon color="inherit" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;