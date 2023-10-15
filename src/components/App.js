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
  const [searchTerm, setSearchTerm] = useState('');
  const [songList, setSongList] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState(["happy", "sad", "newcollections"]);
  let [openresults, setOpenResults] = useState(false);
  let [opensuggestion, setOpenSuggestion] = useState(false);
  let [submit, setSubmit] = useState(false);
  let [searchseenresults, setSearchSeenResults] = useState([]);
  const apiEndpoint = 'https://academics.newtonschool.co/api/v1/music/song';
  const apiEndpointArtist = 'https://academics.newtonschool.co/api/v1/music/artist';
  

  function searching() {
    setOpenSearch(true);
    setOpenSuggestion(false);
    setOpenResults(false)
    setSubmit(false);
  }

  function deleteSearchRes() {
    setSearchSeenResults([]);
  }


  const handleSearchChange = (event) => {
    setOpenSuggestion(true);
    setSearchTerm(event.target.value);

    // const filtered = songList.some((lst)=>{
    //   lst.filter((song) =>
    //   song.title.toLowerCase().includes(event.target.value.toLowerCase())
    // )
    //   lst.title.toLowerCase().includes(searchTerm.toLowerCase());
    // })
    const filtered = songList.filter((song) => {
      song.title.toLowerCase().includes(searchTerm.toLowerCase()); 
    });
    // console.log(filtered)
    // const filtered = songList.filter((song) =>
    //   song.title.toLowerCase().includes(event.target.value.toLowerCase())
    // );

    // setFilteredSuggestions(filtered); 
    console.log(filtered);
    
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    setSubmit(true);
    setSearchSeenResults([...searchseenresults, searchTerm]);
  };

  const fetchSongList = async () => {
    try {
      const response = await fetch(`${apiEndpoint}?search={"title":"${searchTerm}"}`, {
        headers: {
          'projectID': "f104bi07c490",
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSongList(data.data);
      console.log("data")
      console.log(data.data);
      console.log(Object.values(data.data));
      {data.data.map((suggestion, index) => (
        console.log(suggestion.title)
      ))}

      setFilteredSuggestions(...[data.data]);  // Update the song list state with the fetched data
    } catch (error) {
      console.error('Error fetching song list:', error);
    }
  };

  const fetchArtistList = async () => {
    try {
      const response = await fetch(`${apiEndpointArtist}?search={"name":"${searchTerm}"}`, {
        headers: {
          'projectID': 'YOUR_PROJECT_ID',
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setFilteredSuggestions(...[data.data]);
    } catch (error) {
      console.error('Error fetching artist list:', error);
    }
  };

  useEffect(() => {
    // Fetch the song list when the search term changes
    fetchSongList();
    fetchArtistList();
    console.log("hi")
  }, [searchTerm]);


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
      <NavBar searching={searching} 
              handleSearchChange={handleSearchChange} 
              searchTerm={searchTerm} 
              handleSearchSubmit={handleSearchSubmit}
              opensearch={opensearch} />
      <Main opensearch={opensearch} 
            setOpenSearch={setOpenSearch}
            filteredSuggestions={filteredSuggestions} 
            opensuggestion={opensuggestion} 
            openresults={openresults}
            setOpenResults={setOpenResults}
            searchTerm={searchTerm}
            submit={submit} 
            setSubmit={setSubmit}
            searchseenresults={searchseenresults}
            setSearchSeenResults={setSearchSeenResults}
            deleteSearchRes={deleteSearchRes} />
    </div>
  )
}


export default App;