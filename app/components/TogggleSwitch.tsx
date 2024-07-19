"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const ToggleSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecked, setIsChecked] = useState(pathname === '/Info');

  useEffect(() => {
    setIsChecked(pathname === '/Info');
  }, [pathname]);

  const springTransition = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <motion.div
      className="bg-[#101010] bg-opacity-90 backdrop-blur-sm rounded-full p-1 inline-flex relative"
      animate={{
        boxShadow: isChecked
          ? '0 0 15px 2px rgba(255,255,255,0.3)'
          : '0 0 8px 1px rgba(255,255,255,0.15)',
      }}
      transition={{ duration: 0.3 }}
    >
      {[
        { label: 'Work', path: '/' },
        { label: 'Info', path: '/Info' }
      ].map(({ label, path }, index) => (
        <Link href={path} key={label} passHref>
          <motion.span
            className="cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative z-10 inline-block"
            animate={{
              color: (isChecked ? index === 1 : index === 0) ? '#ffffff' : '#9ca3af',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsChecked(index === 1)}
          >
            {label}
          </motion.span>
        </Link>
      ))}
      <AnimatePresence initial={false}>
        <motion.div
          className="absolute top-1 left-1 w-[calc(50%-2px)] h-[calc(100%-8px)] rounded-full overflow-hidden backdrop-blur-md"
          style={{
            background: "#1F2937",
            opacity: 0.10,
          }}
          animate={{
            x: isChecked ? 'calc(100% + 2px)' : '0%',
          }}
          transition={springTransition}
        >
          {/* Blur effect */}
          <motion.div
            className="absolute inset-0 bg-white opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ToggleSwitch;