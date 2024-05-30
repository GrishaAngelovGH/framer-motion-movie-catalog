import { useNavigate } from "react-router-dom"
import { motion, useMotionValue, useTransform } from "framer-motion"

const DraggableMovie = ({ movie: { id, image }, onRemove, onBackgroundChange }) => {
  // The component calculates the current background color 
  // when starting to drag to the right and applies it dynamically.

  const x = useMotionValue(0)

  const xInput = [-100, 0, 100]

  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
    "linear-gradient(180deg, #1e40af 0%, rgb(30, 64, 175) 100%)",
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)"
  ])

  const navigate = useNavigate()

  return (
    <motion.img
      style={{ x }}
      drag="x"
      src={`/images/${image}`}
      className="m-8 flex justify-center items-center rounded-md w-[200px] h-[350px] cursor-pointer"

      // Applies constraints on the permitted draggable area.
      // It can accept an object of optional top, left, right, and bottom values,
      // measured in pixels. This will define a distance the named edge of the draggable component.
      dragConstraints={{ left: 0, right: 0 }}

      onDragStart={() => {
        onBackgroundChange(background)
      }}

      onDragEnd={({ clientX }) => {
        if (clientX < 400) {
          navigate(`/movies/${id}`)
          return
        }

        if (clientX > 1000) {
          onRemove(id)
        }
      }}
    >
    </motion.img>
  )
}

export default DraggableMovie