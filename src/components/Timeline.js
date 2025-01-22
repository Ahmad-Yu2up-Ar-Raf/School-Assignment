'use client';
import React, { useRef , useState} from 'react';
// import { Github } from 'lucide-react';
import { TimelineContent } from '@/components/framer-timeline';
import { TextAnimate } from "@/components/magicui/text-animate";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Sparkles } from '@/components/sparkles';
import { MediaModal } from '@/components/modal';
import { NumberTicker } from "@/components/magicui/number-ticker";
const TimelineAnimation = () => {
  function parseTitleWithNumberTicker(title) {
    const regex = /\d+/g; // Mendeteksi angka dalam string
    const parts = title.split(regex); // Pecah string berdasarkan angka
    const numbers = title.match(regex); // Dapatkan angka yang terdeteksi
  
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {numbers && numbers[index] && (
          <NumberTicker
            value={parseInt(numbers[index])}
            className="whitespace-pre-wrap text-white font-medium tracking-tighter"
          />
        )}
      </React.Fragment>
    ));
  }
  

  const [activeSections, setActiveSections] = useState({});

  const toggleSection = (index) => {
    setActiveSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const timelineData = [
    {
      title: 'Abad Ke-14: Karya Mpu Tantular',
      description: `"Bhinneka Tunggal Ika" pertama kali dicatat dalam karya sastra Kakawin Sutasoma yang ditulis oleh Mpu Tantular pada masa kerajaan Majapahit. Dalam karya ini, semboyan tersebut digunakan untuk menggambarkan persatuan meskipun ada perbedaan agama antara Hindu dan Buddha.`,
      imgSrc: 'https://cdn.discordapp.com/attachments/1274996570307432449/1331662634595913748/mpu-prapanca-pendeta-majapahit-y-20211113112230.png?ex=67926ef9&is=67911d79&hm=adc361f7793d2cc903bfe0f8946add79aadca236ee6780692b223b2eb7b80db4&',
    },
    {
      title: 'Abad Ke-15 - Ke-16: Penyebaran dalam Budaya Majapahit',
      description: `Konsep "Bhinneka Tunggal Ika" semakin dikenal dalam budaya Majapahit dan dipahami sebagai simbol persatuan dalam keragaman. Di masa ini, Indonesia (terutama pulau Jawa) terdiri dari berbagai kerajaan dan budaya yang berbeda, tetapi semboyan ini mencerminkan harapan untuk kesatuan di tengah perbedaan tersebut.`,
      imgSrc: 'https://link-ke-gambar2',
    },
    {
      title: 'Abad Ke-20: Penjajahan Belanda',
      description: `Selama masa penjajahan Belanda, Indonesia terdiri dari banyak kelompok etnis dan budaya yang berbeda. Semboyan "Bhinneka Tunggal Ika" tetap hidup dalam kesadaran rakyat sebagai simbol harapan untuk persatuan di tengah penindasan kolonial.`,
      imgSrc: 'https://link-ke-gambar3',
    },
    {
      title: '17 Agustus 1945: Kemerdekaan Indonesia',
      description: ` Setelah Indonesia merdeka, semboyan "Bhinneka Tunggal Ika" diambil sebagai semboyan resmi negara Indonesia, mencerminkan tekad untuk mempersatukan berbagai suku, agama, dan budaya yang ada di seluruh Indonesia. Semboyan ini tercantum dalam lambang negara Garuda Pancasila.`,
      imgSrc: 'https://link-ke-gambar3',
    },
    {
      title: '1945 - Sekarang: Implementasi dalam Pancasila',
      description: `"Bhinneka Tunggal Ika" menjadi bagian dari nilai-nilai Pancasila, terutama pada sila ketiga, yaitu "Persatuan Indonesia". Sejak saat itu, semboyan ini menjadi pedoman penting dalam menjaga persatuan bangsa Indonesia yang terdiri dari banyak suku, bahasa, dan agama.`,
      imgSrc: 'https://link-ke-gambar3',
    },
    {
      title: 'Era Modern: Penerapan dalam Kehidupan Sehari-hari',
      description: `Pada masa kini, "Bhinneka Tunggal Ika" tetap relevan dalam kehidupan bermasyarakat di Indonesia. Meskipun negara ini terdiri dari berbagai kelompok dengan perbedaan yang kaya, semboyan ini terus menjadi landasan untuk menjaga kerukunan, persatuan, dan toleransi antar warga negara Indonesia.`,
      imgSrc: 'https://link-ke-gambar3',
    },
  ];

  return (
    <main className="max-w-7xl m-auto space-y-16 md:space-y-52 pt-16">
        {timelineData.map((item, index) => (
    <section
    className="sm:grid space-y-4 grid-cols-2 gap-10 pt-10 "
    >
  
  <div 
    key={index} 
    className={index % 2 === 0 ? 'md:order-2' : ''}
  >
    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
      <MediaModal
        imgSrc={
          'https://cdn.discordapp.com/attachments/1274996570307432449/1331662634595913748/mpu-prapanca-pendeta-majapahit-y-20211113112230.png?ex=67926ef9&is=67911d79&hm=adc361f7793d2cc903bfe0f8946add79aadca236ee6780692b223b2eb7b80db4&'
        }
      />
    </BoxReveal>
  </div>

    <div className="space-y-2 content-center text-white">
      {' '}
       
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h1 className="text-4xl md:text-2xl lg:text-5xl font-medium">
          
        {parseTitleWithNumberTicker(item.title)}
        </h1>
        </BoxReveal>
   
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p
        className="text-base md:text-sm lg:text-lg content-center text-gray-400 cursor-pointer group"
        onClick={() => toggleSection(index)} // Tambahkan handler di sini
      >
        <span className={activeSections[index] ? '' : 'line-clamp-3 md:line-clamp-none'}>
          {item.description} {/* Menampilkan deskripsi */}
        </span>
        <span
          className={`${
            activeSections[index] ? 'hidden' : 'text-blue-400'
          } md:hidden group-hover:text-white transition-all ease-in-out`}
        >
          Baca Lebih {/* Teks tombol */}
        </span>
      </p>
      </BoxReveal>
      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <a
          className="flex gap-2 w-fit bg-gray-800 rounded-md p-2"
          href="https://github.com/naymurdev"
          target="_blank">
          <Github />
          Start it Now
        </a>
      </BoxReveal> */}
    </div>
  </section>
   ))}
  </main>
  );
};
export default TimelineAnimation;
