import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiCalendar, BiMapPin } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Alumna AI",
    location: "Remote",
    period: "Aug 2025 - Present",
    logo: "/assets/alumna.png",
    description:
      "Working as a Full Stack Developer Intern at Alumna AI, an AI-powered college recommendation LLM platform that also offers additional educational and productivity features. Contributing to building scalable, high-performance web applications using modern technologies. Responsible for developing and maintaining full-stack features, optimizing database performance, and deploying services on AWS while ensuring seamless user experience and system reliability.",
    technologies: ["Next.js", "NestJS", "AWS", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "TailorAlly (HDS Enterprise)",
    location: "Remote",
    period: "Jan 2025 - Jul 2025",
    logo: "/assets/tailorally.svg",
    description:
      "Worked as a freelance Full Stack Developer on TailorAlly, a CRM platform designed for tailors to manage stores, customers, and orders efficiently. Developed and optimized key features, integrated Supabase for authentication and storage, containerized services using Docker, and ensured database reliability with PostgreSQL and MongoDB. Delivered a production-ready, scalable solution through close collaboration with the client.",
    technologies: [
      "Next.js",
      "NestJS",
      "Supabase",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-title", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".exp-item", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-timeline",
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
      id="experience"
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <h1 className="head-text mb-20">Work & Experience</h1>

        <div className="relative max-w-5xl mx-auto text-white">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/40 to-white/20 hidden lg:block" />

          <div className="exp-timeline space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-item relative group">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-3 h-3 rounded-full bg-white border-4 border-background hidden lg:block group-hover:scale-150 transition-transform duration-300" />

                <div className="lg:ml-16 dark-card rounded-2xl p-6 sm:p-8 hover:bg-white/5 transition-all duration-500 border border-white/10 hover:border-white/30 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                        <div className="absolute inset-0 bg-white rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                        <div className="relative w-full h-full bg-background border-2 border-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <img src={exp.logo} />
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                        <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-white/90 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium whitespace-nowrap">
                          <BiCalendar className="h-4 w-4 text-white/70" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                        <p className="text-lg sm:text-xl font-semibold text-white/90">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BiMapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2.5 pt-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
