'use client';
import { ReactLenis } from 'lenis/react';
import Stacking from '../components/Stacking'
import Hero from '../components/Hero'
import Keberagaman from '../components/Keberagaman'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Curve from '@/components/Layout/Curve'
import TimelineAnimation from '@/components/Timeline';

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
    <Section1 scrollYProgress={scrollYProgress} />
    <Section2 scrollYProgress={scrollYProgress} />
    <ReactLenis root>
    
    <main className="bg-black">
      <div className="wrapper">
        <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <h1 className="2xl:text-7xl text-2xl  md:text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
           Mengapa Bhineka Tunggal Ika Dijadikan Sebagai Semboyan Negara ?
          </h1>
        </section>

        <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-7xl text-2xl  md:text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            
          </h1>
        </section>
        <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            Don't Forget To Share <br /> This Sticky CSS Tricks.😎
          </h1>
        </section>
      </div>

      {/* <section className="text-white   w-full bg-slate-950  ">
        <div className="grid grid-cols-2">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Thanks To Scroll.
              <br /> Now Scroll Up Again☝️🏿
            </h1>
          </div>
          <div className="grid gap-2">
            <figure className="grid place-content-center -skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
              />
            </figure>
            <figure className="grid place-content-center skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
              />
            </figure>
            <figure className="grid place-content-center -skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
              />
            </figure>
            <figure className="grid place-content-center skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="text-white   w-full bg-slate-950  ">
        <div className="grid grid-cols-2 px-8">
          <div className="grid gap-2">
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
              />
            </figure>
          </div>
          <div className="sticky top-0 h-screen grid place-content-center">
            <h1 className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]">
              Copied & Paste Every Component you want and make an creative
              website 😎
            </h1>
          </div>
        </div>
      </section> */}

    </main>
  </ReactLenis>
    </main>
{/* <Stacking></Stacking> */}
     {/* <main ref={container} className=' '>
     <Section1 scrollYProgress={scrollYProgress} />
     <Section2 scrollYProgress={scrollYProgress} />
 
     </main> */}
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

    <TimelineAnimation  className='absolute max-w-6xl bottom-0 left-0 right-0 top-28 md:top-0 '/>
    </div>
    </motion.section>
  );
};