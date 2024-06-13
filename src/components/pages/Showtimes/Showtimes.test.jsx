import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Showtimes from "./Showtimes"

test("should render pages/Showtimes component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<Showtimes />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})