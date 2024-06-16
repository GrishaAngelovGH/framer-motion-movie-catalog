import Cinema from "./Cinema"
import SelectedCinemas from "./SelectedCinemas"

const allCinemas = {
  "2120314137789540": { id: "2120314137789540", name: "Acton", address: "Royale Leisure Park, Kendal Avenue, London" },
  "9604801004817922": { id: "9604801004817922", name: "London Haymarket", address: "11/18 Panton Street, London" },
  "8498625877351675": { id: "8498625877351675", name: "London Leicester Square", address: "22-24 Leicester Square, London" },
  "6127704012543322": { id: "6127704012543322", name: "London West End", address: "38A Leicester Square , London" },
  "4513144748187281": { id: "4513144748187281", name: "Leicester", address: "Freemens Park, 90 Aylestone Road, Leicester" },
  "2149127537035087": { id: "2149127537035087", name: "Liverpool Switch Island", address: "Dunningsbridge Road, Bootle, Liverpool" },
  "3111878685449305": { id: "3111878685449305", name: "Sheffield", address: "Arundel Gate, Sheffield" }
}

const CinemaModal = ({ cinemas, onClose, onClick, onRemove }) => {
  const handleClick = id => {
    onClick(allCinemas[id])
  }

  return (
    <div className="fixed top-0 bg-black bg-opacity-75 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-[320px] md:w-3/4 xl:w-1/2">
        <div className="flex justify-between items-center bg-gray-100 shadow-lg p-3">
          <h1 className="text-2xl text-center">Available Cinemas</h1>

          <svg data-testid="close" onClick={onClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:bg-gray-400 hover:text-white hover:rounded-full hover:p-1 hover:cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        {
          cinemas.length > 0 && (
            <SelectedCinemas cinemas={cinemas} onRemove={onRemove} />
          )
        }
        <div className="max-h-[300px] overflow-auto">
          {
            Object.values(allCinemas).map(v => (
              <Cinema key={v.id} {...v} onClick={handleClick} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CinemaModal