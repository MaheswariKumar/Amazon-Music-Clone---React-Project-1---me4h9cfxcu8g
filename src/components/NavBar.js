import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import HomeIcon from './HomeIcon';
import PodcastIcon from "./PodcastIcon";
import MyMusicIcon from "./MyMusicIcon";
import ProfileIcon from "./ProfileIcon";
import SearchIcon from "./SearchIcon";
import Search from "./Search";
import ChevronCaretdownIcon from "./ChevronCaretdownIcon";

function NavBar({searching, handleSearchChange, searchTerm, handleSearchSubmit, opensearch, setSubmit, dispatch2}){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [clickedInside, setClickedInside] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
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

      document.addEventListener('click', handleClick);

      return () => {
          document.removeEventListener('click', handleClick);
      };
  }, []);

    
    return (
        <div id="Navbar">
          {/* {!isMobile && !opensearch ?  */}
            <div className="left-icons">
                <ul className="left-lists">
                    <div className="logo-div">
                        <img className="logo" src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg"></img>
                    </div>
                    <div className="home-div">
                        <li><HomeIcon color="inherit"/></li>
                        <li>HOME</li>
                    </div>
                    <div className="pod-div">
                        <li><PodcastIcon color="inherit"/></li>
                        <li>PODCASTS</li>
                    </div>
                    <div className="lib-div">
                        <li><MyMusicIcon color="inherit"/></li>
                        <li>LIBRARY</li>
                        <li><ChevronCaretdownIcon color="inherit"/></li>
                    </div>
                </ul>
            </div> 
            {/* : null } */}
            <div className="right-icons">
                <ul className="right-lists">
                  {isMobile ? (
                    <form onSubmit={handleSearchSubmit}>
                  <div className={opensearch ? "search-container-1" : "search-container"} onClick={searching}>
                    {!opensearch ? <Search style={{ color: 'white' }}/> : null}
                    {opensearch ? <input className="search" type="search" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />: null}
                    {opensearch ? (<button className="cancel">X</button>) : null }
                    {opensearch ? (<div className="icon-1">
                      <div className="search-icon-1">
                        <Search style={{ color: 'black'}}/>
                      </div>
                    </div>) : null}
                  </div>
                  </form>
                  ) : (
                    <form onSubmit={handleSearchSubmit}>
                  <div className={clickedInside ? "search-container-1" : "search-container"} onClick={searching}>
                    {/* <img className="icon" src="https://th.bing.com/th/id/OIP.6TcG8ShE1aAy3WyR4C3EoQAAAA?pid=ImgDet&rs=1" alt="Search Icon" /> */}
                    <input ref={inputRef} className="search" 
                                          type="search" 
                                          placeholder="Search" 
                                          value={searchTerm} 
                                          onChange={handleSearchChange} />
                    {clickedInside ? (<button className="cancel">X</button>) : null }
                    <div className={clickedInside ? "icon-1" : "icon"}>
                      <div className={clickedInside ? "search-icon-1" : "search-icon"}>
                        <Search style={{ color: 'black'}}/>
                      </div>
                    </div>
                  </div>
                  </form>
                  )}
                    <div className="user-icon" onClick={()=> dispatch2({type : "signoption"})}>
                        <li><ProfileIcon color="inherit"/></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;