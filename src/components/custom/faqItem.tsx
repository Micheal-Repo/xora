"use client"
import {
  useState
} from "react"
//components
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordionui';

//icon
import {
  ChevronRight
} from 'lucide-react';

//data
import {
  faq,
  faqType
} from "@/data"

import {
  cn
} from "@/lib/utils"


export default function FaqItems({
  first
}: {
  first?:boolean
}) {

  const [id,
    setId] = useState < number | null > (null)

  function handleClick(index: number) {
    if (id !== null) {
      if (id === index) {
        setId(null)
      } else {
        setId(index)
      }
    } else {
      setId(index)
    }
  }


  return (
    <Accordion
      className='w-full'
      transition={ { type: 'spring', stiffness: 120, damping: 20 }}
      variants={ {
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
      >
      {faq.map((item, i)=>(
        (first ? i < 5: i > 4) &&
        <div key={i}
          onClick={()=> handleClick(i)}
          >
          <AccordionItem value={`item-${i}`} className={cn('w-full p-4 sm:p-6  transition-all duration-300 rounded-2xl', id === i ? "g1": "")}>
            <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
              <div className='flex items-center justify-between gap-4'>

                <h2 className="font-bold sm:text-xl text-[1.1rem]">{item.question}</h2>

                <div className="shrink-0 flex-shrink-0 rounded-full h-10 w-10 relative p-3 g1 shadow shadow-black/[0.6]">
                  <span className="w-[60%] h-2 rounded-xl bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <span className="rounded-xl origin-center w-[60%] h-2 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-100 group-data-expanded:rotate-0 group-data-expanded:opacity-0 transition-all duration-200" />
                </div>


              </div>
            </AccordionTrigger>
            <AccordionContent className='origin-left'>
              <p className='text-sp'>
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}