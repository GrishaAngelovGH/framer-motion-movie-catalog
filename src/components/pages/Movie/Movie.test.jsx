import { render } from "@testing-library/react"

import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom"

import Movie from "./Movie"

test("should render pages/Movie component", () => {
  const routes = [
    {
      path: "/movies/:id",
      element: <Movie />
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ["/movies/1"]
  })

  const view = render(
    <RouterProvider router={router} />
  )

  expect(view).toMatchSnapshot()
})