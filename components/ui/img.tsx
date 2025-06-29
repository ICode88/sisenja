"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImgProps {
  position?: "top" | "bottom";
  color?: string;
  height?: number;
  className?: string;
}

export function Img({
  position = "bottom",
  color = "fill-white dark:fill-background",
  height = 80,
  className,
}: ImgProps) {
  return (
    <>
  
      <div className="container mx-auto px-4 relative">
        <div className="items-center flex w-full p-10">

        <Image
          src="/images/banner.png"
          alt="banner"
          width={300}
          height={40}
          className="z-10 relative w-full h-auto"
          />
          </div>
      </div>
    </>
  );
}