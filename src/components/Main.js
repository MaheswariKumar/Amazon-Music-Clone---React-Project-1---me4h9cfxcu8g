import React, { useState, useEffect } from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";
import PlaybackPlayIcon from "./PlaybackPlayIcon";
import ActionMoreIcon from "./ActionMoreIcon";
import ActionAddIcon from "./ActionAddIcon";

function Main(){
    const [featuredata, setFeaturedata] = useState([]);
    const [selectleft, setSelectLeft] = useState("rgba(255, 255, 255, 0.3)");
    const [selectright, setSelectRight] = useState("white");

    useEffect(()=>{
        async function fetchFeaturedMusic() {
            try {
                const response = await fetch('https://academics.newtonschool.co/api/v1/music/', {
                    headers: {
                        'projectId': 'f104bi07c490'
                    }
                });
        
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                const data = await response.json();
        
               
                console.log(data);
                setFeaturedata(data);
                console.log(data.data);
                console.log(data.data[0]);

        
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
        
        fetchFeaturedMusic();
        
    }, [])

    function handleLeftIcon() {
        setSelectLeft("white");
        setSelectRight("rgba(255, 255, 255, 0.3)");
    }

    function handleRightIcon() {
        setSelectRight("white");
        setSelectLeft("rgba(255, 255, 255, 0.3)");
    }

    return (
        <div className="Main-section">
            <div className="categories"></div>
            <FeaturedMusic handleLeftIcon={handleLeftIcon} handleRightIcon={handleRightIcon} selectleft={selectleft} selectright={selectright}/>
            <SoulSoothers />
            <WorkoutMix />
        </div>

    )
}

function FeaturedMusic({handleLeftIcon, handleRightIcon, selectleft, selectright}){
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Featured This Week</h2>
                </div>
                <div className="options">
                    <div onClick={handleLeftIcon}>
                        <ChevronCaretLeftIcon style={{ fontSize: '20px', color: `${selectleft}` }}/>
                    </div>
                    <div onClick={handleRightIcon}>
                        <ChevronCaretrightIcon style={{ fontSize: '20px', color: `${selectright}` }}/>
                    </div>
                </div>
                <div className="alloptions">
                    <span className="all">SEE ALL</span>
                </div>
            </div>
            <div className="wrapper">
                <div className="collections">
                    <div className="image-container">
                    <img className="imgtab" src="https://m.media-amazon.com/images/I/51z295C2UxL._UX210_FMjpg_QL85_.jpg"></img>
                    <div className="icon-container">
                        <ActionAddIcon />
                        <div className="play-container">
                            <PlaybackPlayIcon />
                        </div>
                        <ActionMoreIcon />
                    </div> 
                    </div>
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

export default Main;