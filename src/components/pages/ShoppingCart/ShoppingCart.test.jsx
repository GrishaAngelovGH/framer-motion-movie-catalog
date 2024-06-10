import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { vi } from "vitest"

import ShoppingCart from "./ShoppingCart"
import ComboBoxProvider from "components/ComboBoxProvider"

import persistentShoppingCart from "persistent/persistentShoppingCart"

test("should render pages/ShoppingCart component", () => {
  vi.spyOn(persistentShoppingCart, "getShoppingCart").mockReturnValue({ "12wer": { qty: 2 } })

  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={
          <ComboBoxProvider>
            <ShoppingCart />
          </ComboBoxProvider>
        } />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})