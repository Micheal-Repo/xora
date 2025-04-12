"use client"
import Image from "next/image"
import {
  motion
} from "framer-motion"


//components
import {
  ScrollElement,
  Marquee,
  BorderBeam
} from "@/components";


//data
import {
  navLink,
  links,
  logos,
  logoType
} from "@/data";


export default function Download() {
  return (
    <ScrollElement name={navLink[3].link}>

      <section className="w-screen relative section-p bg-gradient-to-b from-s3 via-s5 to-s5 ">

        <div className="container overflow-hidden">

          <div className="w-full md:flex md:justify-between md:items-center md:gap-6">

            {/*logo*/}
            <div className="space-y-6">
              <motion.div
                initial={ { scale: 0.8, opacity: 0 }}
                whileInView={ { scale: 1, opacity: 1 }}
                transition={ {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                >
                <Image
                  src="/images/xora.svg"
                  alt="logo"
                  width={150}
                  height={150}
                  />
              </motion.div>
              <motion.p
                initial={ { scale: 0.8, opacity: 0 }}
                whileInView={ { scale: 1, opacity: 1 }}
                transition={ {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                className="text-sp max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
              </motion.p>

              <div className="flex items-center flex-wrap gap-4 md:gap-6">
                {links.map((item, i)=>(
                  <motion.div
                    key={i}
                    initial={ { scale: 0.8, opacity: 0 }}
                    whileInView={ { scale: 1, opacity: 1 }}
                    transition={ {
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: i * 0.3,
                    }}
                    className="bg-sp w-[80px] rounded-full h-[80px] text-white relative flex justify-center items-center">
                    <item.icon />
                    <BorderBeam duration={8} size={80} delay={10 * i} />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={ { opacity: 0 }}
              whileInView={ { opacity: 1 }}
              transition={ {
                duration: 0.5
              }}
              className="border border-white/[0.3] rounded-2xl p-4 max-md:hidden">
              <Image
                src="/images/screen.jpg"
                width={755}
                height={555}
                alt="screen"
                className="rounded-2xl"
                />
            </motion.div>
          </div>

          <Company />
        </div>
      </section>
    </ScrollElement>
  )
}



  export function Company() {
    return (
      <div className="mt-[4rem] relative flex w-full mx-auto flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] [--gap:2rem]">
          {logos.map((item, i) => (
            <Logo key={i} item={item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] [--gap:2rem]">
          {logos.map((item, i) => (
            <Logo key={i} item={item} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-s5"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-s5"></div>
      </div>
    );
  }



  function Logo({
    item
  }: {
    item: logoType
  }) {
    return (
      <Image
        src={item.url}
        alt={item.title}
        width={item.width}
        height={item.height}
        />
    )
  }