"use client";

//library
import Image from "next/image";
import {
  useState
} from "react";
import {
  motion
} from "framer-motion";
import {
  Link as LinkScroll
} from "react-scroll";

//icon
import {
  X as Close,
  Menu
} from "lucide-react";

//data
import {
  navLink,
  navLinkType
} from "@/data";


//components
import {
  ScrollProgress
} from "@/components"




export default function Header() {
  const [isOpen,
    setIsOpen] = useState(false);

  function LinkChild({
    linkItem
  }: {
    linkItem: navLinkType
  }) {
    return (
      <p className="uppercase font-poppins hover:text-p3 transition-all duration-300 font-medium cursor-pointer">
        <LinkScroll
          activeClass="text-p3"
          to={linkItem.link}
          spy={true}
          smooth={true}
          offset={100}
          >
          {linkItem.label}
        </LinkScroll>
      </p>
    );
  }

  function Dot() {
    return <div className="bg-p2 h-2 w-2 rounded-full border" />;
  }

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.header
        initial={ { y: "-100%" }}
        animate={ { y: "0%" }}

        transition={ {
          duration: 0.5,
        }}
        className="top-0 left-0 w-screen fixed z-40 bg-background/[0.6] backdrop-blur backdrop-blur-md border-b border-border"
        >
        <ScrollProgress />
        <nav className="container">
          {/*mobile*/}
          <div className="md:hidden w-full flex justify-between py-4 items-center">

            <Image
              src="/images/xora.svg"
              alt="logo"
              width={80}
              height={80}
              />

            <Menu
              onClick={() => setIsOpen(true)}
              className="text-foreground font-bold"
              />
          </div>

          {/*desktop*/}
          <div className="hidden md:flex justify-between py-4 items-center w-full">
            <LinkChild linkItem={navLink[0]} />
            <Dot />
            <LinkChild linkItem={navLink[1]} />

            <Image
              src="/images/xora.svg"
              alt="logo"
              width={150}
              height={150}
              />

            <LinkChild linkItem={navLink[2]} />
            <Dot />
            <LinkChild linkItem={navLink[3]} />
          </div>
        </nav>
      </motion.header>
    </>
  );
}

  function Sidebar({
    isOpen,
    setIsOpen,
  }: {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
  }) {
    return (
      <motion.div
        initial={ { y: "-100%" }}
        animate={ {
          y: isOpen ? "0%": "-100%",
        }}
        transition={ {
          duration: 0.5,
          ease: "easeInOut",
          delay: !isOpen ? 1.5: 0,
        }}
        className="fixed top-0 left-0 w-screen h-[100dvh] z-50 bg-background/[0.7] backdrop-blur backdrop-blur-md flex flex-col gap-12 items-center justify-center flex-col md:hidden border-b border-border overflow-hidden"
        >
        <div className="blur-3xl bg-s4  opacity-40 w-72 h-72 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2" />


        <div className="absolute top-0 right-0 p-4">
          <Close
            onClick={() => setIsOpen(false)}
            className="font-bold hover:text-p3 transition-all duration-300"
            />
        </div>


        {navLink.map((item, index) => (
          <div onClick={() => setIsOpen(false)} key={index} className="h-[20px] overflow-hidden flex justify-center items-center">
            <motion.p
              initial={ {
                y: 50,
              }}
              animate={isOpen ? "visible": "hidden"}
              variants={ {
                visible: {
                  y: 0,
                },
                hidden: {
                  y: 50,
                },
              }}
              transition={ {
                duration: 0.5,
                delay: (index * 0.2) + 0.2,
              }}

              className="relative z-10 text-[1.2rem] capitalize font-poppins font-medium hover:text-p3 transition-all duration-300 "
              >
              <LinkScroll
                activeClass="text-p3"
                to={item.link}
                spy={true}
                smooth={true}
                offset={100}
                >
                <p onClick={() => setIsOpen(false)}>
                  {item.label}
                </p>
              </LinkScroll>
            </motion.p>
          </div>
        ))}
      </motion.div>
    );
  }