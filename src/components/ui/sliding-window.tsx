import { useInView, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function SlidingWindow() {
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    container: containerRef,
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const slide2 = useTransform(scrollYProgress, [0.1, 0.5], ["87.5%", "0%"]);
  const slide3 = useTransform(scrollYProgress, [0.5, 0.9], ["87.5%", "0%"]);
  const { scrollYProgress: scrollInto } = useScroll({ target: containerRef });

  useMotionValueEvent(scrollInto, "change", (latest) => {
    if (latest < 1 && done) {
      document.body.style.overflow = "hidden";
    }
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      console.log(v);
      setDone([0, 1].includes(v) ? true : false);
    });
  }, [scrollYProgress]);

  // useEffect(() => {
  //   if (!inView) {
  //     setDone(false);
  //   } else {
  //     document.body.style.overflow = "hidden";
  //   }
  // }, [inView]);
  return (
    <motion.div
      ref={containerRef}
      style={
        // inView &&
        !done
          ? { position: "sticky", overflow: "scroll" }
          : { position: "relative", overflow: "none" }
      }
      layout
      className="w-full top-0 h-screen overflow-hidden border-y"
    >
      <motion.div
        className="sticky top-0 left-0 w-full h-screen "
        whileInView={{
          position: "sticky",
          top: 0,
        }}
      >
        <div className="sticky h-full top-0 left-0">
          <div className="absolute top-0 left-0 h-screen w-[80%] z-10 bg-red-900">
            <div className="flex flex-col border-x justify-between h-screen items-center w-[12.5%] py-4">
              <span className="text-[30px] font-extrabold">01</span>
              <span className="[writing-mode:vertical-rl] rotate-180 text-[30px] uppercase leading-none tracking-wide font-extrabold">
                This is window 1
              </span>
            </div>
          </div>
          <motion.div
            className="absolute top-0 left-[10%] h-screen w-[80%] z-20 bg-blue-900"
            style={{ translateX: slide2 }}
          >
            <div className="flex border-x flex-col justify-between h-screen items-center w-[12.5%] py-4">
              <span className="text-[30px] font-extrabold">02</span>
              <span className="[writing-mode:vertical-rl] rotate-180 text-[30px] uppercase leading-none tracking-wide font-extrabold">
                This is window 2
              </span>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-0 left-[20%] h-screen w-[80%] z-30 bg-orange-900"
            style={{ translateX: slide3 }}
          >
            <div className="flex flex-col border-x justify-between h-screen items-center w-[12.5%] py-4">
              <span className="text-[30px] font-extrabold">03</span>
              <span className="[writing-mode:vertical-rl] rotate-180 text-[30px] uppercase leading-none tracking-wide font-extrabold">
                This is window 3
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div
        ref={scrollRef}
        className="absolute top-0 left-0 z-100 bg-transparent h-[200vh] w-full opacity-0  "
      >
        <div className="h-screen w-full bg-red-600"></div>
        <div className="h-screen w-full bg-amber-400"></div>
      </div>
    </motion.div>
  );
}
