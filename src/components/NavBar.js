import React from "react";
import HomeIcon from './HomeIcon';
import PodcastIcon from "./PodcastIcon";
import MyMusicIcon from "./MyMusicIcon";
import ProfileIcon from "./ProfileIcon";
import SearchIcon from "./SearchIcon";
import ChevronCaretdownIcon from "./ChevronCaretdownIcon";

function NavBar(){
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
                        <div className="search-container">
                            <span class="fa fa-search"></span>
                            <input className="search" type="search" placeholder="Search"></input>
                            {/* <i><SearchIcon color="inherit"/></i> */}
                        </div>
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