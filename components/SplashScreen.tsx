import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 2), 20);
      return () => clearTimeout(timer);
    } else if (onFinish) {
      setTimeout(onFinish, 600);
    }
  }, [progress, onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Frame background */}
        <div className="absolute inset-0 scale-[0.95]">
  <Image
    src="/Frame.png"
    alt="Frame"
    fill
    className="object-contain object-center pointer-events-none select-none z-0"
    priority
  />
</div>

        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/V logo.png"
            alt="TrueVision Logo"
            width={180}
            height={180}
            className="drop-shadow-xl"
            priority
          />
          <h1 className="mt-4 text-3xl font-extrabold text-[#1A3366] tracking-tight text-center drop-shadow">TRUEVISION</h1>
          <h2 className="text-lg font-semibold text-[#FF7F2A] tracking-widest text-center mb-8">CREATIVE DESIGNS</h2>
          <div className="w-80 h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF7F2A] to-[#1A3366]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <motion.div
            className="text-[#FF7F2A] text-sm font-medium tracking-wider mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > 10 ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            GREAT IDEAS LOADING . . .
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 right-1/3  text-2xl font-playlist text-[#1A3366]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="block italic">The <span className="font-bold">Vision</span> Behind The Image...</span>
          <span className="block italic">The <span className="font-bold">Truth</span> Behind The <span className="font-bold">Vision</span></span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen; 