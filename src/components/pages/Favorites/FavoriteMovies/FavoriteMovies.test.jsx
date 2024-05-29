import { render } from "@testing-library/react"

import FavoriteMovies from "./FavoriteMovies"

import MovieProvider from "components/MovieProvider"

test("should render FavoriteMovies component", () => {
  const view = render(
    <MovieProvider>
      <FavoriteMovies />
    </MovieProvider>
  )

  expect(view).toMatchSnapshot()
})