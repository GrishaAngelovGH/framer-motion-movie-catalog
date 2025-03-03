import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "components/pages/Home"
import Movie from "components/pages/Movie"
import Favorites from "components/pages/Favorites"
import Experiences from "components/pages/Experiences"
import ShoppingCart from "components/pages/ShoppingCart"
import Showtimes from "components/pages/Showtimes"
import ComboBoxProvider from "components/providers/ComboBoxProvider"
import MovieProvider from "components/providers/MovieProvider"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/experiences" element={<ComboBoxProvider><Experiences /></ComboBoxProvider>} />
        <Route path="/shopping-cart" element={<ComboBoxProvider><ShoppingCart /></ComboBoxProvider>} />
        <Route path="/showtimes" element={<MovieProvider><Showtimes /></MovieProvider>} />
      </Routes>
    </Router>
  )
}

export default App
