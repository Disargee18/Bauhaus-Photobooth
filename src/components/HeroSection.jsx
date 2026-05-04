import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden border-b-4 border-black border-dashed">
      {/* Decorative Bauhaus SVG Shape */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -left-10 md:left-20 z-0 opacity-50"
      >
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#0a0a0a" strokeWidth="8" strokeDasharray="20 10" />
          <rect x="50" y="50" width="100" height="100" fill="#c2c9a0" stroke="#0a0a0a" strokeWidth="4" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ rotate: -180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", damping: 12, stiffness: 100 }}
        className="absolute -bottom-20 right-10 md:right-32 z-0"
      >
        <svg width="150" height="150" viewBox="0 0 150 150">
          <path d="M 0 150 L 150 150 L 75 0 Z" fill="#f5e6a3" stroke="#0a0a0a" strokeWidth="5" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <h1
          className="font-[var(--font-bebas)] text-7xl md:text-9xl tracking-tighter leading-none m-0"
          style={{
            color: 'var(--color-bauhaus-white)',
            WebkitTextStroke: '4px var(--color-bauhaus-black)',
            textShadow: '8px 8px 0px var(--color-bauhaus-black)'
          }}
        >
          PHOTOBOOTH
        </h1>
        <p className="mt-6 font-[var(--font-special)] text-xl md:text-3xl font-bold bg-black text-white px-4 py-2 uppercase tracking-widest inline-block bauhaus-shadow">
          CLICK. CAPTURE. PRINT.
        </p>
      </motion.div>
    </div>
  );
}
