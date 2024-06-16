import { render } from "@testing-library/react"

import Cinema from "./Cinema"

test("should render Cinema component", () => {
  const view = render(<Cinema id="123" name="Cinema Name" address="Cinema Address" />)

  expect(view).toMatchSnapshot()
})