import { render } from "@testing-library/react"

import Layout from "./Layout"

test("should render Layout component", () => {
  const view = render(
    <Layout header={<h1>Header</h1>}>
      <h1>Content</h1>
    </Layout>
  )

  expect(view).toMatchSnapshot()
})