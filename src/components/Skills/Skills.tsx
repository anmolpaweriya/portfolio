import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import { FiCloud, FiZap } from "react-icons/fi";
import { BsDiagram3 } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Three.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
    ],
  },
  {
    icon: FaServer,
    title: "Backend Development",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Socket.io",
      "WebRTC",
    ],
  },
  {
    icon: FiCloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "GitHub", "CI/CD", "Azure"],
  },
  {
    icon: BsDiagram3,
    title: "System Design & Architecture",
    skills: [
      "Microservices",
      "Redis",
      "Kafka",
      "Scalable Architecture",
      "Database Design",
    ],
  },
  {
    icon: FiZap,
    title: "Technologies & Libraries",
    skills: ["JWT", "OAuth", "Axios", "Zustand", "Redux"],
  },
  {
    icon: GiBrain,
    title: "Problem Solving & Systems",
    skills: ["Data Structures & Algorithms", "Problem Solving", "Linux"],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-title", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".skill-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6  relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <h1 className="head-text mb-20 skills-title">Skills & Expertise</h1>

        <div className="skills-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-gray-300">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="skill-card group relative">
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

                <div className="relative dark-card rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 h-full backdrop-blur-sm">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-white rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-white to-white/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Icon className="h-7 w-7 text-black" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-6 group-hover:text-white/90 transition-colors">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3.5 py-2 text-sm rounded-lg bg-white/5 text-foreground border border-white/20 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
