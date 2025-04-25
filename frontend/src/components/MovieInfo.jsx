import { Link, useLocation } from "react-router-dom";

function MovieInfo() {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) {
    return (
      <div className="max-w-xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-700 text-lg mb-4">Filme não encontrado.</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Movie Details</h1>
      <div className="bg-white shadow p-6 rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">{movie.name}</h2>
        <p className="text-gray-700">
          <span className="font-medium">Director:</span> {movie.director}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Duration:</span> {movie.duration} minutes
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Rating:</span> {movie.rating}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Genre:</span> {movie.genre}
        </p>
      </div>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Back to Movie List
        </Link>
      </div>
    </div>
  );
}

export default MovieInfo;

