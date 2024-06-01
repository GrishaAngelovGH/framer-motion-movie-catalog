import { render } from "@testing-library/react"

import Carousel from "./Carousel"

test("should render Carousel component", () => {
  const view = render(
    <Carousel
      slides={[{ image: "image-1.jpg", paragraphs: ["content"] }]}
    />
  )

  expect(view).toMatchSnapshot()
})