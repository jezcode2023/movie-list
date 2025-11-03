import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import FeaturedMovie from "./components/FeaturedMovie";


const API_BASE = "https://www.omdbapi.com/";
const API_KEY = "705f847b";



async function fetchLatestFromOmdb(years = []) {
  const terms = ["the", "a", "love", "life", "man"]; 
  const results = [];
  const seen = new Set();

  for (const term of terms) {
    for (const y of years) {
      try {
        const url = `${API_BASE}?s=${encodeURIComponent(term)}&y=${encodeURIComponent(String(y))}&type=movie&apikey=${API_KEY}`;
        console.log("OMDb request:", url);
        const res = await fetch(url);
        const data = await res.json();
        console.log("OMDb response for", term, y, data);
        if (data && data.Search) {
          for (const m of data.Search) {
            if (!seen.has(m.imdbID) && m.Poster !== "N/A") {
              seen.add(m.imdbID);
              results.push(m);
            }
          }
        }
      } catch (e) {
        console.error("OMDb fetch error for", term, "year", y, e);
      }
      
      if (results.length >= 50) break;
    }
    if (results.length >= 50) break;
  }

  
  results.sort((a, b) => {
    const ay = parseInt(a.Year, 10) || 0;
    const by = parseInt(b.Year, 10) || 0;
    return by - ay;
  });

  return results.slice(0, 50);
}

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  const fetchMovies = async (term = searchTerm) => {
    if (!term) return;
    setLoading(true);
    setError("");
    try {
      const resp = await fetch(`${API_BASE}?s=${encodeURIComponent(term)}&type=movie&apikey=${API_KEY}`);
      const data = await resp.json();
      console.log("search response:", data);
      if (data && data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data?.Error || "No movies found for that search.");
      }
    } catch (e) {
      console.error("Search fetch failed", e);
      setError("Search failed. Check console/network.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    (async () => {
      setLoading(true);
      setError("");
      const now = new Date().getFullYear();
      const years = [now, now - 1, now - 2];
      try {
        const list = await fetchLatestFromOmdb(years);
        if (list.length === 0) {
          // fallback: perform a broad search without year to get something
          console.warn("No latest results; performing fallback search");
          const resp = await fetch(`${API_BASE}?s=${encodeURIComponent("star")}&type=movie&apikey=${API_KEY}`);
          const data = await resp.json();
          console.log("fallback response:", data);
          setMovies(data.Search || []);
          if (!data.Search) setError(data?.Error || "No movies found.");
        } else {
          setMovies(list);
        }
      } catch (e) {
        console.error("Failed to load latest movies", e);
        setError("Failed to load latest movies");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col bg-[#202A44] text-black">
      <Header />
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={() => fetchMovies()} />
      {loading && <div className="p-6 text-center text-white">Loading movies...</div>}
      {!loading && error && <div className="p-4 text-red-600">{error}</div>}
      {!loading && movies.length > 0 && <FeaturedMovie movie={movies[0]} />}
      
      <MovieList movies={movies} />
      <Footer />
      </div>
    
  );
}

export default App;
