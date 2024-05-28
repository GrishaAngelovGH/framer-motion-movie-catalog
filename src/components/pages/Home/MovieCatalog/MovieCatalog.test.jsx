import { render } from "@testing-library/react"

import MovieCatalog from "./MovieCatalog"

test("should render MovieCatalog component", () => {
  const view = render(<MovieCatalog />)

  expect(view).toMatchSnapshot()
})