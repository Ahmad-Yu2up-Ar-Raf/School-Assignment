'use client';
import React, { useRef , useState} from 'react';
import { Github } from 'lucide-react';
import { TimelineContent } from '@/components/framer-timeline';
import { TextAnimate } from "@/components/ui/text-animate";

function TimelineAnimation() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
         
          <main className='max-w-7xl m-auto  space-y-12'>
{/* 1 start */}
      <section
        className="sm:grid space-y-4 grid-cols-2 gap-10 pt-10 "
        ref={heroRef}>
          
        <TimelineContent animationNum={0} timelineRef={heroRef}>
        <video
          autoPlay
          muted
          loop
          className='w-full rounded-lg h-full object-cover  aspect-square '
        >
          <source
            src='https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4'
            type='video/mp4'
          />
        </video>
        </TimelineContent>
        <div className="space-y-2 text-white">
          {' '}
           
            
            <h1 className="text-4xl font-medium">
                <TextAnimate animation="blurInUp" by="character">
            Abad Ke-14: Karya Mpu Tantular
            </TextAnimate>
            </h1>
       
          <TimelineContent animationNum={2} timelineRef={heroRef}>
            <p className="text-base   text-gray-400  cursor-pointer group " onClick={toggleClass}>
              <span className={isActive ? '' : 'line-clamp-4 md:line-clamp-none'} >

            "Bhinneka Tunggal Ika" pertama kali dicatat dalam karya sastra Kakawin Sutasoma yang ditulis oleh Mpu Tantular pada masa kerajaan Majapahit. Dalam karya ini, semboyan tersebut digunakan untuk menggambarkan persatuan meskipun ada perbedaan agama antara Hindu dan Buddha.
              </span>
              <span className={isActive ? 'hidden' : 'text-blue-400 md:hidden group-hover:text-white transition-all ease-in-out'}>
                Baca Lebih
              </span>
            </p>
          </TimelineContent>
          {/* <TimelineContent animationNum={3} timelineRef={heroRef}>
            <a
              className="flex gap-2 w-fit bg-gray-800 rounded-md p-2"
              href="https://github.com/naymurdev"
              target="_blank">
              <Github />
              Start it Now
            </a>
          </TimelineContent> */}
        </div>
      </section>
      {/* 1 end */}
      {/* 2 start */}
      <section
        className="sm:grid space-y-4 grid-cols-2 gap-10 pt-10 "
        ref={aboutRef}>
        <div className='md:order-2'>
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
        <video
          autoPlay
          muted
          loop
          className='w-full rounded-lg h-full object-cover  aspect-square '
        >
          <source
            src='https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4'
            type='video/mp4'
          />
        </video>
        </TimelineContent>

        </div>
        <div className="space-y-2 text-white md:order-1">
          {' '}
          <TimelineContent animationNum={1} timelineRef={aboutRef}>
            <h1 className="text-4xl font-medium">
            Abad Ke-15 - Ke-16: Penyebaran dalam Budaya Majapahit
            </h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
            <p className="text-base   text-gray-400  cursor-pointer group " onClick={toggleClass}>
              <span className={isActive ? '' : 'line-clamp-4 md:line-clamp-none'} >

              Konsep "Bhinneka Tunggal Ika" semakin dikenal dalam budaya Majapahit dan dipahami sebagai simbol persatuan dalam keragaman. Di masa ini, Indonesia (terutama pulau Jawa) terdiri dari berbagai kerajaan dan budaya yang berbeda, tetapi semboyan ini mencerminkan harapan untuk kesatuan di tengah perbedaan tersebut.
              </span>
              <span className={isActive ? 'hidden' : 'text-blue-400 md:hidden group-hover:text-white transition-all ease-in-out'}>
                Baca Lebih
              </span>
            </p>
          </TimelineContent>
          {/* <TimelineContent animationNum={3} timelineRef={heroRef}>
            <a
              className="flex gap-2 w-fit bg-gray-800 rounded-md p-2"
              href="https://github.com/naymurdev"
              target="_blank">
              <Github />
              Start it Now
            </a>
          </TimelineContent> */}
        </div>
      </section>
      {/* 2 start */}
          </main>
    </>
  );
}
export default TimelineAnimation;
