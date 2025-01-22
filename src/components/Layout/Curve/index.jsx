'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { text, curve, translate } from './anim';
import ScrollElement from '@/components/scroll-element';
const anim = (variants) => {
    return {
        variants,
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
    };
};

export default function Curve({ children, backgroundColor }) {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null,
    });

  
    const textList = [
        'Indonesia',
        'Jawa',
        'Sunda',
        'Batak',
        'Minangkabau',
        'Bugis',
        'Madura',
        'Aceh',
        'Bali',
        'Dayak',
        'Betawi',
        'Melayu',
        'Papuans',
        'Sasak',
        'Toraja',
        'Nias',
        'Ambon',
        'Banjarese',
        'Makassar',
        'Bali Aga',
        'Mataram',
        'Baduy',
        'Asmat',
        'Rote',
        'Flores',
        'Lombok',
        'Karimun',
        'Orang Laut',
        'Banjar',
        'Maluku',
        'Tidung',
        'Karo',
        'Ternate',
        'Sumba',
        'Manado',
        'Poso',
        'Gorontalo',
        'Bajau',
        'Mentawai',
        'Batak Karo',
        'Bersatu Kita Teguh',
        'Bercerai Kita Runtuh',
        'Satu nusa, satu bangsa',
        '! Bhinneka Tunggal Ika'
    ];
    
    
    

    const [currentTextIndex, setCurrentTextIndex] = useState(0); 

    useEffect(() => {
      
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        resize();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    useEffect(() => {
        let interval;

        // Mengatur waktu berdasarkan indeks teks
        if (currentTextIndex < textList.length - 1) {
            interval = setTimeout(() => {
                setCurrentTextIndex((prevIndex) => prevIndex + 1);
    }, currentTextIndex === 0 ? 1500 : (currentTextIndex >= textList.length - 4 ? 700 : 100));

        }

        return () => {
            clearTimeout(interval);
        };
    }, [currentTextIndex]);

    return (
        <div className="page curve " style={{ backgroundColor }}>
            <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className="background" />
            <motion.h1 className="route md:text-6xl text-xl " {...anim(text)}>
     
             <ScrollElement
            viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
         
          >
              {textList[currentTextIndex]} {}
              </ScrollElement>
   
            </motion.h1>
            {dimensions.width != null && <SVG {...dimensions} />}
            {children}
        </div>
    );
}

const SVG = ({ height, width }) => {
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg className="sva" {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    );
};
