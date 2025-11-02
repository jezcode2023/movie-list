export default function FeaturedMovie({ movie }) {
  if (!movie) return null;

  const poster =
    movie?.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/600x900?text=No+Image";

  return (
    <section className="w-full bg-[#202A44] text-white py-8 items-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-6">
        
        <div className="w-full md:w-64 lg:w-80 flex-shrink-0">
          <img
            src={poster}
            alt={movie.Title}
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
            loading="lazy"
          />
        </div>

      
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{movie.Title}</h1>
          <div className="mt-2 text-sm text-gray-300">
            <span>{movie.Genre}</span>
            <span className="mx-1 my-1"></span>
            <span>{movie.Runtime || movie.Year || "—"}</span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-gray-200 whitespace-pre-wrap">
            {movie.Summary  || movie.Plot }
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.Title + " trailer")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Watch Trailer
            </a>

            {movie.imdbID && (
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black hover:bg-gray-700 text-gray-100 px-4 py-2 rounded"
              >
                View on IMDb
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}