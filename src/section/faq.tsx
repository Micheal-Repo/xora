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

      <section className="w-screen relative z-30 section-p mt-[2rem]">
        <Gradient />
        <div className="relative z-20 container text-left">
          <Title className="text-left">Curiosity didn't kill the cat, it gave it answers.</Title>

          <motion.p
            initial={ { scale: 0.8, opacity: 0 }}
            whileInView={ { scale: 1, opacity: 1 }}
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
            //viewport={ { once: true }}
            transition={ {
              duration: 0.5,
            }}
            className="relative mt-28 relative grid md:grid-cols-2 grid-cols-1">
            <div className="absolute left-1/2 -translate-x-1/2 w-[70px] h-[70px] flex justify-center items-center  -top-[35px] rounded-full bg-card">

              <Image
                src="/images/faq-logo.svg"
                alt="logo"
                width={50}
                height={50}

                />
            </div>
            <div className="bg-card  md:rounded-l-2xl rounded-t-2xl px-4 sm:px-6 md:py-6 pt-14">

              <FaqItems first={true} />
            </div>
            <div className="bg-card md:rounded-r-2xl max-md:rounded-b-2xl px-4 sm:px-6 md:py-6 pb-6">

              <FaqItems />
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollElement>
  )
}