import { motion, useInView } from 'framer-motion';
import e-react';

/* =========================================
   EXPERIENCE DATA
===============w Date('2024-01-01'),

    locat
    description: [
      'Built and deployed scalable MERN stack applications with modern architecture and responsive user experiences',
      'Designed secure RESTful APIs with authentication, middleware integration, and optimized backend workflows',
      'Improved frontend and backend performance using lazy loading, caching strategies, and efficient database queries',
      'Implemented CI/CD workflows using GitHub, Vercel, and deployment automation platforms',
      'Continuously strengthening DSA, system design, and real-world engineering problem-solving skills',
    ],

    color: 'from-indigo-500 to-violet-500',

    icon: Code2,
  },

  {
    title: 'Full-Stack Projects',

    company: 'Personal Projects',

    type: 'Project',

    period: '2024 - Present',

    startDate: new Date('2024-02-01'),

    location: 'Remote',

    skills: [
      'MERN',
      'JWT Auth',
      'API Integration',
      'Responsive UI',
    ],

    description: [
      'Developed modern full-stack applications with scalable and performance-focused architecture',
      'Integrated authentication systems, protected routes, and third-party APIs for production-ready workflows',
      'Enhanced UI/UX using responsive layouts, animations, and interactive design systems',
      'Worked with MongoDB and SQL databases for optimized data management and seamless scalability',
    ],

    color: 'from-cyan-500 to-blue-500',

    icon: Briefcase,
  },

  {
    title: 'Hackathon Experience',

    company: 'National & IIT Platforms',

    type: 'Hackathons',

    period: '2024 - Present',

    startDate: new Date('2024-03-01'),

    location: 'India',

    skills: [
      'Teamwork',
      'Rapid Prototyping',
      'MVP Development',
      'Problem Solving',
    ],

    description: [
      'Participated in 7+ online and offline hackathons across multiple technology domains',
      'Competed in 4 National-Level Hackathons focused on innovation, scalability, and real-world solutions',
      'Participated in an IIT Guwahati Hackathon and collaborated on fast-paced product development',
      'Built scalable MVPs within strict 24–48 hour development timelines using agile teamwork',
      'Focused on rapid prototyping, innovative architecture, and production-ready implementations under pressure',
    ],

    color: 'from-pink-500 to-rose-500',

    icon: Trophy,
  },
];

/* =========================================
   EDUCATION
========================================= */

const education = [
  {
    title: 'Bachelor of Computer Applications (BCA)',

    company: 'Graphic Era Hill University, Haldwani',

    type: 'Education',

    period: '2024 - 2027',

    startDate: new Date('2024-01-01'),

    location: 'Uttarakhand, India',

    skills: [
      'Data Structures',
      'Web Development',
      'System Design',
    ],

    description: [
      'Current CGPA: 7.5/10',
      'Focused on full-stack development, software engineering, and system design',
      'Actively participating in hackathons, projects, and technical communities',
      'Strengthening core computer science fundamentals and analytical problem-solving skills',
    ],

    color: 'from-emerald-500 to-green-500',

    icon: GraduationCap,
  },
];

/* =========================================
   TIMELINE COMPONENT
========================================= */

function Timeline({ data }: { data: typeof experiences }) {
  const sortedData = [...data].sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );

  return (
    <div className="relative">

      {/* CENTER LINE */}
      <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary" />

      <div className="space-y-8 sm:space-y-12">

        {sortedData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0
                  ? 'sm:flex-row'
                  : 'sm:flex-row-reverse'
              } items-start gap-5 sm:gap-8`}
            >

              {/* DOT */}
              <div
                className={`absolute left-5 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_20px_rgba(255,255,255,0.25)] z-20`}
              />

              {/* CARD */}
              <div
                className={`w-full pl-14 sm:pl-0 sm:w-[calc(50%-2rem)] ${
                  index % 2 === 0
                    ? 'sm:pr-8'
                    : 'sm:pl-8'
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-6 md:p-7 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]"
                >

                  {/* GRADIENT GLOW */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br ${item.color}`}
                  />

                  {/* FLOATING BLUR */}
                  <div
                    className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${item.color} opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700`}
                  />

                  <div className="relative z-10">

                    {/* TOP */}
                    <div className="flex items-start justify-between gap-4 mb-5">

                      {/* ICON */}
                      <motion.div
                        whileHover={{
                          rotate: 6,
                          scale: 1.08,
                        }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </motion.div>

                      {/* TYPE */}
                      <div
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-[11px] sm:text-xs font-medium`}
                      >
                        {item.type}
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* COMPANY */}
                    <p className="text-primary font-medium text-sm sm:text-base mb-4">
                      {item.company}
                    </p>

                    {/* META */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 text-muted-foreground text-sm mb-5">

                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        {item.period}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <ul className="space-y-3 mb-6">

                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed"
                        >
                          <span
                            className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0`}
                          />

                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* SKILLS */}
                    <div className="flex flex-wrap gap-2.5">

                      {item.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm text-muted-foreground backdrop-blur-md hover:border-primary/40 hover:text-primary transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* EMPTY SIDE */}
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Experience() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-20 md:py-32 px-4 section-frost"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      <div
        ref={ref}
        className="container mx-auto max-w-6xl relative z-10"
      >

        {/* EXPERIENCE HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 90 } : {}}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-5"
          />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Experience &{' '}
            <span className="text-gradient">
              Projects
            </span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            My journey in full-stack development, hackathons, scalable
            applications, and continuous growth through real-world engineering
            experiences.
          </p>
        </motion.div>

        {/* EXPERIENCE */}
        <Timeline data={experiences} />

        {/* DIVIDER */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent my-16 md:my-24" />

        {/* EDUCATION HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 70 } : {}}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-5"
          />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">
              Education
            </span>
          </h2>
        </motion.div>

        {/* EDUCATION */}
        <Timeline data={education} />
      </div>
    </section>
  );
}
