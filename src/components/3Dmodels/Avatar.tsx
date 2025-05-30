
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { useEffect, useRef } from 'react';
import { Material, SkinnedMesh } from 'three';
import { GLTF } from 'three-stdlib';


type AvatarProps = {
    animationName: string
} & GroupProps;

type AvatarGLTF = GLTF & {
    nodes: {
        [key: string]: SkinnedMesh; // Cast nodes to SkinnedMesh
    };
    materials: {
        [key: string]: Material;
    };
};

export default function Avatar(args: AvatarProps) {
    const { animationName, ...props } = args;
    const group = useRef(null);
    const { nodes, materials } = useGLTF('/models/avatar.glb') as AvatarGLTF;


    // animations
    const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx')
    const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx')
    const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx')
    const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx')


    // naming animation
    idleAnimation[0].name = "idle"
    clappingAnimation[0].name = "clapping"
    saluteAnimation[0].name = "salute"
    victoryAnimation[0].name = "victory"

    const { actions } = useAnimations([
        idleAnimation[0],
        clappingAnimation[0],
        saluteAnimation[0],
        victoryAnimation[0],
    ], group);


    useEffect(() => {
        actions[animationName]?.reset().fadeIn(0.5).play()
        return () => { actions[animationName]?.fadeOut(0.5); }

    }, [animationName])

    return (
        <group
            ref={group}
            {...props} dispose={null}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
        </group>
    )
}

useGLTF.preload('/models/avatar.glb')
