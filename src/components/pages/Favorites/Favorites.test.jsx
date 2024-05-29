import { render } from "@testing-library/react"

import Favorites from "./Favorites"

test("should render pages/Favorites component", () => {
  const view = render(<Favorites />)

  expect(view).toMatchSnapshot()
})