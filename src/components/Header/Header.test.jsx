import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./Header"

test("should render Header component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})