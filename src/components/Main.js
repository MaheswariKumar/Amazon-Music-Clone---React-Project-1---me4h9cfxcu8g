import React, { useState, useEffect, useRef } from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";

function Main(){
    let [playlists, setPlayLists] = useState([]);
    let [songlists, setSongLists] = useState([]);
    let [artistlists, setArtistLists] = useState([]);
    let [selectleft, setSelectLeft] = useState("rgba(255, 255, 255, 0.3)");
    let [selectright, setSelectRight] = useState("white");
    let [scrollLeft, setScrollLeft] = useState(0);
    let [selectall, setSelectAll] = useState(false);
    let [limit, setLimit] = useState(12);
    let [showTrendingPlaylists, setShowTrendingPlaylists] = useState(true);
    let [showSoulSoothers, setShowSoulSoothers] = useState(true);
    let [showWorkoutMix, setShowWorkoutMix] = useState(true);
    let [showTrendingSongs, setShowTrendingSongs] = useState(true);
    let containerRef = useRef(null);
    let songContainerRef = useRef(null);
    let artistContainerRef = useRef(null);
    let [disable, setDisable] = useState(false);

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
            if (
              containerRef.current &&
              containerRef.current.scrollTop + containerRef.current.clientHeight >=
                containerRef.current.scrollHeight
            ) {
              
              setLimit((prevLimit) => prevLimit + 12);
            }
          }
        
          window.addEventListener("scroll", handleScroll);
        
          return () => {
            window.removeEventListener("scroll", handleScroll);
          }; 
      }, [limit]);

    function handleLeftIcon() {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 1000;
        }

        if (containerRef.current.scrollLeft <= 0){
            setSelectLeft("rgba(255, 255, 255, 0.3)");
            setSelectRight("white");
        }
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
        const container = identifier === "trendingPlaylists" ? containerRef : songContainerRef;
        const isContainerRef = identifier === "trendingPlaylists";
      

        console.log(container.current);
        if (container.current) {
          container.current.scrollLeft += 1000;
        }

        if (identifier !== "trendingPlaylists") {
            setDisable(true);
        }

        console.log(container.current.selectright);
        console.log(container.current);
        console.log(container);
        console.log(isContainerRef);
        console.log(container===containerRef);
        console.log(container===songContainerRef);
      
        if (container.current.scrollLeft >= container.current.scrollWidth - container.current.clientWidth) {
          setSelectRight("rgba(255, 255, 255, 0.3)");
          setSelectLeft("white");
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
      

    function handleSelectAll() {
        setSelectAll(true);
    }

    return (
        <div className="Main-section">
            <div className="categories"></div>
            {showTrendingPlaylists && <TrendingPlayLists playlists={playlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft} 
                               selectright={selectright} 
                               containerRef={containerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingPlaylists"
                               disable={disable} /> }
            {showSoulSoothers && <TrendingSongs songlists={songlists}
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft} 
                               selectright={selectright} 
                               songContainerRef={songContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}
                               identifier="trendingSongs" /> }
            {showWorkoutMix && <AllStars artistlists={artistlists} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft} 
                               selectright={selectright} 
                               artistContainerRef={artistContainerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall}/> }
            {showTrendingSongs && <HappyMode />}
        </div>

    )
}

function TrendingPlayLists({playlists, handleLeftIcon, handleRightIcon, selectleft, selectright, containerRef, handleSelectAll, selectall, identifier, disable}){
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Trending Playlists</h2>
                </div>
                <div className="options">
                    <div onClick={handleLeftIcon}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft}` }}/>
                    </div>
                    <div className={disable ? "disabled-div" : ""} onClick={() => handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright}` }}/>
                    </div>
                </div>
                <div onClick={handleSelectAll} className="alloptions">
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
                    <h2>Trending Playlists</h2>
                </div>
                <div className="options">
                    <div onClick={handleLeftIcon}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft}` }}/>
                    </div>
                    <div onClick={()=> handleRightIcon(identifier)}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright}` }}/>
                    </div>
                </div>
                <div onClick={handleSelectAll} className="alloptions">
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

function AllStars({artistlists, handleLeftIcon, handleRightIcon, selectleft, selectright, artistContainerRef, handleSelectAll, selectall}) {
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Trending Playlists</h2>
                </div>
                <div className="options">
                    <div onClick={handleLeftIcon}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft}` }}/>
                    </div>
                    <div onClick={handleRightIcon}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright}` }}/>
                    </div>
                </div>
                <div onClick={handleSelectAll} className="alloptions">
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

function HappyMode() {
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Workout Mix</h2>
                </div>
                <div className="options">
                    <ChevronCaretLeftIcon style={{ color: 'white' }}/>
                    <ChevronCaretrightIcon style={{ color: 'white' }}/>
                </div>
                <div className="alloptions">
                    <span className="all">SEE ALL</span>
                </div>
            </div>
            <div className="wrapper">
                <div className="collections">
                    <img className="imgtab" src="https://m.media-amazon.com/images/I/51z295C2UxL._UX210_FMjpg_QL85_.jpg"></img> 
                    <div className="link-container">
                        <a className="link" href="/albums/B0CHVTM66G?trackAsin=B0CHVSH3WS">JALSA 2.0 (From "Mission Raniganj: The Great Bharat Rescue")</a>
                    </div> 
                    <div className="content-container">
                        <span className="content">Satinder Sartaaj &amp; Prem &amp; Hardeep</span>
                    </div>
                </div>
                
                <div className="collections">
                    <img className="imgtab" src="https://m.media-amazon.com/images/I/51z295C2UxL._UX210_FMjpg_QL85_.jpg"></img> 
                    <div className="link-container">
                        <a className="link" href="/albums/B0CHVTM66G?trackAsin=B0CHVSH3WS">JALSA 2.0 (From "Mission Raniganj: The Great Bharat Rescue")</a>
                    </div> 
                    <div className="content-container">
                        <span className="content">Satinder Sartaaj &amp; Prem &amp; Hardeep</span>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Main;