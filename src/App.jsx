import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<h1>Details</h1>} />
      </Routes>
    </Router>
  )
}

export default App
