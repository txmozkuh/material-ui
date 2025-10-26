import { motion, MotionValue, useTransform } from "motion/react";
import React from "react";

interface WindowProps {
  index: number;
  width: number;
  totalItem: number;
  title?: string;
  scrollProgess: MotionValue<number>;
  transform?: MotionValue<string>;
}

export default function Window({
  index,
  width,
  totalItem,
  title,
  scrollProgess,
  transform,
}: WindowProps) {
  const windowWidth = width - (width / 10) * (totalItem - 1);
  const colWidth = width / 10;

  const segment = 1 / (totalItem - 1);

  const start = segment * (index - 1);
  const end = segment * index;
  const translateX = useTransform(scrollProgess, [start, end], [windowWidth - colWidth, 0]);

  if (index === 0) {
    return (
      <div
        className={`absolute top-0 left-0 h-screen z-10 bg-red-900 w-[${windowWidth}px]`}
        style={{
          width: `${windowWidth}px`,
        }}
      >
        <div
          className={`flex flex-col border-x justify-between h-screen items-center py-4`}
          style={{
            width: `${colWidth}px`,
          }}
        >
          <span className="text-[30px] font-extrabold">01</span>
          <span className="[writing-mode:vertical-rl] rotate-180 text-[30px] uppercase leading-none tracking-wide font-extrabold">
            {title}
          </span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`absolute top-0 h-screen z-20 bg-blue-900 w-[${windowWidth}px]`}
      style={{
        width: `${windowWidth}px`,
        left: `${colWidth * index}px`,
        translateX,
      }}
    >
      <div
        className="flex border-x flex-col justify-between h-screen items-center py-4"
        style={{
          width: `${colWidth}px`,
        }}
      >
        <span className="text-[30px] font-extrabold">{`0${index + 1}`}</span>
        <span className="[writing-mode:vertical-rl] rotate-180 text-[30px] uppercase leading-none tracking-wide font-extrabold">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
