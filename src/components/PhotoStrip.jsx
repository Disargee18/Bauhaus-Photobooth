import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useRef, useEffect, useState } from 'react';

export default function PhotoStrip({ photos, activeFilter }) {
  const { activeBg } = useTheme();
  const stripRef = useRef(null);
  const [scaleInfo, setScaleInfo] = useState({ scale: 1, height: 'auto' });

  // Dynamically scale the strip down to fit within the viewport height
  useEffect(() => {
    const updateScale = () => {
      if (!stripRef.current) return;
      // offsetHeight ignores CSS transform: scale, giving us the true original height
      const originalHeight = stripRef.current.offsetHeight;
      if (originalHeight === 0) return;

      const availableHeight = window.innerHeight * 0.85; // fit in 85% of screen height
      if (originalHeight > availableHeight) {
        const scale = availableHeight / originalHeight;
        setScaleInfo({ scale, height: originalHeight * scale });
      } else {
        setScaleInfo({ scale: 1, height: 'auto' });
      }
    };

    // Timeout allows images to render their layout before calculating height
    const timeoutId = setTimeout(updateScale, 50);
    window.addEventListener('resize', updateScale);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateScale);
    };
  }, [photos]);

  if (photos.length === 0) return null;

  const downloadImage = (dataUrl, index) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `photobooth-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="flex flex-col items-center my-12 print:my-0 print:!h-auto"
      id="print-area"
      style={{ height: scaleInfo.height }}
    >
      <div
        ref={stripRef}
        className="flex flex-col items-center print:!transform-none print:break-inside-avoid"
        style={{ transform: `scale(${scaleInfo.scale})`, transformOrigin: 'top center' }}
      >
        {/* Decorative top shape */}
        <svg width="100" height="20" viewBox="0 0 100 20" className="mb-2">
          <rect x="0" y="0" width="100" height="20" fill="#0a0a0a" />
          <circle cx="50" cy="10" r="5" fill="#f5f0e8" />
        </svg>

        <div
          className="p-4 pb-16 bauhaus-border bauhaus-shadow relative w-64 md:w-80 print:w-48 transition-colors duration-500 print:break-inside-avoid"
          style={{ backgroundColor: activeBg }}
        >
          <h2 className="font-[var(--font-bebas)] text-3xl text-center mb-4 tracking-widest border-b-2 border-black pb-2">
            B/H BOOTH
          </h2>

          <div className="flex flex-col gap-4 print:block">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.1 }}
                className="relative group cursor-pointer print:mb-4 print:break-inside-avoid"
                onClick={() => downloadImage(photo, i)}
                title="Click to download image"
              >
                <img
                  src={photo}
                  alt={`Capture ${i + 1}`}
                  className={`w-full aspect-[3/4] object-cover border-4 border-black`}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="text-white font-[var(--font-bebas)] text-xl tracking-widest border-2 border-white px-2 py-1">
                    DOWNLOAD
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timestamp */}
          <div className="absolute bottom-4 left-0 w-full text-center font-[var(--font-special)] font-bold text-sm">
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
