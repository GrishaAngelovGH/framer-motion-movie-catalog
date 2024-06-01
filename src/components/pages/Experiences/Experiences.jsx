import { motion } from "framer-motion"

import LayoutPage from "components/pages/LayoutPage"
import Carousel from "components/Carousel"

const Experiences = () => {
  const slides = [
    { image: "images/hotdog-wedges.jpg", paragraphs: ["Enjoy a film feast", "Nothing beats watching a great film while tucking into an equally-great meal. Skip the restaurant, head to the cinema and order a delicious feast to take into the cinema. Try our chicken strips, nachos or new mozzarella sticks."] },
    { image: "images/popcorn.jpg", paragraphs: ["Get the king of cinema snacks", "Popcorn and film, they go together like Batman and Robin or Woody and Buzz. That’s why we make sure ours is the best."] },
    { image: "images/ice-cream.jpg", paragraphs: ["Treat yourself", "Fancy something indulgent? You’re spoiled for choice at the cinema. Order Ben &amp; Jerry’s Chocolate Fudge Brownie, Caramel Chew Chew or a dozen other flavours. Sip a cappuccino from Costa or mix it up with a sugar-free Tango Ice Blast."] },
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
          <h1 className="mt-10 mb-5 text-white text-center uppercase text-sm md:text-5xl">Bite-sized adventures</h1>
          <h1 className="m-10 text-white text-justify text-sm md:text-2xl">Turn your trip to the cinema into a cheerful dining experience with our selection of made-for-cinema bites. Treat yourself to nachos, hot dogs and chicken strips or share popcorn and chocolate-covered treats with your date.</h1>
          <Carousel className="mb-20" slides={slides} />
        </motion.div>
      </div>
    </LayoutPage>
  )
}

export default Experiences