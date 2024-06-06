import persistentShoppingCart from "persistent/persistentShoppingCart"

import ShoppingCartItem from "./ShoppingCartItem"

const ShoppingCart = ({ comboBoxes }) => {
  const shoppingCart = persistentShoppingCart.getShoppingCart()

  const shoppingCartItems = Object.entries(shoppingCart).map(([id, { qty }]) => {
    const comboPrice = comboBoxes[id].products.reduce((a, b) => a + b.price, 0)

    return ({
      id,
      qty,
      comboPrice,
      totalPrice: qty * comboPrice,
      ...comboBoxes[id]
    })
  })

  return (
    <div className="h-screen bg-gray-100">
      <h1 className="bg-blue-400 text-center text-white p-1">Shopping Cart</h1>
      <div className="mt-20 flex flex-col md:flex-row justify-center gap-5">
        {
          shoppingCartItems.map(v => (<ShoppingCartItem key={v.id} {...v} />))
        }
      </div>
    </div>
  )
}

export default ShoppingCart