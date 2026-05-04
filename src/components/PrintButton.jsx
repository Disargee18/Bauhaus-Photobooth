import { motion } from 'framer-motion';

export default function PrintButton({ disabled }) {
  if (disabled) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, y: 4, boxShadow: '0px 0px 0px 0px var(--color-bauhaus-black)' }}
      onClick={() => window.print()}
      className="font-[var(--font-bebas)] text-5xl md:text-7xl px-12 py-4 bg-[#f5e6a3] text-black border-4 border-black shadow-[8px_8px_0px_0px_var(--color-bauhaus-black)] transition-colors hover:bg-white uppercase tracking-widest print:hidden w-full"
    >
      PRINT STRIP
    </motion.button>
  );
}
