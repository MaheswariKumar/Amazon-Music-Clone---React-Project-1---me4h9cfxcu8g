import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function MyProfile({state2}) {
    useEffect(()=>{
        console.log(state2.username)
    })
    
    return (
        <div className="Main-section">
            <div className="categories"></div>
            <div className="profileback">
                <div className="imgprof">
                    <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._BG172,182,184_SS800_CR0,0,1024,1024_SX500__UX358_FMpng_QL85__UX358_FMpng_QL85_.png"></img>
                    <div className="userdetails">
                        <h1>{state2.username}</h1>
                        <div className="folowers">
                            <nav>0 Following</nav>
                            <nav>.0 Followers</nav>
                            <nav>.0 Playlists</nav>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProfile;