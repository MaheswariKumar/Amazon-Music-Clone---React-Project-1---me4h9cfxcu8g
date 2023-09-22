import React, { useState, useEffect, useRef } from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";

function Main(){
    let [featuredata, setFeaturedata] = useState([]);
    let [selectleft, setSelectLeft] = useState("rgba(255, 255, 255, 0.3)");
    let [selectright, setSelectRight] = useState("white");
    let [scrollLeft, setScrollLeft] = useState(0);
    let [selectall, setSelectAll] = useState(false);
    let [limit, setLimit] = useState(12);
    let containerRef = useRef(null);

    useEffect(()=>{
        async function fetchFeaturedMusic() {
            try {
                const response = await fetch(`https://academics.newtonschool.co/api/v1/music/album?limit=${limit}`, {
                    headers: {
                        'projectId': 'f104bi07c490'
                    }
                });
        
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                const data = await response.json();
        
               
                console.log(data);
                setFeaturedata(data.data);
                console.log(data.data);
                console.log(data.data[0]);
        
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
              // Detect when user has scrolled to the bottom
              setLimit((prevLimit) => prevLimit + 12); // Increase the limit to load more data
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

    function handleRightIcon() {
        console.log(containerRef.current.scrollLeft);
        if (containerRef.current) {
            containerRef.current.scrollLeft += 1000;
        }
        console.log(containerRef.current.scrollLeft);
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.clientWidth){
            setSelectRight("rgba(255, 255, 255, 0.3)");
            setSelectLeft("white");
        }
        console.log(containerRef.current.scrollLeft);
    }

    function handleSelectAll() {
        setSelectAll(true);
    }

    return (
        <div className="Main-section">
            <div className="categories"></div>
            <TrendingPlayLists featuredata={featuredata} 
                               handleLeftIcon={handleLeftIcon} 
                               handleRightIcon={handleRightIcon} 
                               selectleft={selectleft} 
                               selectright={selectright} 
                               containerRef={containerRef} 
                               handleSelectAll={handleSelectAll}
                               selectall={selectall} />
            <SoulSoothers />
            <WorkoutMix />
            <TrendingSongs />
        </div>

    )
}

function TrendingPlayLists({featuredata, handleLeftIcon, handleRightIcon, selectleft, selectright, containerRef, handleSelectAll, selectall}){
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
            <div className={selectall ? "wrapper-all" : "wrapper"} ref={containerRef}>
                {featuredata.map((song, idx)=>(
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

function SoulSoothers() {
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Soul Soothers</h2>
                </div>
                <div className="options">
                    <div>
                        <ChevronCaretLeftIcon style={{ color: 'white' }}/>
                    </div>
                    <div>
                        <ChevronCaretrightIcon style={{ color: 'white' }}/>
                    </div>
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
                        <span className="content">Satinder Sartaaj&amp; Prem &amp; Hardeep</span>
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

function WorkoutMix() {
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

function TrendingSongs() {
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