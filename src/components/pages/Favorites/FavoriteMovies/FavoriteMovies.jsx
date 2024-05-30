import { useState } from "react"
import { Link } from "react-router-dom"

import { motion, useMotionValue, useTransform } from "framer-motion"

import persistentMovieCatalog from "persistent/persistentMovieCatalog"

const DraggableBox = ({ title, onBackgroundChange }) => {
  // The component calculates the current background color 
  // when starting to drag to the right and applies it dynamically.

  const x = useMotionValue(0)

  const xInput = [0, 100]

  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #1e40af 0%, rgb(30, 64, 175) 100%)",
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)"
  ])

  return (
    <motion.div
      className="m-8 flex justify-center items-center rounded-md w-[200px] h-[200px] bg-white"
      style={{ x }}
      drag="x"

      // Disable drag to left, the right degree of movement is set to default 
      dragElastic={{ left: 0, right: 0.5 }}

      // Applies constraints on the permitted draggable area.
      // It can accept an object of optional top, left, right, and bottom values,
      // measured in pixels. This will define a distance the named edge of the draggable component.
      dragConstraints={{ left: 0, right: 0 }}

      onDragStart={(e) => {
        onBackgroundChange(background)
      }}

      onDragEnd={(e) => {
        if (e.clientX < 400) {
          console.log("ignored")
          return
        }

        console.log("accepted")
      }}
    >
      {title}
    </motion.div>
  )
}

const FavoriteMovies = ({ movies }) => {
  const [background, setBackground] = useState(
    "linear-gradient(180deg, #1e40af 0%, rgb(30, 64, 175) 100%)"
  )

  const favoriteMoviesIds = persistentMovieCatalog.getFavoriteMovies().map(Number)

  const favoriteMovies = movies.filter(v => favoriteMoviesIds.includes(v.id))

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
          <>
            <h1 className="text-white text-center">Slide to the right to remove</h1>
            {
              favoriteMovies.map(v => <DraggableBox key={v.id} title={v.title} onBackgroundChange={setBackground} />)
            }
          </>
        )
      }
    </motion.div>
  )
}

export default FavoriteMovies