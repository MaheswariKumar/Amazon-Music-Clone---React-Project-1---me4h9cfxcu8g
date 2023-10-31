import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import ActionAddIcon from "./ActionAddIcon";
import TryPremium from "./TryPremium";
import Options from "./Options";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import CustomDoneIcon from "./CustomDoneIcon";


function MyPlaylists({state, dispatch, loggedin, dispatch1, state1, favoriteSongs, setFavoriteSongs, mylist, setMylist}){
    // const token = localStorage.getItem('token');
    // const addToFavorites = async (songId) => {
    //     try {
    //       const url = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
    //       const response = await fetch(url, {
    //         method: 'PATCH',
    //         headers: {
    //           'Authorization': `Bearer ${token}`,
    //           'projectID': "me4h9cfxcu8g",
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ "songId": songId })
    //       });
      
    //       const data = await response.json();
    //       console.log(data);
    //       console.log(data.data.songs);
    //       const updatedList = mylist.filter((item) => item._id !== songId);
    //       setMylist(updatedList);
    //     //   if (favoriteSongs.includes(state1.playsongid)) {
    //     //     // dispatch({type: "removesong", removesongid: (state1.removesongid.filter((id) => id !== songId)) })
    //     //     setFavoriteSongs(favoriteSongs.filter((id) => id !== state1.playsongid)); 
    //     //   } else {
    //     //     // dispatch({type: "removesong", removesongid: [...state1.removesongid, songId]})
    //     //     setFavoriteSongs([...favoriteSongs, state1.playsongid]);
    //     //   }
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };

    const token = localStorage.getItem('token');
      const fetchFavorites = async () => {
        try {
          const url = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'projectID': 'me4h9cfxcu8g',
              'Content-Type': 'application/json'
            }
          });
    
          const data = await response.json();
          console.log(data);
          if (data && data.data && data.data.songs) {
            setMylist(data.data.songs);
          }
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      };

      useEffect(()=>{
        // addToFavorites(state1.playsongid)
        fetchFavorites();
        console.log(mylist)
      }, [])
      
    return (
    <div className="myplay">
        {state.openpremium && <TryPremium dispatch={dispatch} loggedin={loggedin} />}
        <div className="create">
            <h1>PlayLists</h1>
           {!loggedin ? <div className="createicon" onClick={()=> dispatch({type : "showpremium"})}>
                <ActionAddIcon />
                <nav>Create Playlists</nav>
            </div> : null }
        </div>
        {!loggedin ?
            (<div className="playli">
                <p>You have not added any music yet</p>
                <span>Add songs you like and they will show up here</span>
            </div>)

        : mylist.length <= 0 ?
        (<div className="playli">
        <p>You have not added any music yet</p>
        <span>Add songs you like and they will show up here</span>
    </div>) :
            (<div className="playlist">
        {mylist.map((li, idx)=> (
          <div key={idx} className="all-list">
            <div className="play-half1">
            <p>{idx+1}</p>
            {state1.showoption && state1.musicidx === li._id  && <Options divRef={divRef} state1={state1} dispatch={dispatch} dispatch1={dispatch1} />} 
            <div className="play-img-container">
              <img className="play-img" src={li.thumbnail}></img>
              <div onClick={()=> {if (li.audio_url) {dispatch({type : "playandpause", 
                                              songTitle : li.title, 
                                              songImg : li.thumbnail, 
                                              songName : li.mood, 
                                              id : li._id,
                                              songAudio : li.audio_url, 
                                              }) } 
                                              else {dispatch({ type: "error" })}}} 
                                               className="play-icon">
                    {state.playing && state.id === li._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
              </div>
              {state.playing && state.id === li._id ?               
                <div className="rythm-container-1">
                  <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "30px", height: "30px"}}></img>
                </div> 
                :  null}
            </div>
            <div className="play-info">
              <nav className="play-name">{li.title}</nav>
              <nav className="play-item">{li.mood}</nav>
            </div>
            </div>
            <div className="play-half2">
            <nav className="play-art">{li.title}</nav>
            {/* <nav className="play-time">{formatTime(durations[idx])}</nav> */}
            {/* <div onClick={()=> dispatch({type : "showpremium"})}>
              <ActionAddIcon style={{ color: 'white' }}/>
              </div> */}
              <div onClick={()=> dispatch1({type : "addplaylist", playsongid: li._id})}>
                <CustomDoneIcon style={{ color: 'white' }} />
              </div>
            </div>             
          </div>
          )) }   
        </div>)
        }    
    </div>

    )
}

export default MyPlaylists;