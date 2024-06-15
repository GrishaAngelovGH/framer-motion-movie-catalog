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
      </div>
    </div>
  </div>
)

export default CinemaModal