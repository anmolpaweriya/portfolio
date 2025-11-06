import { Suspense, useRef, useState } from "react";
import { projects } from "../../constants/projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import Computer from "../3Dmodels/Computer";
import CanvasLoader from "../Loading/CanvaLoader";

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];
  const sectionRef = useRef<HTMLElement>(null);

  // functions

  function nextProject() {
    setCurrentProjectIndex((pre) => {
      if (pre + 1 === projects.length) return 0;
      return pre + 1;
    });
  }

  function preProject() {
    setCurrentProjectIndex((pre) => {
      if (pre === 0) return projects.length - 1;
      return pre - 1;
    });
  }

  // animation
  //
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".project-details", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".project-content",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".project-preview", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".project-content",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    gsap.from(".animatedText", {
      opacity: 0,
      stagger: 0.1,
      translateY: 20,
    });
    return () => ctx.revert();
  }, [currentProjectIndex]);

  return (
    <section ref={sectionRef} id="projects" className="mt-20 c-space">
      <h1 className="head-text projects-title">My Selected Work</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full project-content">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className=" absolute top-0 right-0">
            <img
              className="w-full h-96 object-cover rounded-xl"
              src={currentProject.spotlight}
              alt=""
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>

            <p className="animatedText project-details">
              {currentProject.desc}
            </p>
            <p className="animatedText project-details">
              {currentProject.subdesc}
            </p>
          </div>

          <div className="grid gap-5 md:flex items-center w-full">
            <div className="flex gap-3">
              {currentProject.tags.map((tag) => (
                <img
                  src={tag.path}
                  key={tag.id}
                  className="p-3 rounded-lg w-12 h-12 bg-black-300"
                  alt=""
                />
              ))}
            </div>

            <a
              className="flex items-center gap-2 hover:underline text-white-600 justify-end w-full"
              href={currentProject.href}
              target="_blank"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="" />
            </a>
          </div>

          <div className="w-full flex justify-between py-3">
            <button onClick={preProject}>
              <img src="/assets/left-arrow.png" className="w-5" alt="" />
            </button>
            <button onClick={nextProject}>
              <img src="/assets/right-arrow.png" className="w-5" alt="" />
            </button>
          </div>
        </div>

        <div className="w-full border rounded-lg project-preview">
          <Canvas>
            <ambientLight intensity={10} />
            <Suspense fallback={<CanvasLoader />}>
              <Center>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <Computer texture={currentProject.texture} />
                </group>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
