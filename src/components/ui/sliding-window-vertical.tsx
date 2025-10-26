import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Window from "./window";
import WindowVertical from "./window-vertical";

const item = [
  {
    title: "This is slide 1",
  },
  {
    title: "This is slide 2",
  },
  {
    title: "This is slide 3",
  },
];

export default function SlidingWindowVertical() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const windowRef = useRef(null);
  const [height, setHeight] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef });
  useEffect(() => {
    if (!windowRef) return;

    const observer = new ResizeObserver((entries) => {
      const { height } = entries[0].contentRect;
      setHeight(height);
    });

    observer.observe(windowRef.current!);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div ref={containerRef} className="w-full relative">
      <motion.div ref={windowRef} className="sticky z-10 top-0 left-0 w-full h-screen">
        <div className="sticky h-full top-0 left-0">
          {item.map((window, index) => {
            return (
              <WindowVertical
                index={index}
                key={window.title}
                title={window.title}
                height={height}
                totalItem={item.length}
                scrollProgess={scrollYProgress}
              />
            );
          })}
        </div>
      </motion.div>
      <div ref={scrollRef} className="z-100 opacity-10  w-full bg-red-400 h-[300vh] "></div>
    </motion.div>
  );
}
