import { Html, useProgress } from "@react-three/drei";
import { motion } from "motion/react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-royal/30 border-t-royal rounded-full animate-spin"></div>
        </div>
        <motion.div 
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading Portfolio
        </motion.div>
        <motion.div 
          className="text-lg text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Math.round(progress)}% Complete
        </motion.div>
        <div className="w-48 h-1 mx-auto mt-4 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-royal to-lavender rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </Html>
  );
};

export default Loader;
