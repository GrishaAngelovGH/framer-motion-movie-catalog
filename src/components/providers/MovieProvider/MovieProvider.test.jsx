import { render } from "@testing-library/react"

import MovieProvider from "./MovieProvider"

const DummyComponent = ({ movies }) => <div>{movies.length}</div>

test("should render MovieProvider component", () => {
  const view = render(
    <MovieProvider>
      <DummyComponent />
    </MovieProvider>
  )

  expect(view).toMatchSnapshot()
})