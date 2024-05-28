import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"

import Home from "./components/pages/Home"
import Movie from "./components/pages/Movie"

function App() {
  const MovieRoute = () => {
    const { id } = useParams()
    return (<Movie id={id} />)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieRoute />} />
      </Routes>
    </Router>
  )
}

export default App
