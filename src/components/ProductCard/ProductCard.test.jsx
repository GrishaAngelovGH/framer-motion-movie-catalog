import { render } from "@testing-library/react"

import ProductCard from "./ProductCard"

test("should render ProductCard component", () => {
  const view = render(
    <ProductCard
      image="image-1.jpg"
      title="Product Title"
      content="Product Content"
    />
  )

  expect(view).toMatchSnapshot()
})