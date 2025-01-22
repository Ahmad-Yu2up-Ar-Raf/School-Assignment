import React from 'react';
import Earth from '@/components/globe';
import { Sparkles } from '@/components/sparkles';
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";
function index() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-black text-white">
        <article className="grid gap-4 text-center relative z-10 pt-10">
     
      <AnimatedGradientText className={'bg-[#0f1c35]'}>
      ✨ <hr className="mx-2 h-4 w-[0.1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#40b6ff] via-[#9c40ff] to-[#40b6ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Damai Dalam Keberagaman
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
   
      <h1 className="text-4xl lg:text-5xl pb-2 font-semibold bg-gradient-to-b from-[#edeffd] text-center to-[#7b9cda] bg-clip-text text-transparent leading-[110%] tracking-tighter">

     Keberagaman Kita
     
      
      <br />
      <span className='flex  gap-x-2 text-center'>

      Merupakan
      
      <WordRotate
        className=" font-semibold bg-gradient-to-b   bg-clip-text text-transparent"
        words={
          
          [
            "Kekuatan",   // Strength
            "Harmoni",    // Harmony
            "Persatuan",  // Unity
            "Keindahan",  // Beauty
            "Anugrah",      // Love
           
            "Solidaritas",// Solidarity
            "Toleransi",  // Tolerance
            "Kebersamaan",// Togetherness
            "Kesetaraan", // Equality
          
            "Kebhinekaan",// Diversity
            "Kekayaan",   // Wealth
          ]
        
        
        }
      />
      </span>
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
