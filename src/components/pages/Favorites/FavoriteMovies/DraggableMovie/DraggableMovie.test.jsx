import { render } from "@testing-library/react"

import DraggableMovie from "./DraggableMovie"

test("should render DraggableMovie component", () => {
  const view = render(
    <DraggableMovie movie={{ image: "image-1.jpg" }} />
  )

  expect(view).toMatchSnapshot()
})