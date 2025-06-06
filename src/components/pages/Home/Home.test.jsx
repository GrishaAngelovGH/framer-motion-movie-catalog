import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./Home"

test("should render pages/Home component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})