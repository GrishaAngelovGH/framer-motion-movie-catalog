import { motion } from "framer-motion"

const ProductCard = ({ image, title, content }) => (
  <motion.div whileHover={{ scale: 1.1 }} className="bg-white p-2 min-h-[400px] rounded-md w-2/3 text-center">
    <img src={image} className="inline-block w-full rounded-md" />
    <p className="m-5 text-xl">{title}</p>
    <p className="text-gray-500">{content}</p>
  </motion.div>
)

export default ProductCard