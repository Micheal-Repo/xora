"use client";
//library
import {
  motion
} from "framer-motion";
import Image from "next/image";

//components
import {
  ScrollElement,
  GridBackground,
  Button,
  TextAnimate,
  ShinyButton
} from "@/components";

export default function Hero() {
  return (
    <ScrollElement name="hero">
      <section className="w-screen relative ">
        <GridBackground />

        <div className="container pt-[8rem] md:pt-[10rem] pb-[6rem] relative z-20">
          {/*left*/}
          <div className="relative z-20 flex flex-col gap-6">
            <motion.p
              initial={ { scale: 0.8, opacity: 0 }}
              whileInView={ { scale: 1, opacity: 1 }}
              viewport={ { once: true }}
              transition={ {
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              >
              Video Editing
            </motion.p>
            <div>
              <motion.p
                initial={ { scale: 0.8, opacity: 0 }}
                whileInView={ { scale: 1, opacity: 1 }}
                viewport={ { once: true }}
                transition={ {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.5,
                }}
                className="font-poppins text-4xl md:text-6xl font-bold uppercase max-w-sm"
                >
                Amazingly
              </motion.p>
              <motion.p
                initial={ { scale: 0.8, opacity: 0 }}
                whileInView={ { scale: 1, opacity: 1 }}
                viewport={ { once: true }}
                transition={ {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.5,
                }}
                className="font-poppins text-4xl md:text-6xl font-bold uppercase max-w-sm"
                >
                simple
              </motion.p>
            </div>
            <motion.p
              initial={ { scale: 0.8, opacity: 0 }}
              whileInView={ { scale: 1, opacity: 1 }}
              viewport={ { once: true }}
              transition={ {
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.7,
              }}
              className="body max-w-sm"
              >
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </motion.p>
            <motion.div
              initial={ { scale: 0.8, opacity: 0 }}
              whileInView={ { scale: 1, opacity: 1 }}
              viewport={ { once: true }}
              transition={ {
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 1.5,
              }}
              className="mt-8 relative z-20 hover:scale-50 duration-300 transition-all group"
              >
              <Button icon="/images/zap.svg" className="uppercase font-medium">
                Try it now
              </Button>{/*
              <ShinyButton className="uppercase font-medium flex items-center gap-2">
                <Image
                  src="images/zap.svg"
                  width={30}
                  height={30}
                  alt="hero"
                  />
                <p>
                  Try it now
                </p>
              </ShinyButton>
              */}
            </motion.div>
          </div>

          {/*image*/}
          <motion.div
            initial={ { y: -20, opacity: 0 }}
            whileInView={ { y: 0, opacity: 1 }}
            viewport={ { once: true }}
            transition={ {
              duration: 0.5,
              delay: 2,
            }}
            className="absolute top-1/2 md:-translate-y-1/2 right-0 lg:w-[800px] lg:h-[800px] md:w-[750px] md:h-[750px] h-[600px] w-[600px] sm:-translate-y-[50px] overflow-hidden"
            >
            <Image
              src="/images/hero.png"
              alt="hero"
              fill={true}
              className="absolute right-0 max-sm:translate-x-[200px] max-lg:translate-x-[100px]"
              />
          </motion.div>
        </div>
      </section>
    </ScrollElement>
  );
}