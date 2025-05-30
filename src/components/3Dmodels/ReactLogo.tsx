
import { Float, useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Material, SkinnedMesh } from 'three';
import { GLTF } from 'three-stdlib';

type ReactLogoGLTF = GLTF & {
    nodes: {
        [key: string]: SkinnedMesh; // Cast nodes to SkinnedMesh
    };
    materials: {
        [key: string]: Material;
    };
};

export default function ReactLogo(props: GroupProps) {
    const { nodes, materials } = useGLTF('/models/react.glb') as ReactLogoGLTF
    return (
        <Float>
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.392, 0.392, 0.527]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')