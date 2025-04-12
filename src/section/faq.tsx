"use client"

import Image from "next/image"
import {
  motion
} from "framer-motion"
//components
import {
  ScrollElement,
  Title,
  Gradient,
  FaqItems,
} from "@/components";

//data
import {
  navLink
} from "@/data"



export default function Faq() {
  return (
    <ScrollElement name={navLink[2].link}>

      <section className="w-screen relative z-30 section-p ">
        <Gradient />
        <div className="relative z-20 container text-left">
          <Title className="text-left">Curiosity didn't kill the cat, it gave it answers.</Title>

          <motion.p
            initial={ { scale: 0.8, opacity: 0 }}
            whileInView={ { scale: 1, opacity: 1 }}
            viewport={ { once: true }}
            transition={ {
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            className="body mt-4"
            >
            You've got questions, we've got answers.
          </motion.p>


          <motion.div
            initial={ { y: 20, opacity: 0 }}
            whileInView={ { y: 0, opacity: 1 }}
            viewport={ { once: true }}
            transition={ {
              duration: 0.5,
            }}
            className="relative mt-20 relative grid md:grid-cols-2 grid-cols-1">
            <div className="absolute left-1/2 -translate-x-1/2 w-[70px] h-[70px] flex justify-center items-center  -top-[35px] rounded-full bg-sp border-sp border-t">

              <Image
                src="/images/faq-logo.svg"
                alt="logo"
                width={40}
                height={40}

                />
            </div>
            <div className="bg-sp  md:rounded-l-2xl rounded-t-2xl px-4 sm:px-6 md:py-6 pt-14 border-sp md:border-y md:border-l max-md:border-x max-md:border-t">

              <FaqItems first={true} />
            </div>
            <div className="bg-sp  md:rounded-r-2xl max-md:rounded-b-2xl px-4 sm:px-6 md:py-6 pb-6 border-sp md:border-y md:border-r max-md:border-x max-md:border-b">

              <FaqItems />
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollElement>
  )
}