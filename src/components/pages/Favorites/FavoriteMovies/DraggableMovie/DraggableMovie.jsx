import { motion, useMotionValue, useTransform } from "framer-motion"

import persistentMovieCatalog from "persistent/persistentMovieCatalog"

const DraggableMovie = ({ movie: { id, image }, updateFavoriteMovies, onBackgroundChange }) => {
  // The component calculates the current background color 
  // when starting to drag to the right and applies it dynamically.

  const x = useMotionValue(0)

  const xInput = [0, 100]

  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #1e40af 0%, rgb(30, 64, 175) 100%)",
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)"
  ])

  return (
    <motion.img
      style={{ x }}
      drag="x"
      src={`/images/${image}`}
      className="m-8 flex justify-center items-center rounded-md w-[200px] h-[350px] cursor-pointer"

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
          return
        }

        persistentMovieCatalog.removeAsFavorite(id)
        onBackgroundChange("linear-gradient(180deg, #1e40af 0%, rgb(30, 64, 175) 100%)")
        updateFavoriteMovies()
      }}
    >
    </motion.img>
  )
}

export default DraggableMovie