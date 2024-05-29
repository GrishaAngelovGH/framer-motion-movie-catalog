import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MovieCatalog from "./MovieCatalog"
import MovieProvider from "components/MovieProvider"

test("should render MovieCatalog component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={
          <MovieProvider>
            <MovieCatalog />
          </MovieProvider>
        } />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})