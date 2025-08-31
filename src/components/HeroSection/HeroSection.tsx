import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../constants/calculateSize";
import HeroCanvaLoading from "../Loading/CanvaLoader";

// icons
import { PiHandWavingFill } from "react-icons/pi";

// 3D models
import Cube from "../3Dmodels/Cube";
import Rings from "../3Dmodels/Rings";
import Target from "../3Dmodels/Target";
import ReactLogo from "../3Dmodels/ReactLogo";
import HackerRoom from "../3Dmodels/HackerRoom";
import HeroCamera from "../3Dmodels/HeroCamera";

export default function HeroSection() {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      id="home"
      className="h-screen max-h-screen max-w-full  flex flex-col items-center "
    >
      <div className="  mx-auto   flex items-center gap-3 flex-col w-full sm:mt-36 mt-20">
        <h1 className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          {" "}
          Hi, I am Anmol{" "}
          <span className="waving-hand text-yellow-300">
            <PiHandWavingFill />
          </span>
        </h1>

        <p className="hero_tag text-gray_gradient">
          Nextjs & MERN Stack Developer
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <Suspense fallback={<HeroCanvaLoading />}>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, 0, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              <Target
                position={sizes.targetPosition}
                scale={1.5}
                rotation={[0, Math.PI / 4, 0]}
              />
              <Rings position={sizes.ringPosition} />
              <ReactLogo position={sizes.reactLogoPosition} scale={0.5} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight
              position={[3, 3, 5]}
              intensity={5}
              castShadow
              color="white"
            />
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
