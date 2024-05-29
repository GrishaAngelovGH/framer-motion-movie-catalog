import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Movie from "./Movie"
import MovieProvider from "components/MovieProvider"

test("should render pages/Movie component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={
          <MovieProvider>
            <Movie id={1} />
          </MovieProvider>
        }
        />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})