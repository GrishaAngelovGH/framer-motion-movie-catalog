import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "components/pages/Home"
import Movie from "components/pages/Movie"
import Favorites from "components/pages/Favorites"
import Experiences from "components/pages/Experiences"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </Router>
  )
}

export default App
