'use client';
import { ReactLenis } from 'lenis/react';
import Stacking from '../components/Stacking'
import Hero from '../components/Hero'
import Keberagaman from '../components/Keberagaman'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Curve from '@/components/Layout/Curve'
import { RetroGrid } from '@/components/magicui/retro-grid';
import TimelineAnimation from '@/components/Timeline';
import ScrollBaseAnimation from '../components/text-marquee';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import ImageMouseTrail from '@/components/mousetrail';

import { SparklesText } from "@/components/magicui/sparkles-text";
const images = [
  'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1546942113-a6c43b63104a?q=80&w=1200&auto=format',
  'https://images.unsplash.com/photo-1726551195764-f98a8e8a57c3?q=80&w=1200&auto=format',
];

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
        <section className="text-white h-96  md:h-screen  w-full bg-slate-950  md:grid place-content-center sticky top-0 ">
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
   
        <ImageMouseTrail
      items={images}
      maxNumberOfImages={5}
      distance={25}
      fadeAnimation={true}
      imgClass='sm:w-40 w-28 sm:h-48 h-36'
        className="bg-white text-black absolute h-full w-full bottom-0 top-0"
      >
        
         <article className='relative z-50 mix-blend-difference'>
          <h1 className='lg:text-4xl lg:w-[20em]  md:text-3xl text-xl text-center font-semibold mix-blend-difference'>
           <SparklesText text="Harmoni dalam Keberagaman: Membangun Jembatan Antara Kita" />
           
          </h1>
        </article>
      </ImageMouseTrail>
            
   <RetroGrid />
        </section>
        <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <section className='text-white     md:h-[70vh]  w-full  grid place-content-center '>
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        
                <h1 className='2xl:text-7xl text-4xl md:text-5xl px-8 font-semibold  text-center tracking-tight leading-[120%]'>
                  Karakteristik Warga Masyarakat Indonesia <span className='block animate-bounce mt-3'>👇</span> 
                </h1>
              
              </section>
        </section>
      </div>
      <section    className='relative  bg-gradient-to-t to-[#010921] from-[#06060e] '>
        <Stacking clasname='bg-black'/>

        </section>

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
      className='relative  bg-gradient-to-t to-[#010921] from-[#06060e] '
    >
       
    <div className='pt-24  z-20 px-6  md:pt-0 m-auto'>

    <TimelineAnimation  className=''/>
    </div>
    </motion.section>
  );
};