import { render } from "@testing-library/react"

import CinemaModal from "./CinemaModal"

test("should render CinemaModal component", () => {
  const view = render(<CinemaModal />
  )

  expect(view).toMatchSnapshot()
})