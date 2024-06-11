import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MovieDescription from "./MovieDescription"
import MovieProvider from "components/providers/MovieProvider"

test("should render MovieDescription component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={
          <MovieProvider>
            <MovieDescription id={1} />
          </MovieProvider>
        }
        />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})