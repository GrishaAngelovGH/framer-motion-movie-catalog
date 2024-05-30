import { vi } from "vitest"
import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import FavoriteMovies from "./FavoriteMovies"

import MovieProvider from "components/MovieProvider"

import persistentMovieCatalog from "persistent/persistentMovieCatalog"

test("should render FavoriteMovies component", () => {
  vi.spyOn(persistentMovieCatalog, 'getFavoriteMoviesIDs').mockReturnValue(["1", "2"])

  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={
          <MovieProvider>
            <FavoriteMovies />
          </MovieProvider>
        } />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})

test("should render FavoriteMovies component without favorite movies", () => {
  vi.spyOn(persistentMovieCatalog, 'getFavoriteMoviesIDs').mockReturnValue([])

  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={
          <MovieProvider>
            <FavoriteMovies />
          </MovieProvider>
        } />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})