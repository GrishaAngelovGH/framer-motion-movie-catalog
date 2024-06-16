import Cinema from "./Cinema"

const cinemas = [
  { id: "21203141377895407", name: "Acton", address: "Royale Leisure Park, Kendal Avenue, London" },
  { id: "9604801004817922", name: "London Haymarket", address: "11/18 Panton Street, London" },
  { id: "8498625877351675", name: "London Leicester Square", address: "22-24 Leicester Square, London" },
  { id: "6127704012543322", name: "London West End", address: "38A Leicester Square , London" },
  { id: "4513144748187281", name: "Leicester", address: "Freemens Park, 90 Aylestone Road, Leicester" },
  { id: "2149127537035087", name: "Liverpool Switch Island", address: "Dunningsbridge Road, Bootle, Liverpool" },
  { id: "3111878685449305", name: "Sheffield", address: "Arundel Gate, Sheffield" }
]

const CinemaModal = ({ onClose }) => (
  <div className="fixed top-0 bg-black bg-opacity-75 w-screen h-screen flex justify-center items-center">
    <div className="bg-white w-[320px] md:w-3/4 xl:w-1/2">
      <div className="flex justify-between items-center bg-gray-100 shadow-lg p-3">
        <h1 className="text-2xl text-center">Available Cinemas</h1>

        <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:bg-gray-400 hover:text-white hover:rounded-full hover:p-1 hover:cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="max-h-[300px] overflow-auto">
        {
          cinemas.map(v => (
            <Cinema key={v.id} {...v} />
          ))
        }
      </div>
    </div>
  </div>
)

export default CinemaModal