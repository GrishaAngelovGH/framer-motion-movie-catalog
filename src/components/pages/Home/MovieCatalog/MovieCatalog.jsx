import { motion } from "framer-motion"

import Movie from "./Movie"

import movies from "./movies.json"

const MovieCatalog = () => {
  const values = [
    -100, -200, -300, -400,
    -100, -200, -300, -400,
    -100, -200, -300, -400,
    -100, -200, -300, -400,
  ]

  return (
    <div className="bg-blue-800 min-h-full grid place-items-center lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {
          movies.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ x: `${values[i]}%` }}
              animate={{ x: "0%" }}
              transition={{ duration: 3, delay: 1 }}
            >
              <Movie movie={v} />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default MovieCatalog