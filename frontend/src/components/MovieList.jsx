import { useEffect, useState } from "react"

function MovieList(){
  const[movies, setMovies] = useState([])

  useEffect(()=>{
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:8800');
      const data = await response.json();
      console.log(data);
      setMovies(data);
    }
    fetchMovies();
  },[])

  return(
    <>
      <h1>Johan's movie list:</h1>
      <ul>
        {movies.map((m)=>(
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </>
  )
}

export default MovieList
