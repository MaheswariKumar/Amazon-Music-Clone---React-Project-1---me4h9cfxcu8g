import React, {
    useState,
    useEffect,
    useRef,
    useReducer,
    Component,
  } from "react";
  import { Link } from "react-router-dom";
  import PlaybackPlayIcon from "./PlaybackPlayIcon";
  import ActionMoreIcon from "./ActionMoreIcon";
  import ActionAddIcon from "./ActionAddIcon";
  import MyCustomPauseIcon from "./MyCustomPauseIcon";
  import AddOptions from "./AddOptions";
  import Loading from "./Loading";
  import ShareSong from "./ShareSong";
  import TryPremium from "./TryPremium";

function RomanticSongSeeAll({state, state1, dispatch, dispatch1, divRef}) {
    let [playlists, setPlayLists] = useState([]);
    let [limit, setLimit] = useState(100);
    let containerRef = useRef(null);
    let [loading, setLoading] = useState(true);
    
    async function fetchTrendingPlaylists() {
        try {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}&limit=${limit}`,
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

      if (loading) {
        return (
          // <div className="Main-section">
            <Loading />
          // </div>
        );
      }

      return (
    <div className="Main-section">
        {state.openshare && <ShareSong dispatch={dispatch} state={state} />}
        {state.openpremium && <TryPremium dispatch={dispatch} />}
      <div className="categories"></div>
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Romantic Rhythms</h2>
                </div>
            </div>
            <div className="wrapper-all">
                {playlists.map((song, idx)=>(
                <div className="collections-all" key={idx}>
                    <div className="image-container">
                    <img className="imgtab" src={song.thumbnail} alt={song.title}></img>
                    <div className="icon-container">
                    <div onClick={()=> dispatch({type: "showpremium"})}>
                <ActionAddIcon />
                </div>
                        <div onClick={()=> {if (song.audio_url) {dispatch({type : "playandpause", 
                                            songTitle : song.title, 
                                            songImg : song.thumbnail, 
                                            songName : song.artist[0].name, 
                                            id : song._id,
                                            songAudio : song.audio_url, 
                                            }) } 
                                            else {dispatch({ type: "error" })}}} 
                                             className="play-container">
                        {state.playing && state.id === song._id ? <MyCustomPauseIcon /> : <PlaybackPlayIcon />}
                        </div>
                        <div onClick={()=> {dispatch1({type : "showingaddoption", showaddoption: true, optionidx: song._id}); dispatch1({type : "playingall", 
                                            infotitle : song.title, 
                                            infoimg : song.thumbnail, 
                                            infodes : song.artist[0].description, 
                                            infoid : song._id,
                                            infocount : 1,
                                            infoaudio : song.audio_url,
                                            infotype : "Songs"
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
                                            infoimg : song.thumbnail, 
                                            infodes : song.artist[0].description, 
                                            infoid : song._id,
                                            infocount : 1,
                                            infotype : "Songs",
                                            infoaudio : song.audio_url
                                            })}>
                        <span className="link">{song.title}</span>
                    </div></Link>
                    <div className="content-container">
                        {/* <span className="content">{song.artist[0].name}</span> */}
                          {song.artist.map((artist, idx) => (
                            <span className="content" key={idx}>
                            {artist.name}
                            {idx < song.artist.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default RomanticSongSeeAll;