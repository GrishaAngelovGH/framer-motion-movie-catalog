import { motion } from "framer-motion"

function App() {
  return (
    <>
      <div className="m-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="w-[100px] h-[100px] bg-blue-500 rounded-full"
        />
      </div>

    </>
  )
}

export default App
