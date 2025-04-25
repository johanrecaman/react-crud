import { Link, useLocation } from "react-router-dom";

function MovieInfo() {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) {
    return (
      <div className="max-w-md mx-auto mt-10 bg-red-50 text-red-800 p-6 rounded-2xl shadow-md text-center space-y-4">
        <p className="text-lg font-semibold">Movie not found.</p>
        <Link
          to="/"
          className="text-sm text-indigo-600 hover:underline"
        >
          Back to Movie List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Movie Details</h1>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-indigo-600">{movie.name}</h2>
        <p><span className="font-medium text-gray-700">Director:</span> {movie.director}</p>
        <p><span className="font-medium text-gray-700">Duration:</span> {movie.duration} minutes</p>
        <p><span className="font-medium text-gray-700">Rating:</span> {movie.rating}</p>
        <p><span className="font-medium text-gray-700">Genre:</span> {movie.genre}</p>
      </div>
      <Link
        to="/"
        className="inline-block text-indigo-600 hover:underline text-sm"
      >
        Back to Movie List
      </Link>
    </div>
  );
}

export default MovieInfo;
