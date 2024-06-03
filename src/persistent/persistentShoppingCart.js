const persistentShoppingCart = {
  add: function (id) {
    const shoppingCart = this.getShoppingCart()

    !shoppingCart[id] ? shoppingCart[id] = { qty: 1 } : shoppingCart[id].qty++

    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
  },
  hasItems: function () {
    const shoppingCart = this.getShoppingCart()
    return Object.keys(shoppingCart).length > 0
  },
  getShoppingCart: function () {
    return JSON.parse(window.localStorage.getItem("shoppingCart") || "{}")
  }
}

export default persistentShoppingCart