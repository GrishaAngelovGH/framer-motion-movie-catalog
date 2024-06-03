import { render, screen, fireEvent } from "@testing-library/react"
import { expect, vi } from "vitest"

import ComboBox from "./ComboBox"

test("should render ComboBox component", () => {
  const view = render(
    <ComboBox
      title="Combo Box Title"
      products={[{ image: "image-1.jpg", title: "Product Title", price: 5 }]}
    />
  )

  expect(view).toMatchSnapshot()
})

test("should render ComboBox component with added items to shopping cart", () => {
  const onAddToCart = vi.fn()

  const view = render(
    <ComboBox
      title="Combo Box Title"
      id={123}
      products={[{ image: "image-1.jpg", title: "Product Title", price: 5 }]}
      onAddToCart={onAddToCart}
    />
  )

  const AddToCartButton = screen.getByRole("button", { name: /Add To Cart/i })

  fireEvent.click(AddToCartButton)

  expect(view).toMatchSnapshot()
  expect(onAddToCart).toBeCalledTimes(1)
  expect(onAddToCart).toBeCalledWith(123)
})