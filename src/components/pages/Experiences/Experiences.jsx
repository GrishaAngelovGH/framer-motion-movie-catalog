import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import LayoutPage from "components/pages/LayoutPage"
import Carousel from "components/Carousel"
import ProductCard from "components/ProductCard"
import ComboBox from "components/ComboBox"

import persistentShoppingCart from "persistent/persistentShoppingCart"

const Experiences = () => {
  const [hasItemsinShoppingCart, setHasItemsinShoppingCart] = useState(persistentShoppingCart.hasItems())

  const slides = [
    { image: "/images/hotdog-wedges.jpg", paragraphs: ["Enjoy a film feast", "Nothing beats watching a great film while tucking into an equally-great meal. Skip the restaurant, head to the cinema and order a delicious feast to take into the cinema. Try our chicken strips, nachos or new mozzarella sticks."] },
    { image: "/images/popcorn.jpg", paragraphs: ["Get the king of cinema snacks", "Popcorn and film, they go together like Batman and Robin or Woody and Buzz. That’s why we make sure ours is the best."] },
    { image: "/images/ice-cream.jpg", paragraphs: ["Treat yourself", "Fancy something indulgent? You’re spoiled for choice at the cinema. Order Ben & Jerry’s Chocolate Fudge Brownie, Caramel Chew Chew or a dozen other flavours. Sip a cappuccino from Costa or mix it up with a sugar-free Tango Ice Blast."] }
  ]

  const favoriteProducts = [
    { image: "/images/kidscombo.jpg", title: "Kids Mix", content: "Get great value on snacks for your little ones with our Kids Mix combo, featuring a small popcorn, two snacks and a delicious drink for just £4.50." },
    { image: "/images/popcorn-and-coke.jpg", title: "Popcorn and Coca-Cola", content: "Going to the cinema wouldn’t be the same without popcorn. We make sure ours is perfectly popped for freshness. To wash it down, nothing beats an ice-cold, refreshing Coca-Cola. Order the dream team of cinema treats." },
    { image: "/images/ice-blast.jpg", title: "Tango Ice Blast", content: "Feel the frozen explosion with sugar-free Tango Ice Blast. It’s the guilt-free way to satisfy your sweet tooth. Order delicious slushy flavours like cherry, raspberry or a mix of both and let the icy zing dance on your tongue." }
  ]

  const comboBoxes = [
    { id: "12wer", products: [{ image: "/images/combo-coca-cola.jpg", title: "Coca-Cola", price: 3 }, { image: "/images/combo-chips.jpg", title: "Chips", price: 7 }, { image: "/images/combo-ice-cream.jpg", title: "Ice-Cream", price: 10 }] },
    { id: "23dfg", products: [{ image: "/images/combo-fanta.jpg", title: "Fanta", price: 3 }, { image: "/images/combo-pizza.jpg", title: "Pizza", price: 8 }, { image: "/images/combo-doughnut.jpg", title: "Doughnut", price: 4 }] },
    { id: "34sjd", products: [{ image: "/images/combo-7up.jpg", title: "7Up", price: 3 }, { image: "/images/combo-popcorn.jpg", title: "Popcorn", price: 5 }, { image: "/images/combo-kitkat.jpg", title: "Kit Kat", price: 4 }] }
  ]

  return (
    <LayoutPage>
      <div className="bg-blue-800 min-h-full flex flex-col items-center">
        <motion.img
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 2 }}
          src="/images/hotdog-banner.png"
        />

        <motion.div
          initial={{ opacity: "0", display: "none" }}
          animate={{ opacity: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
          transition={{ duration: 1, delay: 3 }}
          className="w-3/4 md:w-1/2"
        >
          <h1 className="mt-10 text-white text-center uppercase text-sm md:text-5xl">Bite-sized adventures</h1>
          <h1 className="m-5 text-white text-justify text-sm md:text-2xl">Turn your trip to the cinema into a cheerful dining experience with our selection of made-for-cinema bites. Treat yourself to nachos, hot dogs and chicken strips or share popcorn and chocolate-covered treats with your date.</h1>
          <Carousel className="mb-10" slides={slides} />
        </motion.div>

        <motion.div
          initial={{ opacity: "0" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 1, delay: 3 }}
          className="md:w-3/4 mb-5"
        >
          <h1 className="mb-10 text-white text-center uppercase text-sm md:text-5xl">Your Cinema Favorites</h1>

          <div className="flex flex-col xl:flex-row items-center gap-8">
            {
              favoriteProducts.map((v, i) => (
                <ProductCard key={i} {...v} />
              ))
            }
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: "0" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 1, delay: 3 }}
          className="m-5 mb-10 md:w-1/2"
        >
          <h1 className="text-sm md:text-5xl text-white text-center uppercase">Try Our Combo Boxes</h1>
          {
            comboBoxes.map((v, i) => (
              <ComboBox
                key={v.id}
                title={`Combo Box #${i + 1}`}
                {...v}
                onAddToCart={id => {
                  persistentShoppingCart.add(id)
                  setHasItemsinShoppingCart(persistentShoppingCart.hasItems())
                }}
              />
            ))
          }
        </motion.div>

        {
          hasItemsinShoppingCart && (
            <Link to="/shopping-cart">
              <div data-testid="shopping-cart" className="bg-blue-500 text-white border-4 p-3 fixed bottom-5 right-5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          )
        }
      </div>
    </LayoutPage>
  )
}

export default Experiences