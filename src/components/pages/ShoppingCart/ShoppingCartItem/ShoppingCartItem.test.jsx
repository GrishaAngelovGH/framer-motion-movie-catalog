import { render } from "@testing-library/react"

import ShoppingCartItem from "./ShoppingCartItem"

test("should render ShoppingCartItem component", () => {
  const view = render(
    <ShoppingCartItem
      title="Shopping Cart Item"
      products={[{ image: "product-1.jpg", title: "Product 1", price: 3 }, { image: "product-2.jpg", title: "Product 2", price: 7 }]}
      qty={2}
      comboPrice={10}
      totalPrice={20}
    />
  )

  expect(view).toMatchSnapshot()
})