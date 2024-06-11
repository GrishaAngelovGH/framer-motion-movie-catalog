import { useParams } from "react-router-dom"

import MovieDescription from "./MovieDescription"
import MovieProvider from "components/providers/MovieProvider"

const Movie = () => {
  const { id } = useParams()

  return (
    <MovieProvider>
      <MovieDescription id={id} />
    </MovieProvider>
  )
}

export default Movie