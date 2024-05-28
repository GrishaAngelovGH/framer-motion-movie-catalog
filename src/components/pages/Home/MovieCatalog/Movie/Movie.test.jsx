import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Movie from "./Movie"

test("should render Movie component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={
          <Movie movie={{ image: "poster.jpg", title: "Movie Title" }} />
        } />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})