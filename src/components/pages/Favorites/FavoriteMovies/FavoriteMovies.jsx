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

  const handleRemoveMovie = id => {
    persistentMovieCatalog.removeAsFavorite(id)
    setBackground("linear-gradient(180deg, #1e40af 0%, rgb(30, 64, 175) 100%)")
    updateFavoriteMovies()
  }

  return (
    <motion.div className="min-h-full p-10" style={{ background }}>
      {
        !favoriteMovies.length && (
          <div className="flex flex-col justify-center items-center text-white text-center">
            <h1 className="border rounded-md p-2 shadow-xl text-2xl md:text-5xl">No favorite movies were found</h1>
            <Link to="/" className="mt-10 text-white text-xl hover:text-white hover:underline">Add some from the Movie Catalog</Link>
          </div>
        )
      }
      {
        favoriteMovies.length > 0 && (
          <div className="min-h-full flex flex-col justify-center items-center">
            <h1 className="text-blue-800 text-center backdrop-blur-xl bg-white/30 p-2">Slide to the left to view description</h1>
            <h1 className="text-blue-800 text-center backdrop-blur-xl bg-white/30 p-2">Slide to the right to remove</h1>
            {
              favoriteMovies.map(v => (
                <DraggableMovie
                  key={v.id}
                  movie={v}
                  onRemove={handleRemoveMovie}
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