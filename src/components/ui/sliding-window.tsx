import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Window from "./window";

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

export default function SlidingWindow() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [width, setWidth] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef });
  useEffect(() => {
    if (!containerRef) return;

    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setWidth(width);
    });

    observer.observe(containerRef.current!);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div ref={containerRef} className="w-full border-y relative">
      <motion.div className="sticky z-10 top-0 left-0 w-full h-screen ">
        <div className="sticky h-full top-0 left-0">
          {item.map((window, index) => {
            return (
              <Window
                index={index}
                key={window.title}
                title={window.title}
                width={width}
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
