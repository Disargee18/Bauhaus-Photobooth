import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function Navbar() {
  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-between items-center p-6 border-b-4 border-black"
    >
      <motion.div variants={linkVariants} className="flex items-center gap-3">
        {/* Custom Bauhaus SVG Logo */}
        <svg width="40" height="40" viewBox="0 0 40 40" className="bauhaus-shadow">
          <rect width="40" height="40" fill="#8B0000" stroke="#0a0a0a" strokeWidth="3" />
          <circle cx="20" cy="20" r="12" fill="#f5e6a3" stroke="#0a0a0a" strokeWidth="3" />
          <path d="M 10 30 L 20 10 L 30 30 Z" fill="none" stroke="#0a0a0a" strokeWidth="3" />
        </svg>
        <span className="font-[var(--font-bebas)] text-3xl tracking-widest leading-none mt-1">
          B/H BOOTH
        </span>
      </motion.div>

      <ul className="flex gap-8 font-[var(--font-bebas)] text-2xl tracking-wider">
        {['Studio', 'Gallery', 'About'].map((item) => (
          <motion.li key={item} variants={linkVariants}>
            <a 
              href="#" 
              className="relative inline-block hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[4px] hover:after:bg-black hover:after:left-0 hover:after:-bottom-1 hover:after:transition-none"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
