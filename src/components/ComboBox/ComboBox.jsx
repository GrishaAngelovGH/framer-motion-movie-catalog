const ComboBox = ({ id, title, products, onAddToCart }) => {
  const totalPrice = products.reduce((a, b) => a + b.price, 0)

  return (
    <div className="bg-white rounded-md mt-10 text-center min-w-[300px]">
      <div className="text-white  p-1 bg-blue-400 rounded-t">{title}</div>
      <div className="flex flex-col md:flex-row justify-evenly p-5">
        {
          products.map((v, i) => (
            <div key={i} className="m-3">
              <img src={v.image} className="inline w-[100px] h-[100px] border border-gray-600 rounded-full p-2" />
              <div className="mt-2 text-gray-500">{v.title} ({v.price}£)</div>
            </div>
          ))
        }
      </div>
      <p className="text-xl">Total: {totalPrice}£</p>
      <button
        onClick={() => { onAddToCart(id) }}
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-full m-3"
      >
        Add To Cart
      </button>
    </div>
  )
}

export default ComboBox