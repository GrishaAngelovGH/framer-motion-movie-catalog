import { motion } from "framer-motion"

import LayoutPage from "components/pages/LayoutPage"
import Carousel from "components/Carousel"
import ProductCard from "components/ProductCard"

const Experiences = () => {
  const slides = [
    { image: "/images/hotdog-wedges.jpg", paragraphs: ["Enjoy a film feast", "Nothing beats watching a great film while tucking into an equally-great meal. Skip the restaurant, head to the cinema and order a delicious feast to take into the cinema. Try our chicken strips, nachos or new mozzarella sticks."] },
    { image: "/images/popcorn.jpg", paragraphs: ["Get the king of cinema snacks", "Popcorn and film, they go together like Batman and Robin or Woody and Buzz. That’s why we make sure ours is the best."] },
    { image: "/images/ice-cream.jpg", paragraphs: ["Treat yourself", "Fancy something indulgent? You’re spoiled for choice at the cinema. Order Ben &amp; Jerry’s Chocolate Fudge Brownie, Caramel Chew Chew or a dozen other flavours. Sip a cappuccino from Costa or mix it up with a sugar-free Tango Ice Blast."] }
  ]

  const favoriteProducts = [
    { image: "/images/kidscombo.jpg", title: "Kids Mix", content: "Get great value on snacks for your little ones with our Kids Mix combo, featuring a small popcorn, two snacks and a delicious drink for just £4.50." },
    { image: "/images/popcorn-and-coke.jpg", title: "Popcorn and Coca-Cola", content: "Going to the cinema wouldn’t be the same without popcorn. We make sure ours is perfectly popped for freshness. To wash it down, nothing beats an ice-cold, refreshing Coca-Cola. Order the dream team of cinema treats." },
    { image: "/images/ice-blast.jpg", title: "Tango Ice Blast", content: "Feel the frozen explosion with sugar-free Tango Ice Blast. It’s the guilt-free way to satisfy your sweet tooth. Order delicious slushy flavours like cherry, raspberry or a mix of both and let the icy zing dance on your tongue." }
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

        <motion.div
          initial={{ opacity: "0" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 1, delay: 3 }}
          className="md:w-3/4 mb-20"
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
      </div>
    </LayoutPage>
  )
}

export default Experiences