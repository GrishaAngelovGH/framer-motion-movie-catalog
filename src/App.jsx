import { motion } from "framer-motion"

function App() {
  return (
    <>
      <div style={{ margin: 200 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          style={{ width: 100, height: 100, background: "dodgerblue", borderRadius: "50%" }}
        />
      </div>

    </>
  )
}

export default App
