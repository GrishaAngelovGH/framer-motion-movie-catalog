import { render } from "@testing-library/react"

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