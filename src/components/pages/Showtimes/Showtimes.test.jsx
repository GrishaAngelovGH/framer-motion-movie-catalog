import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieProvider from "components/providers/MovieProvider"

import Showtimes from "./Showtimes"

test("should render pages/Showtimes component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<MovieProvider><Showtimes /></MovieProvider>} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})

test("should render pages/Showtimes component with selected cinemas", async () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<MovieProvider><Showtimes /></MovieProvider>} />
      </Routes>
    </Router>
  )

  const addCinemasButton = screen.getByRole("button", { name: /Add Cinemas/i })

  fireEvent.click(addCinemasButton)

  const cinema = (await screen.findAllByTestId("cinema")).at(0)
  fireEvent.click(cinema)

  const closeBtn = (await screen.findAllByTestId("close")).at(0)
  fireEvent.click(closeBtn)

  expect(view).toMatchSnapshot()
})