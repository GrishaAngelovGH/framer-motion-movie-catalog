import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"

import Home from "components/pages/Home"
import Movie from "components/pages/Movie"
import MovieProvider from "components/MovieProvider"

function App() {
  const MovieRoute = () => {
    const { id } = useParams()

    return (
      <MovieProvider>
        <Movie id={id} />
      </MovieProvider>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieRoute />} />
      </Routes>
    </Router>
  )
}

export default App
