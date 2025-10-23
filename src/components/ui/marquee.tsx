import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";

import { Smile } from "lucide-react";
export function Marquee() {
  return (
    <div className="w-full relative">
      <LazyMotion features={domAnimation}>
        <m.div
          className="w-[150%] flex items-center justify-around whitespace-nowrap absolute"
          animate={{
            translateX: "50%",
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <p className="flex items-center gap-1 ">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1 ">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
        </m.div>
        <m.div
          className="w-[150%] flex items-center justify-around whitespace-nowrap absolute -translate-x-1/2 bg-background"
          animate={{
            translateX: "50%",
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
          <p className="flex items-center gap-1">
            This is my marquee <Smile className="animate-spin" />
          </p>
        </m.div>
      </LazyMotion>
    </div>
  );
}
