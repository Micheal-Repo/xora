"use client";
//libtrary
import Image from "next/image"
import {
  motion
} from "framer-motion";

//components
import {
  ScrollElement,
  Button,
} from "@/components";

//data
import {
  navLink,
  features,
  details,
  featuresType,
  detailType,
} from "@/data"

//lib
import {
  cn
} from "@/lib/utils"

export default function Features() {
  return (
    <ScrollElement name={navLink[0].link}>
      <section className="w-screen relative z-30 pb-[3rem]">
        <div className="container">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 max-md:gap-6 max-md:mt-6">
            {features.map((item)=>(
              <Card key={item.id} item={item} />
            ))}
          </div>
          <motion.div
            initial={ { y: -20, opacity: 0 }}
            whileInView={ { y: 0, opacity: 1 }}
            viewport={ { once: true }}
            transition={ {
              duration: 0.5,
            }}
            className="relative z-30 w-full rounded-2xl md:rounded-3xl max-md:mt-6 md:-mt-4  p-8 sm:p-10  md:p-12 grid md:grid-cols-4 g2 sm:grid-cols-3 grid-cols-2 gap-4">
            {details.map((item, i) => (
              <motion.div
                key={item.id}
                initial={ { scale: 0.8, opacity: 0 }}
                whileInView={ { scale: 1, opacity: 1 }}
                viewport={ { once: true }}
                transition={ {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: (i * 0.2) + 0.2,
                }}
                className="w-full flex-col flex gap-2 justify-center items-center">
                <Image
                  src={item.icon}
                  width={70}
                  height={70}
                  alt={item.title}
                  className="shrink-0 flex-shrink-0"
                  />
                <p className="text-sp text-center">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </ScrollElement>
  );
}


  function Card({
    item
  }: {
    item: featuresType
  }) {
    return (
      <motion.div
        initial={ { y: 20, opacity: 0 }}
        whileInView={ { y: 0, opacity: 1 }}
        viewport={ { once: true }}
        transition={ {
          duration: 0.5,
        }}
        className={cn("w-full g1 max-md:rounded-2xl p-8 sm:p-10 md:p-12 space-y-4", item.id == "0" ? "md:rounded-tl-3xl": "md:rounded-tr-3xl ")}>
        <Image
          src={item.icon}
          width={90}
          height={90}
          alt=""
          />

        <p className="caption">
          {item.caption}
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{item.title}</h1>

        <p className="text-sp mt-8">
          {item.text}
        </p>

        <Button
          icon={item.button.icon}
          className="mt-6"
          >
          {item.button.title}
        </Button>
      </motion.div>
    )
  }