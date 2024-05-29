import React from 'react'

import movies from "./movies.json"

const MovieProvider = ({ children }) => React.cloneElement(children, { movies })

export default MovieProvider