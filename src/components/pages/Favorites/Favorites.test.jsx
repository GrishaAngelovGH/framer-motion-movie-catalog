import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Favorites from "./Favorites"

test("should render pages/Favorites component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<Favorites />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})