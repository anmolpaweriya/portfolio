import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber'
import gsap from 'gsap';
import { useRef } from 'react'
import { Mesh } from 'three';

export default function Target(props: MeshProps) {

    const targetRef = useRef<Mesh>(null);
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')


    useGSAP(() => {
        gsap.to(targetRef.current?.position!, {
            y: (targetRef.current?.position.y ?? 0) + 0.5,
            yoyo: true,
            repeat: -1,
            duration: 1.5
        })
    }, [])

    return (
        <mesh {...props} ref={targetRef}>
            <primitive object={scene} />
        </mesh>
    )
}
