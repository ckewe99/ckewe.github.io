import { useEffect, useRef } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
const Plane = ({ isPlaneTurn, isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {

    if (!isPlaneTurn) { ref.current.rotation.y = 0.5 * Math.PI; }
    else { ref.current.rotation.y = 1.5 * Math.PI; }

    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  // useFrame(() => {

  // });

  return (
    <mesh {...props} ref={ref} >
      <primitive object={scene} />
    </mesh >
  );
};

export default Plane;
