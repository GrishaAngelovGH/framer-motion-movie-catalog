import { render } from "@testing-library/react"

import CinemaModal from "./CinemaModal"

test("should render CinemaModal component", () => {
  const cinemas = [
    { id: "2120314137789540", name: "Acton", address: "Royale Leisure Park, Kendal Avenue, London" },
    { id: "9604801004817922", name: "London Haymarket", address: "11/18 Panton Street, London" }
  ]

  const view = render(<CinemaModal cinemas={cinemas} />)

  expect(view).toMatchSnapshot()
})