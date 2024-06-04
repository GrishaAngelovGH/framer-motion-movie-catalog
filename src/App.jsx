import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "components/pages/Home"
import Movie from "components/pages/Movie"
import Favorites from "components/pages/Favorites"
import Experiences from "components/pages/Experiences"
import ShoppingCart from "components/pages/ShoppingCart"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  )
}

export default App
