import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "components/pages/Home"
import Movie from "components/pages/Movie"
import Favorites from "components/pages/Favorites"
import Layout from "components/Layout"
import Header from "components/Header"
import MovieProvider from "components/MovieProvider"

function App() {
  const FavoritesRoute = () => (
    <Layout header={<Header />}>
      <MovieProvider>
        <Favorites />
      </MovieProvider>
    </Layout>
  )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<FavoritesRoute />} />
      </Routes>
    </Router>
  )
}

export default App
