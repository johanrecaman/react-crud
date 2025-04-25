import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/form" element={<MovieForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
