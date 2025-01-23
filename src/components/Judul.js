
import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
export default function Title(props) {
   
return (

    <section className={`text-white     ${props.variant}  w-full  grid place-content-center `}>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <h1 className='2xl:text-7xl text-4xl md:text-5xl px-8 font-semibold  text-center tracking-tight leading-[120%]'>
            <TextAnimate animation="blurInUp" by="character">
              {props.text}
       </TextAnimate>
            </h1>
          </section>
)
 }
