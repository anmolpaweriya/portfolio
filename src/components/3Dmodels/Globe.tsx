
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Material, SkinnedMesh } from 'three';
import { GLTF } from 'three-stdlib';


type GlobeGLTF = GLTF & {
  nodes: {
    [key: string]: SkinnedMesh; // Cast nodes to SkinnedMesh
  };
  materials: {
    [key: string]: Material;
  };
};


export function Globe(props: GroupProps) {
  const { nodes, materials } = useGLTF('/models/low_poly_earth.glb') as GlobeGLTF;
  return (
    <group {...props} dispose={null} scale={2}
      rotation={[0, 10, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_2.geometry}
          material={materials.white}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/low_poly_earth.glb')