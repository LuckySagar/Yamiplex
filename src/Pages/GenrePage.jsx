// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const GenrePage = () => {
  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi", "Thriller"];
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [results, setResults] = useState([]);

  const handleGenreClick = async (genre) => {
    setSelectedGenre(genre);

    // Simulated API call to fetch data
    // Replace this with your API endpoint
    const mockData = [
      { title: "Movie 1", genre },
      { title: "Movie 2", genre },
      { title: "Movie 3", genre },
    ];
    setResults(mockData);

  
     try {
       // eslint-disable-next-line no-undef
       const response = await axios.get(`http://localhost:5000/api/genres/${genre}`);
       setResults(response.data);
     } catch (error) {
       console.error("Error fetching genre data", error);
       setResults([]);
     }
  };

  return (
    <div className="genre-page">
      <br></br><br></br><br></br><br></br>
      <h2 className="title">Browse Genres</h2>
      <ul className="genre-list">
        {genres.map((genre, index) => (
          <li
            key={index}
            onClick={() => handleGenreClick(genre)}
            className="genre-item"
          >
            {genre}
          </li>
        ))}
      </ul>

      {selectedGenre && (
        <div className="results">
          <h3>Results for &quot;{selectedGenre}&quot;</h3>
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GenrePage;
