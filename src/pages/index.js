'use client';
import { ReactLenis } from 'lenis/react';
import Stacking from '../components/Stacking'
import Hero from '../components/Hero'
import Keberagaman from '../components/Keberagaman'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Curve from '@/components/Layout/Curve'
import TimelineAnimation from '@/components/Timeline';
import ScrollBaseAnimation from '../components/text-marquee';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <> 
    <Curve   >
    <main ref={container} className="relative  bg-black  ">
    <ScrollProgress className="top-0" />
    <Section1 scrollYProgress={scrollYProgress} />
    <Section2 scrollYProgress={scrollYProgress} />
    <ReactLenis root>
    
    <main className="bg-black">
      
      <div className="wrapper  ">
        <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0 ">
          <div className="absolute bottom-0  bg-black  left-0 right-0 top-0  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Walau berbeda-beda namun tetap satu jua
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Bersatu kita padu bercerai kita runtuh
        </ScrollBaseAnimation>
        </section>

        <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-7xl text-2xl  md:text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            
          </h1>
        </section>
        <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
          wadasss
          </h1>
        </section>
      </div>

    

    </main>
  </ReactLenis>
    </main>

    </Curve>
    </>
  );
}



const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, -2]);
 
  return (
    <motion.section
      style={{ scale }}
      className='sticky   top-0 h-screen  flex flex-col items-center justify-center text-black'
    >
<Hero className='absolute  bottom-0 left-0 right-0 top-0 '/>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0], [0, 1]);

  return (
    <motion.section
      style={{ scale}}
      className='relative  bg-gradient-to-t to-[#010921] from-[#06060e] text-blue '
    >
       
    <div className='pt-24  z-20 px-6  md:pt-0 m-auto'>

    <TimelineAnimation  className=''/>
    </div>
    </motion.section>
  );
};