import { render } from "@testing-library/react"

import Favorites from "./Favorites"

import MovieProvider from "components/MovieProvider"

test("should render pages/Favorites component", () => {
  const view = render(
    <MovieProvider>
      <Favorites />
    </MovieProvider>
  )

  expect(view).toMatchSnapshot()
})