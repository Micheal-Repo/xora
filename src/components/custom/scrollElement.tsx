"use client"
import { Element } from "react-scroll"


export default function ScrollElement({
  children,
  name
}:{
  children:React.ReactNode,
  name: string
}){
  return (
      <Element name={name}>
        {children}
      </Element>
    )
}