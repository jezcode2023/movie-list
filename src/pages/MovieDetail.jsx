export default function MovieDetail({ movie, onBack }) {
  return (
    <div className="p-4 max-w-md mx-auto">
      <button onClick={onBack} className="text-blue-500 underline mb-4">← Back</button>
      <img src={movie.Poster} className="w-full rounded" alt={movie.Title} />
      <h1 className="text-2xl font-bold mt-4">{movie.Title}</h1>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Cast:</strong> {movie.Actors}</p>
      <p className="mt-2">{movie.Plot}</p>
      <a
        href={`https://www.youtube.com/results?search_query=${movie.Title}+trailer`}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-red-500 underline"
      >
        Watch Trailer
      </a>
    </div>
  );
}