import dynamic from 'next/dynamic';

// Hanya load komponen saat diperlukan
const HeavyComponent = dynamic(() => import("@/components/main/HeavyComponent"), { ssr: false });
import Curve from '@/components/Layout/Curve'

export default function Home() {

  return (
    <> 
    <Curve   >
<HeavyComponent />

    </Curve>
    </>
  );
}



