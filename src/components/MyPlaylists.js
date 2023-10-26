import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import ActionAddIcon from "./ActionAddIcon";
import TryPremium from "./TryPremium";


function MyPlaylists({state, dispatch, loggedin}){
    return (
    <div className="myplay">
        {state.openpremium && <TryPremium dispatch={dispatch} loggedin={loggedin} />}
        <div className="create">
            <h1>PlayLists</h1>
            <div className="createicon" onClick={()=> dispatch({type : "showpremium"})}>
                <ActionAddIcon />
                <nav>Create Playlists</nav>
            </div>
        </div>
            <div className="playli">
                <p>You have not added any music yet</p>
                <span>Add songs you like and they will show up here</span>
            </div>         
    </div>

    )
}

export default MyPlaylists;