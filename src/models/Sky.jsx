import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3d/sky.glb';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Sky = ({ isPlaneTurn, isRotating }) => {
  const sky = useGLTF(skyScene);

  const skyRef = useRef();

  useFrame((_, delta) => {
    let dist = 0.15;
    if (isPlaneTurn) dist = -0.15;

    if (isRotating) {
      skyRef.current.rotation.y += dist * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
