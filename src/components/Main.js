import React, { useState, useEffect, useRef, Component } from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";
import { Container } from "@mui/material";

function Main(){
    let [playlists, setPlayLists] = useState([]);
    let [songlists, setSongLists] = useState([]);
    let [artistlists, setArtistLists] = useState([]);
    let [selectleft, setSelectLeft] = useState({
        trendingPlaylists: "rgba(255, 255, 255, 0.3)", 
        trendingSongs: "rgba(255, 255, 255, 0.3)",
        artistlists: "rgba(255, 255, 255, 0.3)",
      });
    let [selectright, setSelectRight] = useState({
        trendingPlaylists: "white", 
        trendingSongs: "white",
        artistlists: "white",
      });
    let [scrollLeft, setScrollLeft] = useState(0);
    let [selectall, setSelectAll] = useState(false);
    let [limit, setLimit] = useState(12);
    let [showTrendingPlaylists, setShowTrendingPlaylists] = useState(true);
    let [showTrendingSongs, setShowTrendingSongs] = useState(true);
    let [showartists, setShowArtists] = useState(true);
    let [showhappysongs, setShowHappySongs] = useState(true);
    let containerRef = useRef(null);
    let songContainerRef = useRef(null);
    let artistContainerRef = useRef(null);

    useEffect(()=>{
        async function fetchFeaturedMusic() {
            try {
                const response1 = await fetch(`https://academics.newtonschool.co/api/v1/music/album?limit=${limit}`, {
                    headers: {
                        'projectId': 'f104bi07c490'
                    }
                });
                if (!response1.ok) {
                    throw new Error('Network response was not ok');
                }
                const data1 = await response1.json();
                console.log(data1);
                setPlayLists(data1.data);
                console.log(data1.data);
                console.log(data1.data[0]);

                const response2 = await fetch(`https://academics.newtonschool.co/api/v1/music/song?limit=${limit}`, {
                    headers: {
                        'projectId': 'f104bi07c490'
                    }
                });
                if (!response2.ok) {
                    throw new Error('Network response was not ok');
                }
                const data2 = await response2.json();
                console.log(data2);
                setSongLists(data2.data);
                console.log(data2.data);
                console.log(data2.data[0]);
                console.log(data2.data[0].artist[0].image);
                console.log(data2.data[0].artist[0].name);
                console.log(data2.data[0].title);

                const response3 = await fetch(`https://academics.newtonschool.co/api/v1/music/artist?limit=${limit}`, {
                    headers: {
                        'projectId': 'f104bi07c490'
                    }
                });
                if (!response3.ok) {
                    throw new Error('Network response was not ok');
                }
                const data3 = await response3.json();
                console.log(data3);
                setArtistLists(data3.data);
                console.log(data3.data);
                console.log(data3.data[0]);
                console.log(data3.data[0].image);
                console.log(data3.data[0].name);
                console.log(data3.data[0].description);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
        fetchFeaturedMusic();
        
    }, [limit])

    useEffect(() => {
        function handleScroll() {
            // if (
            //   containerRef.current &&
            //   containerRef.current.scrollTop + containerRef.current.clientHeight >=
            //     containerRef.current.scrollHeight
            // ) {
              setLimit((prevLimit) => prevLimit + 12);
            // }
          }
          window.addEventListener("scroll", handleScroll);
        
          return () => {
            window.removeEventListener("scroll", handleScroll);
          }; 
      }, [limit]);

    function handleLeftIcon(identifier) {
        const container =   identifier === "trendingPlaylists" ? containerRef
        : identifier === "trendingSongs"
        ? songContainerRef
        : artistContainerRef;

        if (container.current) {
          container.current.scrollLeft -= 1000;
        }
      
        if (container.current.scrollLeft <= 0) {
            setSelectRight((prevSelectRight) => ({
                ...prevSelectRight,
                [identifier]: "white",
            }));
            setSelectLeft((prevSelectLeft) => ({
                ...prevSelectLeft,
                [identifier]: "rgba(255, 255, 255, 0.3)",
            }));
        }
        // if (containerRef.current) {
        //     containerRef.current.scrollLeft -= 1000;
        // }

        // if (containerRef.current.scrollLeft <= 0){
        //     setSelectLeft("rgba(255, 255, 255, 0.3)");
        //     setSelectRight("white");
        // }
    }

    // function handleRightIcon() {
    //     console.log(containerRef.current.scrollLeft);
    //     if (containerRef.current) {
    //         containerRef.current.scrollLeft += 1000;
    //     }
    //     else if (songContainerRef.current) {
    //         songContainerRef.current.scrollLeft += 1000;
    //     }

    //     console.log(containerRef);
    //     console.log(containerRef.current);
    //     console.log(containerRef.current);
    //     console.log(songContainerRef.current);
    //     console.log(songContainerRef === containerRef);
    //     console.log(containerRef.current.scrollLeft);
    //     console.log(songContainerRef.current.scrollLeft);
    //     if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.clientWidth){
    //         setSelectRight("rgba(255, 255, 255, 0.3)");
    //         setSelectLeft("white");
    //     }

    //     else if (songContainerRef.current.scrollLeft >= songContainerRef.current.scrollWidth - songContainerRef.current.clientWidth){
    //         setSelectRight("rgba(255, 255, 255, 0.3)");
    //         setSelectLeft("white");
    //     }
    // }

    function handleRightIcon(identifier) {
        const container =   identifier === "trendingPlaylists" ? containerRef
                                        : identifier === "trendingSongs"
                                        ? songContainerRef
                                        : artistContainerRef;

        if (container.current) {
          container.current.scrollLeft += 1000;
        }
      
        if (container.current.scrollLeft >= container.current.scrollWidth - container.current.clientWidth) {
            setSelectRight((prevSelectRight) => ({
                ...prevSelectRight,
                [identifier]: "rgba(255, 255, 255, 0.3)",
            }));
            setSelectLeft((prevSelectLeft) => ({
                ...prevSelectLeft,
                [identifier]: "white",
            }));
        }
        // } else {
        //   setSelectRight("white");
        //   setSelectLeft("white");
        // }
      
        // if (isContainerRef && containerRef.current) {
        //   containerRef.current.scrollLeft += 1000;
        // } else if (!isContainerRef && songContainerRef.current) {
        //   songContainerRef.current.scrollLeft += 1000;
        // }
      }
      

    function handleSelectAll(identifier) {
        if (identifier === "trendingPlaylists") {
            setShowTrendingSongs(false);
            setShowArtists(false);
        } else if (identifier === "trendingSongs") {
            setShowTrendingPlaylists(false);
            setShowArtists(false);
        } else {
            setShowTrendingPlaylists(false);
            setShowTrendingSongs(false);
        }
        setLimit((prevLimit)=> prevLimit+20);
        setSelectAll(true);
    }

    return (
        <div className="Main-section">
            <div className="categories"></div>
            {showTrendingPlaylists && <TrendingPlayLists playlists={playlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["trendingPlaylists"]} 
                               selectright={selectright["trendingPlaylists"]} 
                               containerRef={containerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingPlaylists" /> }
            {showTrendingSongs && <TrendingSongs songlists={songlists}
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["trendingSongs"]} 
                               selectright={selectright["trendingSongs"]} 
                               songContainerRef={songContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingSongs" /> }
            {showartists && <AllStars artistlists={artistlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft["artistlists"]} 
                               selectright={selectright["artistlists"]} 
                               artistContainerRef={artistContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="artistsongs"/> }
            {/* {showhappysongs && <HappyMode />} */}
        </div>

    )
}

function TrendingPlayLists({playlists, handleLeftIcon, handleRightIcon, selectleft, selectright, containerRef, handleSelectAll, selectall, identifier}){
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Trending Playlists</h2>
                </div>
                <div className="options">
                    <div onClick={()=> handleLeftIcon(identifier) }>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft}` }}/>
                    </div>
                    <div onClick={() => handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright}` }}/>
                    </div>
                </div>
                <div onClick={()=> handleSelectAll(identifier)} className="alloptions">
                    <span className="all">SEE ALL</span>
                </div>
            </div>
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={containerRef}>
                {playlists.map((song, idx)=>(
                <div className={selectall ? "collections-all" : "collections"} key={idx}>
                    <div className="image-container">
                    <img className="imgtab" src={song.image} alt={song.title}></img>
                    <div className="icon-container">
                        <ActionAddIcon />
                        <div className="play-container">
                            <PlaybackPlayIcon />
                        </div>
                        <ActionMoreIcon />
                    </div> 
                    </div>
                    <div className="link-container">
                        <span className="link">{song.title}</span>
                    </div> 
                    <div className="content-container">
                        <span className="content">{song.artists[0].name}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
                    {/* {featuredSongs.map((song) => (
                    <li key={song._id}>
                        <img src={song.thumbnail} alt={song.title} />
                        <p>{song.title}</p>
                        <p>{song.artist.map((artist) => artist.name).join(', ')}</p>
                    </li>
                    ))} */}

function TrendingSongs({songlists, handleLeftIcon, handleRightIcon, selectleft, selectright, songContainerRef, handleSelectAll, selectall, identifier}) {
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Trending Songs</h2>
                </div>
                <div className="options">
                    <div onClick={()=> handleLeftIcon(identifier)}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft}` }}/>
                    </div>
                    <div onClick={()=> handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright}` }}/>
                    </div>
                </div>
                <div onClick={()=> handleSelectAll(identifier)} className="alloptions">
                    <span className="all">SEE ALL</span>
                </div>
            </div>
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={songContainerRef}>
                {songlists.map((song, idx)=>(
                <div className={selectall ? "collections-all" : "collections"} key={idx}>
                    <div className="image-container">
                    <img className="imgtab" src={song.artist[0].image} alt={song.title}></img>
                    <div className="icon-container">
                        <ActionAddIcon />
                        <div className="play-container">
                            <PlaybackPlayIcon />
                        </div>
                        <ActionMoreIcon />
                    </div> 
                    </div>
                    <div className="link-container">
                        <span className="link">{song.title}</span>
                    </div> 
                    <div className="content-container">
                        <span className="content">{song.artist[0].name}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

function AllStars({artistlists, handleLeftIcon, handleRightIcon, selectleft, selectright, artistContainerRef, handleSelectAll, selectall, identifier}) {
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>All Stars</h2>
                </div>
                <div className="options">
                    <div onClick={()=> handleLeftIcon(identifier)}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft}` }}/>
                    </div>
                    <div onClick={()=> handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright}` }}/>
                    </div>
                </div>
                <div onClick={()=> handleSelectAll(identifier)} className="alloptions">
                    <span className="all">SEE ALL</span>
                </div>
            </div>
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={artistContainerRef}>
                {artistlists.map((song, idx)=>(
                <div className={selectall ? "collections-all" : "collections"} key={idx}>
                    <div className="image-container">
                    <img className="imgtab" src={song.image} alt={song.name}></img>
                    <div className="icon-container">
                        <ActionAddIcon />
                        <div className="play-container">
                            <PlaybackPlayIcon />
                        </div>
                        <ActionMoreIcon />
                    </div> 
                    </div>
                    <div className="link-container">
                        <span className="link">{song.description}</span>
                    </div> 
                    <div className="content-container">
                        <span className="content">{song.name}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

// function HappyMode() {
//     return (
//         <div className="feature">
//             <div className="headertab">
//                 <div className="header">
//                     <h2>Happy Mode</h2>
//                 </div>
//                 <div className="options">
//                     <ChevronCaretLeftIcon style={{ color: 'white' }}/>
//                     <ChevronCaretrightIcon style={{ color: 'white' }}/>
//                 </div>
//                 <div className="alloptions">
//                     <span className="all">SEE ALL</span>
//                 </div>
//             </div>
//             <div className="wrapper">
//                 <div className="collections">
//                     <img className="imgtab" src="https://m.media-amazon.com/images/I/51z295C2UxL._UX210_FMjpg_QL85_.jpg"></img> 
//                     <div className="link-container">
//                         <a className="link" href="/albums/B0CHVTM66G?trackAsin=B0CHVSH3WS">JALSA 2.0 (From "Mission Raniganj: The Great Bharat Rescue")</a>
//                     </div> 
//                     <div className="content-container">
//                         <span className="content">Satinder Sartaaj &amp; Prem &amp; Hardeep</span>
//                     </div>
//                 </div>
                
//                 <div className="collections">
//                     <img className="imgtab" src="https://m.media-amazon.com/images/I/51z295C2UxL._UX210_FMjpg_QL85_.jpg"></img> 
//                     <div className="link-container">
//                         <a className="link" href="/albums/B0CHVTM66G?trackAsin=B0CHVSH3WS">JALSA 2.0 (From "Mission Raniganj: The Great Bharat Rescue")</a>
//                     </div> 
//                     <div className="content-container">
//                         <span className="content">Satinder Sartaaj &amp; Prem &amp; Hardeep</span>
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     )
// }

export default Main;