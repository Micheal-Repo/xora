"use client";

import Image from "next/image"
import {
  useState,
  useEffect
} from "react"
import {
  motion
} from "framer-motion";


//components
import {
  ScrollElement,
  Button,
  AnimatedBackground,
  Title,
  Gradient
} from "@/components";
import CountUp from 'react-countup';

//lib
import {
  navLink,
  plans,
  planType
} from "@/data";
import {
  cn
} from "@/lib/utils"

//icon
import {
  IoShieldCheckmark
} from "react-icons/io5";



export default function Features() {
  const [isMonthly,
    setIsMonthly] = useState(true)


  return (
    <ScrollElement name={navLink[1].link}>
      <section className="w-screen relative z-30 section-p mt-[2rem]">

        <Gradient />
        <div className="relative z-20 container flex flex-col justify-center items-center">

          <Title className="text-center mb-8 mx-auto">Flexible pricing for teams of all sizes</Title>

          <Tab setIsMonthly={setIsMonthly} />


          {/*desktop*/}
          <div className="w-full mt-20 flex items-center max-md:hidden">
            {plans.map((item, i)=>(
              <div key={i} className="flex-1">
                <Plan id={i} item={item} isMonthly={isMonthly} />
              </div>
            ))}
          </div>

          {/*mobile*/}
          <div className="w-screen overflow-auto scroll-hide mt-8 md:hidden">
            <div className="flex items-center gap-[20px] px-[20px] w-[940px] py-[50px]">

              {plans.map((item, i)=>(
                <div key={i} className="w-[300px]">
                  <Plan id={i} item={item} isMonthly={isMonthly} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollElement>

  );
}


  function Tab({
    setIsMonthly
  }: {
    setIsMonthly: (val: boolean)=> void
  }) {

    const TABS = ["monthly",
      "annually"]

    function handleClick(id: string | null) {
      const val = id === "monthly" ? true: false

      setIsMonthly(val)
    }

    return (
      <motion.div
        initial={ { scale: 0.8, opacity: 0 }}
        whileInView={ { scale: 1, opacity: 1 }}
        transition={ {
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
        className='flex items-center rounded-xl border border-sp shadow-xl shadow-black/[0.4] bg-sp'>
        <AnimatedBackground
          defaultValue={TABS[0]}
          onValueChange={(id)=> handleClick(id)}
          className='rounded-xl g1'
          transition={ {
            type: 'spring',
            bounce: 0.2,
            duration: 0.3,
          }}
          >
          {TABS.map((tab, i) => (
            <button
              key={i}
              data-id={tab}
              type='button'
              className='inline-flex px-8 py-4 font-medium text-white uppercase'
              >
              {tab}
            </button>
          ))}
        </AnimatedBackground>
      </motion.div>
    )
  }



  function Plan({
    item,
    id,
    isMonthly,
  }: {
    item: planType,
    id: number,
    isMonthly: boolean
  }) {
    return (
      <motion.div
        initial={ { y: 30, opacity: 0 }}
        whileInView={ { y: 0, opacity: 1 }}
        transition={ {
          duration: 0.5,
          delay: id * 0.2
        }}
        className={cn(
          "w-full max-md:border max-md:rounded-3xl border-sp relative bg-sp relative",
          id === 1
          ? "border rounded-3xl bg-s5": id === 0
          ? "border-l border-y rounded-l-3xl": "border-y border-r rounded-r-3xl"
        )}
        >

        {/*top*/}
        <div className={cn("w-full px-8  pb-6 md:pb-8 flex flex-col justify-center items-center rounded-t-3xl ",
          id === 1 ? "bg-s3": ""
        )}>
          <div className={cn("relative",
            id === 1 ? "w-[80px] h-[80px] md:-top-[30px] -top-[40px] md:w-[100px] md:h-[100px]": "-top-[40px] w-[80px] h-[80px]"
          )}>
            <Image
              src={item.logo}
              fill={true}
              alt=""
              />
          </div>

          <div className={cn("rounded-full py-2 px-4 caption border border-p3", id === 1 ? "text-p3": "text-white")}>
            {item.title}
          </div>

          <div className="relative mt-8 flex items-end text-p3">
            <div className={cn("font-poppins text-6xl font-bold")}>
              $<CountUp
                start={item.priceMonthly}
                end={!isMonthly ? item.priceMonthly: item.priceYearly}
                duration={0.4}
                useEasing={false}
                preserveValue
                />
            </div>
            <span className="uppercase">{!isMonthly ? "/yr": "/mo"}</span>
          </div>


          <h3 className="text-xl font-medium mt-2">{item.caption}</h3>
        </div>

        {/*bottom*/}
        <div className="py-6 md:py-8 px-8 flex flex-col gap-5">
          {item.features.map((feature, i)=>(
            <p key={i} className="flex items-center gap-4">
              <IoShieldCheckmark
                size={28}
                className="text-p2 shrink-0 flex-shrink-0" />
              <span>{feature}</span>
            </p>
          ))}
        </div>

        <div className="mt-4 md:mt-6 flex justify-center items-center flex-col pb-6 md:pb-8 ">
          <div className="">
            <Button
              icon={item.icon}
              className=""
              >
              Get started
            </Button>
            {id === 1 && <p className="text-sm text-p3 mt-4 md:mt-8 text-center">
              -{" "}Limited time offer{" "}-
            </p>
            }
          </div>
        </div>
      </motion.div>
    )
  }