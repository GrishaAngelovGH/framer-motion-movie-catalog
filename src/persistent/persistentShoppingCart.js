const persistentShoppingCart = {
  add: function (id) {
    const shoppingCart = JSON.parse(window.localStorage.getItem("shoppingCart") || "{}")

    !shoppingCart[id] ? shoppingCart[id] = { qty: 1 } : shoppingCart[id].qty++

    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
  }
}

export default persistentShoppingCart