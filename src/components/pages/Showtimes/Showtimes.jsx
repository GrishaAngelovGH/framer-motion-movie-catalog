import { useState } from "react"
import { Link } from "react-router-dom"

import LayoutPage from "components/pages/LayoutPage"
import CinemaModal from "components/CinemaModal"

const allShowtimes = {
  "2120314137789540": [{ movieId: 1, startTime: "09:15", screenName: "Screen 1" }, { movieId: 2, startTime: "10:15", screenName: "Screen 2" }],
  "9604801004817922": [{ movieId: 3, startTime: "11:15", screenName: "Screen 3" }, { movieId: 4, startTime: "12:15", screenName: "Screen 4" }],
  "8498625877351675": [{ movieId: 5, startTime: "13:15", screenName: "Screen 5" }, { movieId: 6, startTime: "14:15", screenName: "Screen 6" }],
  "6127704012543322": [{ movieId: 7, startTime: "15:15", screenName: "Screen 7" }, { movieId: 8, startTime: "16:15", screenName: "Screen 8" }]
}

const Showtimes = ({ movies }) => {
  const [selectedCinemas, setSelectedCinemas] = useState({})
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    !setShowModal(!showModal)
  }

  const handleCinemaClick = cinema => {
    setSelectedCinemas({
      ...selectedCinemas,
      [cinema.id]: cinema
    })
  }

  const handleRemoveCinema = id => {
    // eslint-disable-next-line no-unused-vars
    const { [id]: value, ...restCinemas } = selectedCinemas
    setSelectedCinemas(restCinemas)
  }

  const cinemas = Object.values(selectedCinemas)

  return (
    <LayoutPage>
      <div className="bg-blue-800 min-h-full flex flex-col items-center">
        {showModal && (<CinemaModal cinemas={cinemas} onClose={toggleModal} onClick={handleCinemaClick} onRemove={handleRemoveCinema} />)}

        <div className="m-10 md:w-1/2">
          <div className="bg-blue-900 text-white rounded-t-md p-3">
            Show me times for <span onClick={toggleModal} className="text-blue-500 hover:text-blue-400 hover:cursor-pointer">Cinemas</span>
          </div>
          {
            !cinemas.length && (
              <div className="border-2 border-blue-900 border-t-0 rounded-b-md p-5 flex flex-col items-center text-white text-2xl text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[200px] h-[200px] text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                </svg>
                <h3 className="m-1">Please choose a cinema</h3>
                <h3 className="m-1">Where would you like to see the film?</h3>
                <button
                  onClick={toggleModal}
                  className="mt-10 bg-slate-400 hover:bg-slate-300 text-gray-600 p-2 rounded-md cursor-pointer"
                >
                  Add Cinemas
                </button>
              </div>
            )
          }
          {
            cinemas.map(v => {
              const showtimes = allShowtimes[v.id] ?? []

              return (
                <div key={v.id} className="bg-white border rounded-md m-2 p-2">
                  <div className="text-2xl ps-2">{v.name}</div>
                  <div className="text-xl text-gray-500 ps-2 mb-2">{v.address}</div>
                  {
                    !showtimes.length && (
                      <div className="text-2xl ps-2 text-red-500">No movies were found</div>
                    )
                  }
                  {
                    showtimes.map(({ movieId, startTime, screenName }) => {
                      const movie = movies.find(v => v.id === movieId)

                      return (
                        <div key={movieId} className="m-2 border border-gray-400 rounded-md p-2">
                          <Link to={`/movies/${movieId}`} className="mb-2 bg-blue-500 text-white hover:text-white p-2 rounded-md inline-block">{movie.title}</Link>
                          <div className="ms-2">Start Time: {startTime}</div>
                          <div className="ms-2">Screen Name: {screenName}</div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </LayoutPage>
  )
}

export default Showtimes