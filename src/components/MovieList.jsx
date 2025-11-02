export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className="text-center mt-4"></p>;
  }

  return (
    <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
          key={movie.imdbID}
        >
          <div className="rounded shadow p-2 hover:scale-105 transition-transform">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
              alt={movie.Title}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
            <p className="text-white text-sm">{movie.Year}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
