import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../constants/calculateSize";
import HeroCanvaLoading from "../Loading/CanvaLoader";

// 3D models
import Cube from "../3Dmodels/Cube";
import Rings from "../3Dmodels/Rings";
import Target from "../3Dmodels/Target";
import ReactLogo from "../3Dmodels/ReactLogo";
import { BiMapPin } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left side - Details */}
        <div className="space-y-6 animate-slideInLeft order-2 lg:order-1">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-400 font-semibold tracking-wide uppercase text-sm">
              <BiMapPin className="h-4 w-4" />
              <span>Kaithal, Haryana, India</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Anmol</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold">
              MERN & Next.js Developer
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I have honed my skills in both frontend and backend development,
            creating dynamic and responsive websites. Programming isn't just my
            profession—it's my passion. I enjoy exploring new technologies and
            enhancing my skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-medium bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <CgMail className="h-5 w-5" />
              Contact Me
            </button>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-medium border border-border bg-background hover:bg-secondary transition-all duration-300"
            >
              <FaDownload className="h-5 w-5" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/anmol-paweriya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark-card rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/anmolpaweriya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark-card rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="mailto:pawerlyaanmol@gmail.com"
              className="p-3 dark-card rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <CgMail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right side - Image */}

        <div className="relative lg:justify-self-end animate-slideInRight order-1 lg:order-2 w-full h-[80vh]  flex justify-center items-center ">
          <div className="relative max-w-sm mx-auto animate-float">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-50 animate-pulse"></div>

            {/* Image container */}
            <div className="relative dark-card rounded-3xl p-1 overflow-hidden ">
              <img
                // src={heroPortrait}
                src="/assets/anmol.jpg"
                alt="Anmol - Full Stack Developer"
                className="w-full h-auto rounded-3xl object-cover"
                style={{ maxHeight: "600px" }}
              />
            </div>
          </div>
          <div className="w-full h-full absolute inset-0 animate-float ">
            <Canvas
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Suspense fallback={<HeroCanvaLoading />}>
                {/*<HeroCamera isMobile={isMobile}>
                  <HackerRoom
                    position={sizes.deskPosition}
                    rotation={[0, 0, 0]}
                    scale={sizes.deskScale}
                  />
                </HeroCamera>*/}

                <group>
                  <Target
                    position={sizes.targetPosition}
                    scale={2}
                    rotation={[0, Math.PI / 4, 0]}
                  />
                  <Rings position={sizes.ringPosition} scale={0.55} />
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
        </div>
      </div>
    </section>
  );
}
