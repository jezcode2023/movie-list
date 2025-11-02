function MovieCard({ movie }) {
  return (
    <div className="bg-black shadow rounded-lg text-center text-black">
      <img
        src={movie.Poster !== "" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="font-bold mt-2">{movie.Title}</h2>
      <p className="text-sm text-gray-600 mb-2">{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
