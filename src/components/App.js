import React, { useState, useEffect, useRef, useReducer, Component } from "react";
import '../styles/App.css';
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import Logo from "./Logo";
// import Home from "./Home";
// import Podcasts from "./Podcasts";
// import Library from "./Library";
import NavBar from './NavBar';
import Main from './Main';

// {/* <Route path="/products/:id" element={<SingleProduct />} /> */}

const App = () => {
  let [opensearch, setOpenSearch] = useState(false);

  function searching() {
    setOpenSearch(!opensearch);
  }

  return (
    // <Router>
    //   <div id="main">
    //     <NavBar />
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">logo</Link>
    //         </li>
    //         <li>
    //           <Link to="/home">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/podcasts">Podcasts</Link>
    //         </li>
    //         <li>
    //           <Link to="/library">Library</Link>
    //         </li>
    //       </ul>
    //     </nav>
        
    //     <Routes>
    //       <Route path="/" element={<Logo />}/>
    //       <Route path="/home" element={<Home />}/>
    //       <Route path="/podcasts" element={<Podcasts />}/>
    //       <Route path="/library" element={<Library />}/>
    //     </Routes>
    //   </div>
    // </Router>
    <div id='main'>
      <NavBar searching={searching} />
      <Main opensearch={opensearch} searching={searching}/>
    </div>

  )
}
 


export default App;
