import { useState } from "react"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"

import persistentMovieCatalog from "persistent/persistentMovieCatalog"

const Movie = ({ movie: { id, image, title } }) => {
  const [isFavorite, setFavorite] = useState(false)
  const [isUnmarkedAsFavorite, setUnmarkedAsFavorite] = useState(false)

  const handleMarkAsFavorite = () => {
    setFavorite(!isFavorite)
    persistentMovieCatalog.saveAsFavorite(id)
  }

  const handleUnmarkAsFavorite = () => {
    setUnmarkedAsFavorite(!isUnmarkedAsFavorite)
    persistentMovieCatalog.removeAsFavorite(id)
  }

  const isFavoriteMovie = persistentMovieCatalog.isFavorite(id)

  return (
    <div className="flex">
      <Link to={`/movies/${id}`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative text-center m-8 mb-0 w-[220px]"
        >
          {
            isFavorite && (
              <motion.div
                initial={{ opacity: "0%" }}
                animate={{ opacity: "100%" }}
                transition={{ duration: 1 }}
                className="absolute w-full bg-white rounded-lg h-[350px] flex flex-col justify-center items-center text-green-600"
              >
                <motion.svg
                  initial={{ scale: 1 }}
                  animate={{ scale: 2 }}
                  transition={{ duration: 3 }}
                  onAnimationComplete={() => setFavorite(!isFavorite)}
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </motion.svg>
                <p className="font-bold mt-5">Added as a Favorite</p>
              </motion.div>
            )
          }
          {
            isUnmarkedAsFavorite && (
              <motion.div
                initial={{ opacity: "0%" }}
                animate={{ opacity: "100%" }}
                transition={{ duration: 1 }}
                className="absolute w-full bg-white rounded-lg h-[350px] flex flex-col justify-center items-center text-red-600"
              >
                <motion.svg
                  initial={{ scale: 1 }}
                  animate={{ scale: 2 }}
                  transition={{ duration: 3 }}
                  onAnimationComplete={() => setUnmarkedAsFavorite(!isUnmarkedAsFavorite)}
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </motion.svg>
                <p className="font-bold mt-5">Removed as a Favorite</p>
              </motion.div>
            )
          }
          <img src={`/images/${image}`} className="rounded-lg h-[350px]" />
          <motion.p
            className="text-xl text-white h-[90px] mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 1, delay: 4 }}
          >
            {title}
          </motion.p>
        </motion.div>
      </Link>

      {
        isFavoriteMovie ? (
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 1, delay: 4 }}
            onClick={handleUnmarkAsFavorite}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white mt-8 cursor-pointer"
          >
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </motion.svg>
        ) : (
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 1, delay: 4 }}
            onClick={handleMarkAsFavorite}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white mt-8 cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </motion.svg>
        )
      }
    </div>
  )
}

export default Movie