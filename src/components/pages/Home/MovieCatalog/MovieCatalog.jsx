import { motion } from "framer-motion"

import Movie from "./Movie"

import movies from "./movies.json"

const MovieCatalog = () => {
  const cols = []
  const allMovies = [...movies]

  while (allMovies.length) {
    const col = allMovies.splice(0, 4)
    cols.push(col)
  }

  return (
    <div className="bg-blue-800 min-h-full flex flex-col md:flex-row justify-center items-center">
      {
        cols.map((items, i) => (
          <motion.div key={i} className="flex flex-col" initial={{ x: `-${i + 1}00%` }} animate={{ x: "0%" }} transition={{ duration: 3, delay: 1 }}>
            {
              items.map(v => (<Movie key={v.id} movie={v} />))
            }
          </motion.div>
        ))
      }
    </div>
  )
}

export default MovieCatalog