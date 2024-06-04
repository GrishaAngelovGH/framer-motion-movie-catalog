import { render } from "@testing-library/react"

import ComboBoxProvider from "./ComboBoxProvider"

const DummyComponent = ({ comboBoxes }) => <div>{Object.keys(comboBoxes).length}</div>

test("should render ComboBoxProvider component", () => {
  const view = render(
    <ComboBoxProvider>
      <DummyComponent />
    </ComboBoxProvider>
  )

  expect(view).toMatchSnapshot()
})