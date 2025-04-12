"use client";
//library
import {
  motion
} from "framer-motion";

import {
  cn
} from "@/lib/utils"


export default function Gradient({
  className
}: {
  className?:string
}) {
  return (
    <motion.div
      initial={ { opacity: 0 }}
      whileInView={ { opacity: 1 }}
      viewport={ { once: true }}
      transition={ {
        duration: 0.5,
      }}
      >
      <div
        className={cn("blur-sp bg-s4 opacity-25 max-w-3xl lg:max-w-5xl w-full md:h-[600px] h-[600px] lg:h-[800px]  mx-auto rounded-full absolute z-0 left-1/2 -translate-x-1/2 -top-[100px]", className)} />

    </motion.div>
  )
}