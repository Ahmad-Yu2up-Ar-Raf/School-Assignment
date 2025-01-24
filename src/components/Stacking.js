'use client';
import { ReactLenis } from 'lenis/react';
import React, { useRef , useState} from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';

import Image from 'next/image';
import ScrollElement from '../components/scroll-element';
import { ArrowRight } from 'lucide-react';
const projects = [
  {
    title: 'Pluralitas',
    description:
      'Indonesia adalah negara dengan keanekaragaman yang luar biasa. Terdiri dari lebih dari 1.300 suku bangsa, setiap suku memiliki adat, budaya, dan tradisi yang khas. Dengan lebih dari 700 bahasa daerah serta berbagai agama dan kepercayaan, Indonesia menunjukkan betapa kayanya perbedaan yang ada di dalamnya. Bhinneka Tunggal Ika menjadi prinsip yang mempersatukan semua keberagaman ini, menjaga harmoni di tengah perbedaan.',

    link: '/pluralitas.mp4',
    color: '#5196fd',
  },
  {
    title: 'Kesatuan dalam Keragaman',
    description:
      'Meskipun beragam, masyarakat Indonesia memiliki semangat persatuan untuk mencapai tujuan bersama. Prinsip Bhinneka Tunggal Ika mengajarkan bahwa perbedaan bukanlah hambatan, melainkan kekuatan. Dengan menghormati satu sama lain, bangsa ini mampu bekerja sama dan membangun kebersamaan untuk menghadapi tantangan yang ada.',
   
    link: '/w.mp4',
    color: '#8f89ff',
  },
  {
    title: 'Toleransi dan Gotong Royong',
    description:
      'Toleransi menjadi landasan penting dalam kehidupan masyarakat Indonesia yang beragam. Filosofi gotong royong mencerminkan kebersamaan ini, di mana orang saling membantu tanpa memandang perbedaan. Nilai-nilai ini mengajarkan bahwa kerja sama dan saling menghormati dapat membawa masyarakat menuju keharmonisan.',

    link: '/Gotong-Royong.mp4',
    color: '#13006c',
  },
  {
    title: 'Semboyan Negara Indonesia',
    description:
      'Semboyan Bhinneka Tunggal Ika memiliki arti mendalam sebagai identitas bangsa. Tertulis pada lambang negara, Garuda Pancasila, semboyan ini menegaskan pentingnya persatuan di tengah keberagaman. Sebagai pedoman, semboyan ini menjadi pengingat bahwa Indonesia adalah satu kesatuan yang kokoh meskipun berbeda-beda.',

    link: '/indonesia.mp4',
    color: '#ed649e',
  },

];
export default function index() {

  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main className=" m-auto " ref={container}>
 

        <section className="text-white   w-full ">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

    
      </main>
    </ReactLenis>
  );
}
export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,

  progress,
  range,
  targetScale,
}) => {

  const [activeSections, setActiveSections] = useState({});

  const toggleSection = (index) => {
    setActiveSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen  flex items-center justify-center sticky top-0"
    >
                <ScrollElement viewport={{ amount: 0.7, margin: '0px 0px 0px 0px' }} className={`max-w-7xl`}>

      <motion.div
        style={{
    
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex shadow-xl overflow-hidden  flex-col md:h-[25em] relative -top-[25%]  h-fitt md:p-0 p-7 origin-top w-full mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border`}
      >

        <div className="relative md:flex py-3 md:py-0 text-start md z-10 px-0 rounded-2xl    h-full mx-auto">
          <>
   
<div className={` ${i % 2 === 0 ? 'md:order-2' : ''}  h-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]   mb-5 md:mb-0 overflow-hidden w-full   `}>

          <motion.div
                   style={{ scale: imageScale }}  
            className='relative mx-auto h-80 w-full md:h-full mb-6 md:mb-0  overflow-hidden '
          >
          <video
          autoPlay
          muted
          loop
          className={`  w-full relative   right-0   h-full object-cover  aspect-square `}
        >
          <source
             src={url}
            type='video/mp4'
          />
        </video>
          </motion.div>
</div>
   
         <div className=' md:w-[40em] lg:w-[80em] flex md:p-14 content-center flex-col '>
          <div className='md:space-y-2 mb-8'>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium tracking-tight text-white">
            {title}
            </h1>
            <div className='group' onClick={() => toggleSection(index)}>

            <p  className={ `${activeSections[index] ? 'line-clamp-none' : 'line-clamp-3 md:line-clamp-4 ' } cursor-pointer   text-base pt-2    text-gray-400 capitalize`}>
            {description}
            </p>
            <span
          className={`${
            activeSections[index] ? 'hidden' : 'text-blue-400 font-semibold '
          }  group-hover:text-blue-200 md:text-sm transition-all cursor-pointer ease-in-out `}
        >
          Baca Selengkapnya 
        </span>
            </div>

          </div>
            <button
        className="relative mt-auto w-fit bg-gradient-to-b  hover:text-white from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent   flex items-center group after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-200 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
        Pelajari Lebih Lanjut
        <div className='group-hover:translate-x-2 ml-3 transition-all text-indigo-400 group-hover:text-white'>
          <ArrowRight />
        </div>
      </button>
         </div>
          </>
        </div>
   
          
        
      </motion.div>
      </ScrollElement>
    </div>
  );
};
