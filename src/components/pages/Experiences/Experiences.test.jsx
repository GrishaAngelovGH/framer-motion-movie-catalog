import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Experiences from "./Experiences"

test("should render pages/Experiences component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<Experiences />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})