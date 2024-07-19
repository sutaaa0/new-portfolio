import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

interface SmoothScrollProps {
  children: React.ReactNode;
  springConfig?: {
    mass: number;
    stiffness: number;
    damping: number;
    restDelta: number;
  };
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  springConfig = {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  },
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const updateDimensions = () => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest === 0 && isLoading) {
      setIsLoading(false);
    }
  });

  const y = useTransform(smoothProgress, (value) => 
    value * -(contentHeight - windowHeight)
  );

  const contentStyle = useMemo(() => ({
    y: isLoading ? 0 : y,
    opacity: isLoading ? 0 : 1,
  }), [isLoading, y]);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className="w-screen fixed top-0 flex flex-col transition-opacity duration-200 ease-in-out"
        ref={contentRef}
        style={contentStyle}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;