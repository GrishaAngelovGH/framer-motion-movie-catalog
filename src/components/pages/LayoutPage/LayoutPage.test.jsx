import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LayoutPage from "./LayoutPage"

const DummyComponent = () => <div>Content</div>

test("should render pages/LayoutPage component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage>
          <DummyComponent />
        </LayoutPage>} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})