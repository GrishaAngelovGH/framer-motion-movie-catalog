import { motion } from "framer-motion"

const Movie = ({ movie: { image, title } }) => {
  return (
    <div className="flex">
      <div className="text-center">
        <motion.div whileHover={{ scale: 1.1 }} className="m-8 mb-0 md:w-[160px] lg:w-[220px]">
          <img src={`images/${image}`} className="rounded-lg min-h-[350px]" />
          <motion.p
            className="text-xl text-white h-[90px] mt-2"
            initial={{ opacity: 0 }} animate={{ opacity: "100%" }} transition={{ duration: 1, delay: 4 }}
          >
            {title}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Movie