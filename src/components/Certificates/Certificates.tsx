import { BiAward, BiCheckCircle } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Self-Taught & Projects",
    date: "2022 - 2024",
    description:
      "Comprehensive experience in building full-stack applications with modern technologies",
    skills: ["MERN Stack", "Next.js", "WebRTC", "Real-time Apps"],
    verified: true,
  },
  {
    title: "Problem Solving & Algorithms",
    issuer: "LeetCode",
    date: "2020 - Present",
    description: "Solved 500+ problems covering data structures and algorithms",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    verified: true,
  },
  {
    title: "Cybersecurity Practice",
    issuer: "TryHackMe",
    date: "2021 - Present",
    description:
      "Completed 120+ rooms with focus on penetration testing and ethical hacking",
    skills: ["Ethical Hacking", "Penetration Testing", "Security"],
    verified: true,
  },
  {
    title: "Web Development Fundamentals",
    issuer: "Self-Learning",
    date: "2020 - 2022",
    description:
      "Mastered core web technologies through hands-on projects and practice",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    verified: true,
  },
  {
    title: "Database Management",
    issuer: "Practical Experience",
    date: "2021 - Present",
    description: "Expertise in designing and managing NoSQL and SQL databases",
    skills: ["MongoDB", "PostgreSQL", "Database Design"],
    verified: true,
  },
  {
    title: "React & Modern Frontend",
    issuer: "Project-Based Learning",
    date: "2022 - Present",
    description:
      "Advanced proficiency in React ecosystem and modern frontend development",
    skills: ["React", "TypeScript", "State Management", "UI/UX"],
    verified: true,
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white/[0.02] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Certificates & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Skills and expertise acquired through practice and real-world
            projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500 group-hover:animate-pulse" />

              <div className="relative dark-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col h-full backdrop-blur-sm">
                {/* Header with icon and badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                      <BiAward className="h-7 w-7 text-black" />
                    </div>
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                      <BiCheckCircle className="h-4 w-4 text-white" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-white/70">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-sm font-semibold text-white/80">
                    <div className="w-1 h-1 rounded-full bg-white/50" />
                    {cert.date}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-sm font-semibold border-2 border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group/btn">
                  <span>View Details</span>
                  <FaExternalLinkAlt className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </button>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
