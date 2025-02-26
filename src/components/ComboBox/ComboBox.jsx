import { useState } from "react"
import { motion } from "framer-motion"

const ComboBox = ({ id, title, products, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(id)
    setIsAdded(!isAdded)
  }

  const totalPrice = products.reduce((a, b) => a + b.price, 0)

  return (
    <div className="bg-white rounded-md mt-10 text-center min-w-[300px] relative">
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
        role="button"
        onClick={handleAddToCart}
        className={`bg-blue-500 hover:bg-blue-700 text-white rounded-full m-3 p-2 cursor-pointer ${isAdded ? "invisible" : "visible"}`}
      >
        Add To Cart
      </button>
      {
        isAdded && (
          <motion.div
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 2 }}
            onAnimationComplete={() => { setIsAdded(!isAdded) }}
            className="bg-green-600 text-white rounded-full p-3 absolute bottom-3 left-[20%] md:left-[32%] xl:left-[38%] text-center"
          >
            Succesfully added
          </motion.div>
        )
      }
    </div>
  )
}

export default ComboBox