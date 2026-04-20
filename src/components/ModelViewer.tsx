import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, Center } from '@react-three/drei';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export function ModelViewer({ url }: ModelProps) {
  return (
    <div className="w-full h-[500px] bg-bg-surface/50 rounded-xl overflow-hidden border border-accent-gold/10 shadow-2xl relative">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Center>
              <Model url={url} />
            </Center>
          </Stage>
        </Suspense>
        <OrbitControls 
          makeDefault 
          autoRotate={false} 
          enableZoom={true} 
          enablePan={true}
          minDistance={1}
          maxDistance={10}
        />
      </Canvas>
      <div className="absolute bottom-4 right-4 bg-accent-red text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        3D Interaction Enabled
      </div>
    </div>
  );
}
