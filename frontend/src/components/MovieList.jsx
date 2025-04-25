import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

function MovieList(){
  const[movies, setMovies] = useState([])

  useEffect(()=>{
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:8800');
      const data = await response.json();
      setMovies(data);
    }
    fetchMovies();
  },[])

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8800/${id}`,{
      method: 'DELETE',
    })
    if(response.ok){
      setMovies((prev)=> prev.filter((m) => m.id != id))
    }
  }


  return(
    <>
      <h1>Johan's movie list:</h1>
      <Link to="/form">add</Link>
      <ul>
        {movies.map((m)=>(
          <li key={m.id}>{m.name}
            <button onClick={()=> handleDelete(m.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MovieList
