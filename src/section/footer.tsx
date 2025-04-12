"use client"
import Image from "next/image"
import {
  motion
} from "framer-motion"
import {
  socials
} from "@/data"

export default function Footer() {
  return (
    <footer className="bg-background w-screen section-p">
      <div className="container flex md:flex-row items-center justify-center flex-col gap-6 md:justify-between">

        <motion.p
          initial={ { scale: 0.8, opacity: 0 }}
          whileInView={ { scale: 1, opacity: 1 }}
          transition={ {
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="body">
          @Copyright, Micheal
        </motion.p>

        <div className="flex items-center gap-4">
          <motion.p
            initial={ { scale: 0.8, opacity: 0 }}
            whileInView={ { scale: 1, opacity: 1 }}
            transition={ {
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
            className="text-p1 hover:text-p3 transition-all duration-300">
            Privacy Policy
          </motion.p>
          <motion.p
            initial={ { scale: 0.8, opacity: 0 }}
            whileInView={ { scale: 1, opacity: 1 }}
            transition={ {
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.4,
            }}
            className="text-p1 hover:text-p3 transition-all duration-300">
            Terms of Use
          </motion.p>
        </div>

        <div className="flex items-center gap-4 max-md:mt-10">
          {socials.map((item, i)=>(
            <motion.div key={i}
              initial={ { scale: 0.8, opacity: 0 }}
              whileInView={ { scale: 1, opacity: 1 }}
              //viewport={ { once: true }}
              transition={ {
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: (i * 0.2) + 0.3,
              }}
              className="rounded-lg border border-border hover:border-p1 transition-all duration-300">
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                />
            </motion.div>
          ))}
        </div>

      </div>
    </footer>
  )
}