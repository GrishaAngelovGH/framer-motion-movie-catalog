import { render, screen, fireEvent } from "@testing-library/react"
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

test("should render pages/Experiences component with shopping cart button", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<Experiences />} />
      </Routes>
    </Router>
  )

  const AddToCartButton = screen.getAllByRole("button", { name: /Add To Cart/i })[0]
  fireEvent.click(AddToCartButton)

  expect(view).toMatchSnapshot()
  expect(screen.getByTestId("shopping-cart")).toBeInTheDocument()
})