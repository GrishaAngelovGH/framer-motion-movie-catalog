import { motion } from "framer-motion"

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
              items.map(v => (
                <div key={v.id} className="text-center m-5 md:w-[160px] lg:w-[220px]">
                  <img src={`images/${v.image}`} className="rounded-lg min-h-[350px]" />
                  <motion.p
                    className="text-xl text-white  h-[55px] mt-2"
                    initial={{ opacity: 0 }} animate={{ opacity: "100%" }} transition={{ duration: 1, delay: 4 }}
                  >
                    {v.title}
                  </motion.p>
                </div>
              ))
            }
          </motion.div>
        ))
      }
    </div>
  )
}

export default MovieCatalog