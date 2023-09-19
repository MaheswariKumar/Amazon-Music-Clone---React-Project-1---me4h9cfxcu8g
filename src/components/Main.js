import React, { useState, useEffect } from "react";
import ChevronCaretLeftIcon from "./ChevronCaretLeftIcon";
import ChevronCaretrightIcon from "./ChevronCaretrightIcon";

function Main(){
    const [featuredata, setFeaturedata] = useState([]);

    useEffect(()=>{
        async function fetchFeaturedMusic() {
            try {
                const response = await fetch('https://academics.newtonschool.co/api/v1/music/album', {
                    headers: {
                        'projectId': 'f104bi07c490' // Replace with your actual project ID or API key
                    }
                });
        
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                const data = await response.json();
        
                // Process the data here
                console.log(data); // You can log the data or perform further actions
                setFeaturedata(data);
                console.log(data.data);
                console.log(data.data[0]);
                const popularAlbums = data.filter(album => album.category === 'Popular');
                console.log(popularAlbums);
        
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
        
        // Call the function to fetch featured music
        fetchFeaturedMusic();
        
    }, [])
    return (
        <div className="Main-section">
            <div className="categories"></div>
            <FeaturedMusic />
            <SoulSoothers />
        </div>

    )
}

function FeaturedMusic(){
    return (
        <div className="feature">
            <div className="headertab">
                <div className="header">
                    <h2>Featured This Week</h2>
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
export default Main;