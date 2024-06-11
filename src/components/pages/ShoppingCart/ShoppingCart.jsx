import { useState } from "react"
import { Link } from "react-router-dom"

import persistentShoppingCart from "persistent/persistentShoppingCart"

import ShoppingCartItem from "./ShoppingCartItem"

const getShoppingCartItems = comboBoxes => {
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

  return shoppingCartItems
}

const ShoppingCart = ({ comboBoxes }) => {
  const [shoppingCartItems, setShoppingCartItems] = useState(getShoppingCartItems(comboBoxes))

  const handleUpdateQuantity = (id, isIncremented) => {
    persistentShoppingCart.updateQuantity(id, isIncremented)
    setShoppingCartItems(getShoppingCartItems(comboBoxes))
  }

  const handleRemove = id => {
    persistentShoppingCart.remove(id)
    setShoppingCartItems(getShoppingCartItems(comboBoxes))
  }

  const totalPrice = getShoppingCartItems(comboBoxes).reduce((a, b) => a + b.totalPrice, 0)

  return (
    <div className="h-screen bg-gray-100">
      <div className="bg-blue-400 text-center text-white p-2 flex justify-center items-center">
        <Link to="/experiences" className="text-white hover:text-white absolute left-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
        </Link>

        <div className="text-4xl">Shopping Cart</div>
      </div>
      {
        !persistentShoppingCart.hasItems() && (
          <div className="mt-10 text-center">
            <h1>Empty Shopping Cart!</h1>
            <Link to="/experiences" className="mt-5 text-xl inline-block">
              Visit our experiences page to see the combo boxes
            </Link>
          </div>
        )
      }
      {
        persistentShoppingCart.hasItems() && (
          <>
            <div className="p-10 flex flex-col md:flex-row justify-center gap-5">
              {
                shoppingCartItems.map(v => (
                  <ShoppingCartItem
                    key={v.id}
                    {...v}
                    onRemove={handleRemove}
                    onUpdateQuantity={handleUpdateQuantity}
                  />
                ))
              }
            </div>
            <div className="text-4xl text-center">
              Total Price: {totalPrice}£
            </div>
          </>
        )
      }
    </div>
  )
}

export default ShoppingCart