import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import filmRoll from "/images/film-roll.png"

const Header = () => (
  <div className="flex justify-between items-center bg-blue-500 h-full p-2">
    <div className="ms-5 w-[200px] flex items-center">
      <img src={filmRoll} className="w-[40px]" />
      <h1 className="ms-3 text-2xl font-bold text-white">Cinema</h1>
    </div>

    <div className="me-5">
      <Link to="/" className="text-white hover:text-white hover:underline me-5">Home</Link>
      <Link to="/favorites" className="text-white hover:text-white hover:underline me-5">Favorites</Link>
    </div>
  </div>
)

export default Header