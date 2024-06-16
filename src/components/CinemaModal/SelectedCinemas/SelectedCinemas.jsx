const SelectedCinemas = ({ cinemas, onRemove }) => (
  <div className="m-5 max-h-[150px] md:max-h-full overflow-auto">
    {
      cinemas.map(v => (
        <span key={v.id} onClick={() => { onRemove(v.id) }} className="bg-gray-200 border border-gray-400 rounded-full m-2 p-2 inline-flex items-center hover:cursor-pointer">
          <span>{v.name}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </span>
      ))
    }
  </div>
)

export default SelectedCinemas