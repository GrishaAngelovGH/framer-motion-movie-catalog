import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import persistentMovieCatalog from "persistent/persistentMovieCatalog"

import DraggableMovie from "./DraggableMovie"

const getFavoriteMovies = movies => {
  const favoriteMoviesIds = persistentMovieCatalog.getFavoriteMoviesIDs().map(Number)
  return movies.filter(v => favoriteMoviesIds.includes(v.id))
}

const useFavoriteMovies = movies => {
  const [favoriteMovies, setFavoriteMovies] = useState(getFavoriteMovies(movies))

  const updateFavoriteMovies = () => {
    setFavoriteMovies(getFavoriteMovies(movies))
  }

  return [favoriteMovies, updateFavoriteMovies]
}

const FavoriteMovies = ({ movies }) => {
  const [favoriteMovies, updateFavoriteMovies] = useFavoriteMovies(movies)

  const [background, setBackground] = useState(
    "linear-gradient(180deg, #1e40af 0%, rgb(30, 64, 175) 100%)"
  )

  return (
    <motion.div className="min-h-screen p-10" style={{ background }}>
      {
        !favoriteMovies.length && (
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "40%" }}
            transition={{ duration: 2 }}
            className="flex flex-col justify-center items-center text-white">
            <h1 className="border rounded-md p-2 shadow-xl">No favorite movies were found</h1>
            <Link to="/" className="mt-10 text-white text-xl hover:text-white hover:underline">Add some from the Movie Catalog</Link>
          </motion.div>
        )
      }
      {
        favoriteMovies.length > 0 && (
          <div className="min-h-full">
            <h1 className="text-white text-center">Slide to the right to remove</h1>
            {
              favoriteMovies.map(v => (
                <DraggableMovie
                  key={v.id}
                  movie={v}
                  updateFavoriteMovies={updateFavoriteMovies}
                  onBackgroundChange={setBackground}
                />
              ))
            }
          </div>
        )
      }
    </motion.div>
  )
}

export default FavoriteMovies