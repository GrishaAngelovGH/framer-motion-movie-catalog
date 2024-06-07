import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ShoppingCart from "./ShoppingCart"

test("should render pages/ShoppingCart component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})