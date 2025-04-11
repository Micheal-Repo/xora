"use client"

import Image from "next/image"
import {
  motion
} from "framer-motion"

//data
import {
  navLink,
  testimonials,
  testimonialType
} from "@/data";


//components
import {
  Title,
  Avatar,
  Marquee
} from "@/components";
import {
  cn
} from "@/lib/utils"


export default function Testimonials() {

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section className="w-screen relative section-p">
      <div className="container flex md:justify-between gap-16 max-md:flex-col">


        {/*text*/}
        <div className="max-w-md text-left">
          <motion.p
            initial={ { scale: 0.8, opacity: 0 }}
            whileInView={ { scale: 1, opacity: 1 }}
            transition={ {
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            className="caption mb-4"
            >
            Wall of Love
          </motion.p>
          <Title className="">Words From Our Fans</Title>
        </div>

        {/*Marquee*/}
        <motion.div
          initial={ { opacity: 0 }}
          whileInView={ { opacity: 1 }}
          transition={ {
            duration: 0.5,

          }}

          className="relative grid grid-cols-2 overflow-hidden max-w-2xl w-full h-[500px]">
          <Marquee pauseOnHover vertical className="[--duration:20s] gap-0">
            {firstRow.map((item, i) => (
              <Card id={i} key={i} item={item} first={true} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s] gap-0">
            {secondRow.map((item, i) => (
              <Card id={i} key={i} item={item} first={false} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </motion.div>
      </div>
    </section>
  )
}


  function Card({
    item,
    first,
    id
  }: {
    item: testimonialType,
    first: boolean,
    id: number
  }) {
    return (
      <div className={cn("w-full border-sp bg-sp p-4 sm:p-6 md:p-8 flex flex-col gap-4", first ? "border-b border-l border-r": "border-r border-b", id === 0 ? "border-t": "")}>
        <p className="text-white">
          {item.comment}
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          <Avatar
            src={item.avatarUrl}
            fallback={item.name.split("")[0]}
            />
          <div className="flex flex-col">
            <p className="text-bold">
              {item.name}
            </p>
            <p className="body">
              {item.role}
            </p>
          </div>
        </div>
      </div>
    )
  }