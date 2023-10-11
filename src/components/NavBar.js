import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import HomeIcon from './HomeIcon';
import PodcastIcon from "./PodcastIcon";
import MyMusicIcon from "./MyMusicIcon";
import ProfileIcon from "./ProfileIcon";
import SearchIcon from "./SearchIcon";
import Search from "./Search";
import ChevronCaretdownIcon from "./ChevronCaretdownIcon";

function NavBar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return (
        <div id="Navbar">
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
            <div className="right-icons">
                <ul className="right-lists">
                <form>
                  {isMobile ? (
                  <div className="search-container">
                    <Search style={{ color: 'white' }}/>
                  </div>
                  ) : (
                  <div className="search-container">
                    <img className="icon" src="https://th.bing.com/th/id/OIP.6TcG8ShE1aAy3WyR4C3EoQAAAA?pid=ImgDet&rs=1" alt="Search Icon" />
                    <input className="search" type="search" placeholder="Search" />
                  </div>
                  )}
                </form>
                    <div className="user-icon">
                        <li><ProfileIcon color="inherit"/></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;