import { render } from "@testing-library/react"

import ShoppingCart from "./ShoppingCart"

test("should render pages/ShoppingCart component", () => {
  const view = render(<ShoppingCart />)

  expect(view).toMatchSnapshot()
})