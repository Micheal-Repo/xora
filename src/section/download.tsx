import Image from "next/image"
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

        <div className="container">
          {/*logo*/}
          <div className="space-y-4">
            <Image
              src="/images/xora.svg"
              alt="logo"
              width={120}
              height={120}
              />
            <p className="text-sp">
              Try it now for free on iOS, Android, PC, Web - whatever your
              flavor, we've got you covered.
            </p>

            <div className="flex items-center flex-wrap gap-4 md:gap-6">
              {links.map((item, i)=>(
                <div className="bg-sp border border-sp w-[80px] h-[80px] text-white relative flex justify-center items-center">
                  <item.icon />
                  <BorderBeam duration={8} size={60} />
                </div>
              ))}
            </div>
          </div>

          <Company />
        </div>
      </section>
    </ScrollElement>
  )
}



  export function Company() {
    return (
      <div className="mt-[2rem] relative flex w-full max-w-xl mx-auto flex-col items-center justify-center overflow-hidden">
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