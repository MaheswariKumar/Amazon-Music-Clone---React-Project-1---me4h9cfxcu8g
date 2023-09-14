import React from "react";

function Main(){
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