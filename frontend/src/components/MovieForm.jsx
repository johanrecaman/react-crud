import { Link, useNavigate, useLocation } from "react-router-dom";

function MovieForm() {
  const location = useLocation();
  const { movie } = location.state || {};
  const { id } = movie || {};
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      director: form.director.value,
      duration: Number(form.duration.value),
      rating: Number(form.rating.value),
      genre: form.genre.value,
    };

    try {
      let response;
      if (id) {
        response = await fetch(`http://localhost:8800/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } else {
        response = await fetch("http://localhost:8800/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }

      if (!response.ok) throw new Error("Erro na resposta");

      alert(id ? "Filme atualizado com sucesso!" : "Filme adicionado com sucesso!");
      form.reset();
      navigate("/");
    } catch (err) {
      alert("Erro ao adicionar/atualizar filme");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {id ? "Edit Movie" : "Add Movie"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={movie ? movie.name : ""}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Director</label>
          <input
            type="text"
            name="director"
            defaultValue={movie ? movie.director : ""}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Duration (minutes)</label>
          <input
            type="number"
            name="duration"
            defaultValue={movie ? movie.duration : ""}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            defaultValue={movie ? movie.rating : ""}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            defaultValue={movie ? movie.genre : ""}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {id ? "Update Movie" : "Add Movie"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-blue-600 hover:underline hover:text-blue-800 transition"
        >
          Back to Movies
        </Link>
      </div>
    </div>
  );
}

export default MovieForm;
