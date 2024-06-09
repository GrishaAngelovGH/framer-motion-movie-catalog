import { motion, useAnimationControls } from "framer-motion"

const ShoppingCartItem = ({ id, title, products, qty, comboPrice, totalPrice, onRemove }) => {
  const controls = useAnimationControls()

  return (
    <motion.div
      variants={{
        hidden: {
          scale: "100%"
        },
        visible: {
          scale: "0%"
        }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
      onAnimationComplete={() => { onRemove(id) }}
      className="bg-gray-200 shadow-lg p-5 rounded-md text-xl">
      <div className="text-center">{title}</div>
      <div className="mt-5 flex flex-col xl:flex-row justify-evenly gap-5">
        {
          products.map((v, i) => (
            <div key={i} className="text-center">
              <img src={v.image} className="inline w-[70px] h-[70px] border border-gray-400 p-2 bg-white rounded-full" />
              <div className="mt-2">{v.title}</div>
            </div>
          ))
        }
      </div>
      <div className="mt-2 bg-gray-100 rounded-md p-2">
        <div>Quantity: {qty}</div>
        <div className="mt-2">Combo Price: {comboPrice}£</div>
        <div className="mt-2">Total Price: {totalPrice}£</div>
      </div>
      <button onClick={() => { controls.start("visible") }} className="bg-red-500 hover:bg-red-600 text-white mt-5 p-1 w-full flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </motion.div>
  )
}

export default ShoppingCartItem