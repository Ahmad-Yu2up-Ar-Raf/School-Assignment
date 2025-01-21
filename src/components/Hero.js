import React from 'react';
import Earth from '@/components/globe';
import { Sparkles } from '@/components/sparkles';


function index() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-black text-white">
        <article className="grid gap-4 text-center relative z-10 pt-10">
          <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Pelajari lebih dalam
          </span>
          <h1 className="text-4xl lg:text-5xl pb-2  font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            
            
            Asal usul semboyan
            <br />
            Bhineka Tunggal Ika
          </h1>
  
          <Earth />
   
        </article>
     
        <div className='absolute right-0 left-0 bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute'>
            <Sparkles
              density={1800}
              speed={1.2}
              color='#48b6ff'
              direction='top'
              className='absolute inset-x-0 bottom-0 h-full w-full '
            />
          </div>
        
      </div>
    </>
  );
}
export default index;
