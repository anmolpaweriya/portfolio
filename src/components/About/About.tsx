import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import CustomButton from "../CustomButton/CustomButton";
import { Globe } from "../3Dmodels/Globe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loading/CanvaLoader";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [hasCopied, setHasCopied] = useState(false);

  const sectionRef = useRef(null);
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      gridItemsRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none reset",
        },
      }
    );
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("paweriyaanmol@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about" ref={sectionRef}>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full text-white-600">
        {[
          // Grid item 1
          <div className="col-span-1 xl:row-span-3" key="grid1">
            <div className="grid-container ">
              <div className="relative">
                <img
                  src="/assets/grid1.png"
                  className="w-full sm:h-[276px] h-fit object-contain"
                />
                <div className="aspect-square absolute bg-red-300 z-10 w-1/3 rounded-lg top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                  <img src="/assets/anmol.jpg" className="   " />
                </div>
              </div>
              <div>
                <p className="grid-headtext">Hi, I am Anmol</p>
                <p className="Grid-subtext">
                  I'm a MERN & Nextjs Developer. I have honed my skills in both
                  frontend and backend dev, creating dynamic and responsive
                  websites.
                </p>
              </div>
            </div>
          </div>,

          // Grid item 2
          <div className="col-span-1 xl:row-span-3" key="grid2">
            <div className="grid-container">
              <img
                src="/assets/grid2.png"
                className="w-full sm:h-[276px] h-fit object-contain"
              />
              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="Grid-subtext">
                  I specialize in a variety of languages, frameworks, and tools
                  that allow me to build robust and scalable applications
                </p>
              </div>
            </div>
          </div>,

          // Grid item 3 - Globe
          <div className="col-span-1 xl:row-span-4" key="grid3">
            <div className="grid-container">
              <div className="w-full flex justify-center">
                <Canvas style={{ width: "326px", height: "326px" }}>
                  <directionalLight
                    intensity={3}
                    color={"#ccc"}
                    position={[1, 1, 1]}
                  />
                  <OrbitControls />
                  <Suspense fallback={<CanvasLoader />}>
                    <Globe />
                  </Suspense>
                </Canvas>
              </div>
              <div>
                <p className="grid-headtext">
                  I’m very flexible with time zone communications & locations
                </p>
                <p className="grid-subtext">
                  I'm based in Kaithal, Haryana, India and open to remote work
                  worldwide.
                </p>
                <a href="#contact">
                  <CustomButton
                    name="Contact Me"
                    isBeam
                    containerClass="w-full mt-10"
                  />
                </a>
              </div>
            </div>
          </div>,

          // Grid item 4
          <div className="col-span-1 xl:col-span-2 xl:row-span-3" key="grid4">
            <div className="grid-container">
              <img
                src="/assets/grid3.png"
                className="w-full sm:h-[276px] h-fit object-contain"
              />
              <div>
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                  I love solving problems and building things through code.
                  Programming isn&apos;t just my profession—it&apos;s my
                  passion. I enjoy exploring new technologies, and enhancing my
                  skills.
                </p>
              </div>
            </div>
          </div>,

          // Grid item 5 - Contact
          <div className="col-span-1 xl:row-span-2" key="grid5">
            <div className="grid-container">
              <img
                src="/assets/grid4.png"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img
                    src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                    alt="copy"
                  />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    paweriyaanmol@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>,
        ].map((item, i) => (
          <div
            key={i}
            ref={(el) => (gridItemsRef.current[i] = el)}
            className={item.props.className}
          >
            {item.props.children}
          </div>
        ))}
      </div>
    </section>
  );
}
