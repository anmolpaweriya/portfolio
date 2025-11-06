import { useRef } from "react";
import { achivements } from "../../constants/achivements";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achievement-title", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".client-review", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".client-container",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="c-space my-20">
      <h1 className="head-text achievement-title ">Achievements</h1>

      <div className="client-container">
        {achivements.map((achivement) => (
          <div key={achivement.id} className="client-review">
            <p className="text-white-800 font-light">{achivement.desc}</p>

            <div className="client-content">
              <div className="flex gap-3">
                <img
                  src={achivement.img}
                  alt="reviewer"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-white-800">
                    {achivement.name}
                  </p>
                  <p className="text-white-500 md:text-base text-sm font-light">
                    {achivement.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
