import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("http://localhost:8800");
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8800/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setMovies((prev) => prev.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Johan's Movie List
      </h1>

      <div className="mb-6">
        <Link
          to="/form"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Add Movie
        </Link>
      </div>

      <ul className="space-y-4">
        {movies.map((m) => (
          <li
            key={m.id}
            className="bg-white shadow-sm p-4 rounded-lg flex items-center justify-between hover:shadow-md transition"
          >
            <span className="text-lg font-medium text-gray-700">{m.name}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDelete(m.id)}
                className="text-red-600 hover:text-red-800 font-medium transition"
              >
                Delete
              </button>
              <Link
                to={`/form/${m.id}`}
                state={{ movie: m }}
                className="text-yellow-600 hover:text-yellow-800 font-medium transition"
              >
                Edit
              </Link>
              <Link
                to={`/movie/${m.id}`}
                state={{ movie: m }}
                className="text-blue-600 hover:text-blue-800 font-medium transition"
              >
                Show
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;

