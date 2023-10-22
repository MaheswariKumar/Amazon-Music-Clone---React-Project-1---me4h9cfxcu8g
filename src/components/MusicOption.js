import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";

function MusicOption() {
    return (
        <div className="musicoption">
                <nav>Music</nav>
            <p className="border"></p>
            <nav>Podcasts</nav>
        </div>
    )
}

export default MusicOption;