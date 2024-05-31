import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FastAverageColor } from "fast-average-color"

import Layout from "components/Layout"
import Header from "components/Header"

const color = new FastAverageColor()

const MovieDescription = ({ id, movies }) => {
  const [bgColor, setBgColor] = useState("")

  const imgRef = useRef()

  const movie = movies.find(v => v.id === Number(id))

  useEffect(() => {
    color.getColorAsync(imgRef.current)
      .then(color => {
        setBgColor(color.hex)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <Layout header={<Header />}>
      <div className="text-white min-h-full" style={{ background: bgColor }}>
        <motion.h1
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 2 }}
          className="text-center bg-blue-900 mb-5 p-3"
        >
          {movie.title}
        </motion.h1>

        <div className="flex flex-col items-center md:flex-row md:justify-around overflow-hidden pb-6">
          <motion.div
            initial={{ x: "-100%", display: "none" }}
            animate={{ x: "0%", display: "flex", flexDirection: "column", alignItems: "center" }}
            transition={{ duration: 2, delay: 1 }}
            className="pb-6 text-xl"
          >
            <img ref={imgRef} src={`/images/${movie.image}`} className="rounded-lg w-[220px] h-[350px]" />
            <p className="m-2">Runtime: {movie.runtime}</p>
            <p className="m-2">Release Date: {movie.releaseDate}</p>
          </motion.div>

          <motion.div
            initial={{ x: "100%", display: "none" }}
            animate={{ x: "0%", display: "block" }}
            transition={{ duration: 2, delay: 1 }}
            className="w-3/4 md:w-1/2"
          >
            <p className="text-2xl">Description</p>
            <p className="text-xl mt-5">{movie.description}</p>

            <p className="text-2xl mt-5">Cast</p>
            <p className="text-xl mt-5">{movie.cast.toString()}</p>

            <p className="text-2xl mt-5">Genres</p>
            <p className="text-xl mt-5">{movie.genres.toString()}</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default MovieDescription