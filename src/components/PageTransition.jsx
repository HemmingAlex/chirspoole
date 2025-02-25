import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
    initial={{ x: "20%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
    transition={{ delay: 0, duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}