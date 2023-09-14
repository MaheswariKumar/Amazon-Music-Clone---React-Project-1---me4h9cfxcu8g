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
                    <div><img className="logo" src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg"></img></div>
                    <li><HomeIcon color="inherit"/></li>
                    <li>HOME</li>
                    <li><PodcastIcon color="inherit"/></li>
                    <li>PODCASTS</li>
                    <li><MyMusicIcon color="inherit"/></li>
                    <li>LIBRARY</li>
                    <li><ChevronCaretdownIcon color="inherit"/></li>
                </ul>
            </div>
            <div className="right-icons">
                <ul className="right-lists">
                    <form>
                        <div className="search-container">
                            <input className="search" type="search" placeholder="Search"></input>
                            <SearchIcon color="inherit"/>
                        </div>
                    </form>
                    <li className="user-icon"><ProfileIcon color="inherit"/></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;