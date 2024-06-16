import { render } from "@testing-library/react"

import SelectedCinemas from "./SelectedCinemas"

test("should render SelectedCinemas component", () => {
  const view = render(
    <SelectedCinemas cinemas={[
      { id: "8498625877351675", name: "London Leicester Square", address: "22-24 Leicester Square, London" }
    ]} />
  )

  expect(view).toMatchSnapshot()
})