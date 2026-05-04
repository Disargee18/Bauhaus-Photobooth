import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full mt-20 mb-8 flex flex-col items-center justify-center print:hidden"
    >
      <svg width="200" height="20" viewBox="0 0 200 20" className="mb-4">
        <rect x="0" y="8" width="80" height="4" fill="#0a0a0a" />
        <circle cx="100" cy="10" r="8" fill="none" stroke="#0a0a0a" strokeWidth="4" />
        <rect x="120" y="8" width="80" height="4" fill="#0a0a0a" />
      </svg>
      <p className="font-[var(--font-special)] text-sm font-bold tracking-widest uppercase text-center">
        &copy; {new Date().getFullYear()} B/H BOOTH. Click, Capture, Print.
      </p>
    </motion.footer>
  );
}
