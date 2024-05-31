import { Link, useLocation } from "react-router-dom"

import filmRoll from "/images/film-roll.png"

const Header = () => {
  const { pathname } = useLocation()

  const links = [
    { to: "/", label: "Home", active: "/" === pathname },
    { to: "/favorites", label: "Favorites", active: "/favorites" === pathname }
  ]

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 h-full p-2">
      <Link to="/" className="ms-5 flex items-center">
        <img src={filmRoll} className="w-[40px]" />
        <h1 className="ms-3 text-2xl font-bold text-blue-900">Cinema</h1>
      </Link>

      <div className="m-5 grid grid-rows-2 grid-cols-2 gap-2 md:grid-flow-col md:grid-rows-1">
        {
          links.map((v, i) => (
            <Link key={i} to={v.to} className={`text-white text-center hover:text-white hover:underline me-5 ${v.active ? "bg-blue-800 p-2 rounded-full" : "bg-transparent p-2"}`}>{v.label}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default Header