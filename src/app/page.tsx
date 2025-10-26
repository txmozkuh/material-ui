"use client";
import { Marquee } from "@/components/ui/marquee";
import SlidingWindow from "@/components/ui/sliding-window";
import SlidingWindowVertical from "@/components/ui/sliding-window-vertical";
import SVGStroke from "@/components/ui/svg-stroke";
import React from "react";

export default function page() {
  return (
    <main className="relative">
      {/* <div className="w-2/3 border-x mx-auto h-screen flex items-center justify-center overflow-hidden">
        <Marquee />
      </div> */}
      {/* <div className="w-full relative">
        <SVGStroke />
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </div> */}
      <div className="h-screen w-full"></div>
      <SlidingWindowVertical />
      {/* <SlidingWindow /> */}
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </main>
  );
}
