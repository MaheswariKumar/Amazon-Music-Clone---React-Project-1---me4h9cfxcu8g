import React, { useEffect } from "react";

function Main(){
    useEffect(()=>{
        async function fetchFeaturedMusic() {
            try {
                const response = await fetch('https://academics.newtonschool.co/api/v1/music/song', {
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
        </div>

    )
}

function FeaturedMusic(){
    return (
        <div className="feature">
            <h1>Featured This Week</h1>
        </div>
    )
}

export default Main;