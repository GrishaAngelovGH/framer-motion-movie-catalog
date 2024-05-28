import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Movie from "./Movie"

test("should render pages/Movie component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})