import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import CustomLikeIcon from "./CustomLikeIcon";

function MusicPreferences({dispatch2}){
    let [clr, setClr] = useState(["white", "white", "white", "white", "white", "white", "white",
                                  "white", "white", "white", "white", "white", "white", "white"]);
  
    function handleColor(idx){
      let temp = [...clr];
      if (temp[idx] === "aqua") {
        temp[idx] = "white";
      } else {
        temp[idx] = "aqua";
      }
      setClr(temp);
    }
  
    function handleall() {
      setClr(["white", "white", "white", "white", "white", "white", "white",
      "white", "white", "white", "white", "white", "white", "white"])
    }
  
    return (
      <div className="music-pref">
        <div className="cancel-pref" onClick={()=> dispatch2({type : "prefoption"})}>
          <div className="x-pref">
            <nav>X</nav>
          </div>
        </div>
        <div className="pref-title">
          <nav className="music-ti">Music Preferences</nav>
          <nav className="music-des">Set your preferences to discover music you love.</nav>
        </div>
        <div className="lang-list">
          <div className="hindi">
            <div>
              <nav>Hindi</nav>
              <nav className="lang">हिन्दी</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(0)}>
              <CustomLikeIcon style={{ color: `${clr[0]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>English</nav>
              <nav className="lang">English</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(1)}>
              <CustomLikeIcon style={{ color: `${clr[1]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Punjabi</nav>
              <nav className="lang">ਪੰਜਾਬੀ</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(2)}>
              <CustomLikeIcon style={{ color: `${clr[2]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Tamil</nav>
              <nav className="lang">தமிழ்</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(3)}>
              <CustomLikeIcon style={{ color: `${clr[3]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Telugu</nav>
              <nav className="lang">తెలుగు</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(4)}>
              <CustomLikeIcon style={{ color: `${clr[4]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Kannada</nav>
              <nav className="lang">ಕನ್ನಡ</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(5)}>
              <CustomLikeIcon style={{ color: `${clr[5]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Malayalam</nav>
              <nav className="lang">മലയാളം</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(6)}>
              <CustomLikeIcon style={{ color: `${clr[6]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Marathi</nav>
              <nav className="lang">मराठी</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(7)}>
              <CustomLikeIcon style={{ color: `${clr[7]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Bengali</nav>
              <nav className="lang">বাংলা</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(8)}>
              <CustomLikeIcon style={{ color: `${clr[8]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Bhojpuri</nav>
              <nav className="lang">भोजपुरी</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(9)}>
              <CustomLikeIcon style={{ color: `${clr[9]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Gujarati</nav>
              <nav className="lang">ગુજરાતી</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(10)}>
              <CustomLikeIcon style={{ color: `${clr[10]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Rajasthani</nav>
              <nav className="lang">राजस्थानी</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(11)}>
              <CustomLikeIcon style={{ color: `${clr[11]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Assamese</nav>
              <nav className="lang">অসমীয়া</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(12)}>
              <CustomLikeIcon style={{ color: `${clr[12]}` }}/>
            </div>
          </div>
          <div className="hindi">
            <div>
              <nav>Odia</nav>
              <nav className="lang">ଓଡ଼ିଆ</nav>
            </div>
            <div className="likeicon" onClick={()=> handleColor(13)}>
              <CustomLikeIcon style={{ color: `${clr[13]}` }}/>
            </div>
          </div>
        </div>
        <div className="clear">
          <div className="clear-all" onClick={handleall}>
            <nav>CLEAR ALL</nav>
          </div>
          <div className="continue" onClick={()=> dispatch2({type : "prefoption"})}>
            <nav>CONTINUE</nav>
          </div>
        </div>
      </div>
    )
  }

  export default MusicPreferences;