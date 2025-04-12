"use client"
import {
  motion
} from "framer-motion";
import {
  cn
} from "@/lib/utils"

export default function Title({
  children,
  className
}: {
  children: string,
  className?: string
}) {
  return (
    <motion.h2
      initial={ { scale: 0.8, opacity: 0 }}
      whileInView={ { scale: 1, opacity: 1 }}
      viewport={ { once: true }}
      transition={ {
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      className={cn("font-poppins max-w-md title", className)}
      >
      {children}
    </motion.h2>
  )
}