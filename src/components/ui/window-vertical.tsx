import { motion, MotionValue, useTransform } from "motion/react";
import React from "react";

interface WindowProps {
  index: number;
  height: number;
  totalItem: number;
  title?: string;
  scrollProgess: MotionValue<number>;
}

export default function WindowVertical({
  index,
  height,
  totalItem,
  title,
  scrollProgess,
}: WindowProps) {
  const windowHeight = height - (height / 10) * (totalItem - 1);
  const colHeight = height / 10;

  const segment = 1 / (totalItem - 1);

  const start = segment * (index - 1);
  const end = segment * index;
  const translateY = useTransform(scrollProgess, [start, end], [windowHeight - colHeight, 0]);

  if (index === 0) {
    return (
      <div
        className={`absolute top-0 left-0 w-full z-10 bg-red-900 h-[${windowHeight}px] flex flex-col`}
        style={{
          height: `${windowHeight}px`,
        }}
      >
        <div
          className={`w-full border justify-between flex items-center p-4`}
          style={{
            height: `${colHeight}px`,
          }}
        >
          <span className=" text-[30px] uppercase leading-none tracking-wide font-extrabold">
            {title}
          </span>
          <span className="text-[30px] font-extrabold">01</span>
        </div>
        <div className="flex flex-1 items-center justify-center ">CONTENT here</div>
      </div>
    );
  }

  return (
    <motion.div
      className={`absolute top-0 left-0 w-full z-10 bg-blue-900 h-[${windowHeight}px] flex flex-col`}
      style={{
        height: `${windowHeight}px`,
        top: `${colHeight * index}px`,
        translateY,
      }}
    >
      <div
        className={`w-full border justify-between flex items-center p-4`}
        style={{
          height: `${colHeight}px`,
        }}
      >
        <span className=" text-[30px] uppercase leading-none tracking-wide font-extrabold">
          {title}
        </span>
        <span className="text-[30px] font-extrabold">{`0${index + 1}`}</span>
      </div>
      <div className="flex flex-1 items-center justify-center ">CONTENT here</div>
    </motion.div>
  );
}
