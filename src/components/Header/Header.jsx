import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import filmRoll from "/images/film-roll.png"

const Header = () => (
  <div className="flex justify-between items-center bg-blue-500 h-full">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
      className="ms-5 w-[200px] flex justify-between items-center"
    >
      <img src={filmRoll} className="w-[40px]" />
      <h1 className="text-4xl font-bold text-white">Cinema</h1>
    </motion.div>

    <div className="me-5">
      <Link to="/" className="text-white hover:text-white hover:underline">Home</Link>
    </div>
  </div>
)

export default Header