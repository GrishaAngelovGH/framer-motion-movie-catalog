import { motion } from "framer-motion"
import LayoutPage from "components/pages/LayoutPage"

const Experiences = () => (
  <LayoutPage>
    <div className="bg-blue-800 min-h-full">
      <motion.img
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 2 }}
        src="/images/hotdog-banner.png"
      />
    </div>
  </LayoutPage>
)

export default Experiences