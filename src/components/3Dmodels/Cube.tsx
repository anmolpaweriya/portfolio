

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { Material, Mesh, SkinnedMesh } from 'three';
import { GLTF } from 'three-stdlib';


type CubeGLTF = GLTF & {
    nodes: {
        [key: string]: SkinnedMesh; // Cast nodes to SkinnedMesh
    };
    materials: {
        [key: string]: Material;
    };
};

const Cube = (props: GroupProps) => {
    const { nodes } = useGLTF('models/cube.glb') as CubeGLTF;

    const texture = useTexture('textures/cube.png');

    const cubeRef = useRef<Mesh>(null);

    useGSAP(() => {
        cubeRef.current &&
            gsap
                .timeline({
                    repeat: -1,
                    repeatDelay: 0.5,
                })
                .to(cubeRef.current.rotation, {
                    y: `+=${Math.PI * 2}`,
                    x: `-=${Math.PI * 2}`,
                    duration: 2.5,
                    stagger: {
                        each: 0.15,
                    },
                });
    }, []);

    return (
        <Float floatIntensity={2}>
            <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
                <mesh
                    ref={cubeRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={nodes.Cube.material} >
                    <meshMatcapMaterial matcap={texture} toneMapped={false} />
                </mesh>
            </group>
        </Float >
    );
};

useGLTF.preload('models/cube.glb');

export default Cube;