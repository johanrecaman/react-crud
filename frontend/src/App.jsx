import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'
import MovieInfo from "./components/MovieInfo"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/form/:id" element={<MovieForm/>}/>
        <Route path="/form" element={<MovieForm/>}/>
        <Route path="/movie/:id" element={<MovieInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
