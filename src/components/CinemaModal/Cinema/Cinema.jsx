const Cinema = ({ id, name, address, onClick }) => {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <div onClick={handleClick} className="text-sm md:text-xl flex items-center p-2 border-b-2 hover:cursor-pointer hover:bg-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>

      <div className="ms-2">
        <div>{name}</div>
        <div>{address}</div>
      </div>
    </div>
  )
}

export default Cinema