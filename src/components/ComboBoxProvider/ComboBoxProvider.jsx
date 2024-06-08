import React from "react"

const comboBoxes = {
  "12wer": { id: "12wer", title: "Combo Box #1", products: [{ image: "/images/combo-coca-cola.jpg", title: "Coca-Cola", price: 3 }, { image: "/images/combo-chips.jpg", title: "Chips", price: 7 }, { image: "/images/combo-ice-cream.jpg", title: "Ice-Cream", price: 10 }] },
  "23dfg": { id: "23dfg", title: "Combo Box #2", products: [{ image: "/images/combo-fanta.jpg", title: "Fanta", price: 3 }, { image: "/images/combo-pizza.jpg", title: "Pizza", price: 8 }, { image: "/images/combo-doughnut.jpg", title: "Doughnut", price: 4 }] },
  "34sjd": { id: "34sjd", title: "Combo Box #3", products: [{ image: "/images/combo-7up.jpg", title: "7Up", price: 3 }, { image: "/images/combo-popcorn.jpg", title: "Popcorn", price: 5 }, { image: "/images/combo-kitkat.jpg", title: "Kit Kat", price: 4 }] }
}

const ComboBoxProvider = ({ children }) => React.cloneElement(children, { comboBoxes })

export default ComboBoxProvider