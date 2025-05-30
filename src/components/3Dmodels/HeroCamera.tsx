import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Group } from 'three';

const HeroCamera = ({ isMobile, children }: {
    isMobile: boolean,
    children: React.ReactNode
}) => {
    const group = useRef<Group>(null);

    useFrame((state, delta) => {
        !isMobile &&
            group.current &&
            easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 3, 0], 0.25, delta);
    });

    return <group ref={group}>{children}</group>;
};

export default HeroCamera;