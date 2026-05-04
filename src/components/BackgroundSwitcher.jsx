import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundSwitcher() {
  const { activeBg, setActiveBg, backgrounds } = useTheme();

  return (
    <div className="flex flex-col items-center mb-8">
      <h3 className="font-[var(--font-bebas)] text-xl tracking-widest mb-4 bg-black text-white px-3 py-1">
        THEME ACCENT
      </h3>
      <div className="flex gap-4 flex-wrap justify-center">
        {backgrounds.map((bg) => {
          const isActive = activeBg === bg.color;
          return (
            <button
              key={bg.id}
              onClick={() => setActiveBg(bg.color)}
              className="relative w-12 h-12 rounded-full bauhaus-border cursor-pointer flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
              style={{ backgroundColor: bg.color }}
              aria-label={`Switch to ${bg.id} theme`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-theme-check"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
