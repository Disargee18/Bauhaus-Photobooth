import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CountdownCapture({ isCounting, onCapture, onFinished }) {
  const [count, setCount] = useState(3);
  const [flash, setFlash] = useState(false);

  const onCaptureRef = useRef(onCapture);
  const onFinishedRef = useRef(onFinished);

  useEffect(() => {
    onCaptureRef.current = onCapture;
    onFinishedRef.current = onFinished;
  }, [onCapture, onFinished]);

  useEffect(() => {
    if (!isCounting) {
      setCount(3);
      setFlash(false);
      return;
    }

    if (count > 0) {
      const timer = setTimeout(() => setCount(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setFlash(true);
      if (onCaptureRef.current) onCaptureRef.current();
      
      const flashTimer = setTimeout(() => {
        setFlash(false);
        if (onFinishedRef.current) onFinishedRef.current();
      }, 300);
      
      return () => clearTimeout(flashTimer);
    }
  }, [isCounting, count]);

  return (
    <AnimatePresence>
      {isCounting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          {/* Flash Effect */}
          <AnimatePresence>
            {flash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 bg-white"
              />
            )}
          </AnimatePresence>

          {/* Number Display */}
          {!flash && count > 0 && (
            <motion.div
              key={count}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative"
            >
              <span 
                className="font-[var(--font-bebas)] text-[20rem] leading-none"
                style={{ 
                  color: 'var(--color-bauhaus-white)', 
                  WebkitTextStroke: '8px var(--color-bauhaus-black)',
                  textShadow: '16px 16px 0px var(--color-bauhaus-black)'
                }}
              >
                {count}
              </span>
            </motion.div>
          )}

          {!flash && count === 0 && (
            <motion.div
              key="snap"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              className="relative"
            >
               <span 
                className="font-[var(--font-bebas)] text-[10rem] md:text-[15rem] leading-none"
                style={{ 
                  color: 'var(--color-bauhaus-red)', 
                  WebkitTextStroke: '6px var(--color-bauhaus-black)',
                  textShadow: '12px 12px 0px var(--color-bauhaus-black)'
                }}
              >
                SNAP!
              </span>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
