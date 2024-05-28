import { render } from "@testing-library/react"

import Movie from "./Movie"

test("should render Movie component", () => {
  const view = render(
    <Movie movie={{ image: "poster.jpg", title: "Movie Title" }} />
  )

  expect(view).toMatchSnapshot()
})