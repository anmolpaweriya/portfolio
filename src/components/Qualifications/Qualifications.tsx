import { Canvas } from "@react-three/fiber";
import Avatar from "../3Dmodels/Avatar";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import CanvasLoader from "../Loading/CanvaLoader";
import { qualifications } from "../../constants/qualifications";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Qualifications() {
  const [animationName, setAnimationName] = useState("idle");
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".qual-title", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".work-canvas", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".work-container",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".work-content_container", {
        x: 60,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".work-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="w-full c-space">
      <div className="w-full text-white-600">
        <h1 className="qual-title head-text">Qualifications</h1>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={2} />
              <directionalLight position={[10, 10, 10]} intensity={10} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Avatar
                  scale={3}
                  position-y={-3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {qualifications.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5 ">
                      {item.start} -- <span>{item.end}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
