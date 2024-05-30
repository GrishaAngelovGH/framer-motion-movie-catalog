import { render } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import DraggableMovie from "./DraggableMovie"

test("should render DraggableMovie component", () => {
  const view = render(
    <Router>
      <Routes>
        <Route path="/" element={<DraggableMovie movie={{ image: "image-1.jpg" }} />} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})