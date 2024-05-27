import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/details" element={<h1>Details</h1>} />
      </Routes>
    </Router>
  )
}

export default App
