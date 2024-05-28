import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MovieCatalog from "./MovieCatalog"

test("should render MovieCatalog component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<MovieCatalog />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})