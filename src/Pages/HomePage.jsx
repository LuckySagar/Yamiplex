// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const videos = [
    {
      title: "One Piece",
      thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
      url: "https://drive.google.com/file/d/19-ijdK8kVGspURBfgmTUrL3e_b_xiXH-/view?usp=drive_link",
      description: "A mind-bending thriller.",
    },
    {
      title: "Dandadan",
      thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a8b56a7589ff9edb6c86977c31e27a06.jpg",
      url: "https://drive.google.com/file/d/194619mmiGe-vFpsD84WyZOjzGaMPeufi/view?usp=drive_link",
      description: "A journey through space and time.",
    },
    {
      title: "Blue Box",
      thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5f112b1c1f3f41ed87de0c48b6cf4e0d.jpg",
      url: "https://drive.google.com/file/d/191roZHsgBayR6wvstVn21PQ9G3Xut-IG/view?usp=drive_link",
      description: "The ultimate showdown of superheroes.",
    },
    
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
      <div className="hero-section">
        <br></br><br></br><br></br><br></br>
        <h1>Welcome to YamiPlex</h1>
        <p>Explore the finest movies and TV shows, handpicked for you.</p>
      </div>

      <div className="search-section">
        <h3>Search for Movies/Shows</h3>
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={() => alert(`Searching for: ${searchTerm}`)}>Search</button>
      </div>

      <div className="video-section">
        <h2>Featured Content</h2>
        <div className="video-grid">
          {filteredVideos.map((video, index) => (
            <div key={index} className="video-cards">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <button className="watch-buttons">Watch Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
