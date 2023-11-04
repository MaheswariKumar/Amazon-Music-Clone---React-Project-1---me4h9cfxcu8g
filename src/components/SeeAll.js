import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import { Link } from "react-router-dom";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import MyCustomPauseIcon from "./MyCustomPauseIcon";
import AddOptions from "./AddOptions";
import Loading from "./Loading";
import ShareSong from "./ShareSong";
import TryPremium from "./TryPremium";
import PlayBackError from "./PlayBackError";
import CustomDoneIcon from "./CustomDoneIcon";

function SeeAll({
                state,
                state1,
                dispatch,
                dispatch1,
                loggedin,
                favoriteSongs,
                addToFavorites,
                divRef}) {

    let [playlists, setPlayLists] = useState([]);
    let [limit, setLimit] = useState(100);
    let containerRef = useRef(null);
    let [loading, setLoading] = useState(true);
    
    async function fetchTrendingPlaylists() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/album?limit=${limit}`,
            {
              headers: {
                projectId: "me4h9cfxcu8g",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setPlayLists((prevData)=> [...prevData, ...data.data]);
          // setLimit((prevLimit) => prevLimit + 12);
          console.log("trend");
          console.log(data.data);
          console.log(data.data[0]);
        } catch (error) {
          console.error("Error fetching trending playlists:", error);
        }
      }

      useEffect(() => {
        async function fetchData() {
          try {
            await Promise.all([
              fetchTrendingPlaylists()
            ]);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
          }
        }
        fetchData();
      }, []);
    
      // const handleScroll = () => {
      //   const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      //   if (scrollHeight - scrollTop === clientHeight) {
      //     setLimit((prevLimit) => prevLimit + 10); // Increase the limit when scrolled to the bottom
      //     fetchTrendingPlaylists();
      //   }
      // };

      // useEffect(() => {
      //   fetchTrendingPlaylists();
      //   window.addEventListener("scroll", handleScroll);
      //   return () => {
      //     window.removeEventListener("scroll", handleScroll);
      //   };
      // }, [limit]);
    
      // useEffect(() => {
      //   function handleScroll() {
      //     if (window.innerHeight + document.documentElement.scrollTop >=
      //       document.documentElement.offsetHeight){
      //         fetchTrendingPlaylists();
      //       }
      //     }
      //     window.addEventListener("scroll", handleScroll);
        
      //     return () => {
      //       window.removeEventListener("scroll", handleScroll);
      //     }; 
      // }, []);
      useEffect(() => {
        if (state.showerrorcomp) {
          const errorTimeout = setTimeout(() => {
            dispatch({ type: "error"});
          }, 1000);
    
          return () => {
            clearTimeout(errorTimeout);
          };
        }
      }, [state.showerrorcomp, dispatch]);

      const token = localStorage.getItem('token');

      if (loading) {
        return (
          // <div className="Main-section">
            <Loading />
          // </div>
        );
      }

  return (
    <div className="Main-section" ref={containerRef}>
      {state.showerrorcomp && <PlayBackError state={state} dispatch={dispatch}/>}
        {state.openshare && <ShareSong dispatch={dispatch} state={state} />}
        {state.openpremium && <TryPremium dispatch={dispatch} />}
      <div className="categories"></div>
    <div className="feature">
      <div className="headertab">
        <div className="header">
          <h2>Trending Playlists</h2>
        </div>
      </div>
      <div className="wrapper-all" >
        {playlists.map((song, idx) => (
          <div className="collections-all" key={idx}>
            <div className="image-container">
              <img className="imgtab" src={song.image} alt={song.title}></img>
              <div className="icon-container">
              {song.songs && song.songs[0] ? (!loggedin ? <div onClick={()=> dispatch({type : "showpremium"})}>
              <ActionAddIcon style={{ color: 'white' }}/>
              </div>
         : <div onClick={() => addToFavorites(song.songs && song.songs[0] && song.songs[0]._id, token, "me4h9cfxcu8g")}>
         {favoriteSongs.includes(song.songs && song.songs[0] && song.songs[0]._id) ? (
           <CustomDoneIcon style={{ color: 'white' }} />
         ) : (
           <ActionAddIcon style={{ color: 'white' }} />
         )}
       </div>
        ) : null }
                <div onClick={()=> {if (song.songs && song.songs.length > 0 && song.songs[0].audio_url) {dispatch({type : "playandpause", 
                                            songTitle : song.title, 
                                            songImg : song.image, 
                                            songName : song.artists[0].name, 
                                            id : song._id,
                                            songAudio : song.songs[0].audio_url, 
                                            }) } 
                                            else {dispatch({ type: "error" })}}} 
                                             className="play-container">
                  {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
                </div>
                <div onClick={()=> {dispatch1({type : "showingaddoption", showaddoption: true, optionidx: song._id}); 
                                   dispatch1({type : "playingall", 
                                            infotitle : song.title, 
                                            infoimg : song.image, 
                                            infodes : song.description, 
                                            infoid : song._id,
                                            infocount : song.songs.length,
                                            infotype : "Album"
                                            })}}>
                <ActionMoreIcon />
                </div>
              </div>
              {state1.showaddoption && state1.optionidx === song._id && <AddOptions state1={state1} dispatch={dispatch} dispatch1={dispatch1} divRef={divRef} />}
              {state.playing && state.id === song._id ?               
              <div className="rythm-container">
                <img src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif" alt="Rythm" style={{ width: "40px", height: "40px"}}></img>
              </div> :  null}
            </div>
            <Link className="path-pref" to={`/playlists/${song._id}`}><div className="link-container" onClick={()=> dispatch1({type : "playingall", 
                                            infotitle : song.title, 
                                            infoimg : song.image, 
                                            infodes : song.description, 
                                            infoid : song._id,
                                            infocount : song.songs.length,
                                            infotype : "Album"
                                            })}>
              <span className="link">{song.title}</span>
            </div></Link>
            <div className="content-container">
              {song.artists.map((artist, idx) => (
                <span className="content" key={idx}>
                  {artist.name}
                  {idx < song.artists.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


export default SeeAll;