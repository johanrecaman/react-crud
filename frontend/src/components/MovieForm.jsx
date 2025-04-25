import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function MovieForm() {
  const location = useLocation();
  const { movie } = location.state || {};
  const { id } = movie || {};
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      director: form.director.value.trim(),
      duration: Number(form.duration.value),
      rating: Number(form.rating.value),
      genre: form.genre.value.trim(),
    };

    // Validação simples no frontend
    if (!data.name || !data.director || !data.duration || !data.rating || !data.genre) {
      return setError("Please fill in all fields.");
    }

    try {
      const response = await fetch(`http://localhost:8800/${id || ""}`, {
        method: id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Unexpected error");
      }

      setSuccess(id ? "Movie updated successfully!" : "Movie added successfully!");
      form.reset();
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setError(err.message || "Failed to save movie.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">{id ? "Edit Movie" : "Add Movie"}</h1>

      {error && <p className="text-red-600 bg-red-100 p-2 rounded">{error}</p>}
      {success && <p className="text-green-600 bg-green-100 p-2 rounded">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "director", "duration", "rating", "genre"].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 capitalize">
              {field}
            </label>
            <input
              type={field === "duration" || field === "rating" ? "number" : "text"}
              step={field === "rating" ? "0.1" : undefined}
              name={field}
              defaultValue={movie ? movie[field] : ""}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition"
        >
          {id ? "Update Movie" : "Add Movie"}
        </button>
      </form>

      <div className="pt-4">
        <Link
          to="/"
          className="text-indigo-600 hover:underline text-sm"
        >
          Back to Movie List
        </Link>
      </div>
    </div>
  );
}

export default MovieForm;

