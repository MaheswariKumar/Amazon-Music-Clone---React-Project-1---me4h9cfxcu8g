import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function Options() {
    return (
        <div className="option">
            <nav>Go to Song</nav>
            <p className="border1"></p>
            <nav>Add to Queue</nav>
            <p className="border1"></p>
            <nav>Share this Song</nav>
        </div>
    )
}

export default Options;