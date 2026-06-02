import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import {
  Code2,
  SeldCheck,
  Gauge,
} from 'l===================================
   FULL STACK HIGHLIGHTS
========================================= */

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Building scalable, responsive, and immersive user interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.',
    gradient: 'from-cyan-500 to-blue-500',
  },

  {
    icon: ServerCog,
    title: 'Backend Engineering',
    description:
      'Developing secure REST APIs, server-side logic, authentication systems, and scalable backend architecture.',
    gradient: 'from-violet-500 to-purple-500',
  },

  {
    icon: Database,
    title: 'Database Management',
    description:
      'Optimized database design, efficient query handling, indexing, and scalable data management with MongoDB & SQL.',
    gradient: 'from-emerald-500 to-teal-500',
  },

  {
    icon: Globe2,
    title: 'Full Stack Projects',
    description:
      'Crafting modern MERN stack applications with production-ready workflows and real-world scalability.',
    gradient: 'from-orange-500 to-amber-500',
  },

  {
    icon: ShieldCheck,
    title: 'Authentication & Security',
    description:
      'Implementing JWT authentication, middleware systems, protected routes, and secure API integrations.',
    gradient: 'from-pink-500 to-rose-500',
  },

  {
    icon: Gauge,
    title: 'Performance Optimization',
    description:
      'Improving speed and scalability through lazy loading, caching, code splitting, and rendering optimization.',
    gradient: 'from-indigo-500 to-cyan-500',
  },
];

/* =========================================
   STATS
========================================= */

const stats = [
  {
    value: '10+',
    label: 'Projects',
  },

  {
    value: '7+',
    label: 'Hackathons',
  },

  {
    value: '20+',
    label: 'Certificates',
  },

  {
    value: '2+',
    label: 'Years Learning',
  },
];

/* =========================================
   TECH STACK
========================================= */

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'JWT',
  'GitHub',
  'Vercel',
  'REST APIs',
  'SQL',
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-32 px-4 section-frost"
    >
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      <div
        ref={ref}
        className="container mx-auto max-w-7xl relative z-10"
      >
        {/* =========================================
            SECTION HEADING
        ========================================= */}

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

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-5 leading-tight">
            About{' '}
            <span className="text-gradient">
              Me
            </span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Passionate Full-Stack Developer and BCA student focused on building
            scalable, high-performance, and visually modern web applications
            with real-world impact.
          </p>
        </motion.div>

        {/* =========================================
            MAIN GRID
        ========================================= */}

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="order-2 lg:order-1"
          >
            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs sm:text-sm font-medium backdrop-blur-xl"
              >
                <GraduationCap className="w-4 h-4" />
                BCA Student
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs sm:text-sm font-medium backdrop-blur-xl"
              >
                <BrainCircuit className="w-4 h-4" />
                MERN Stack Developer
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-xl"
              >
                <Trophy className="w-4 h-4" />
                7+ Hackathons
              </motion.div>
            </div>

            {/* CONTENT CARD */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8">

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />

              <div className="relative z-10">
                {/* TITLE */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      Full-Stack Developer
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      BCA Student & MERN Stack Enthusiast
                    </p>
                  </div>
                </div>

                {/* PARAGRAPHS */}
                <div className="space-y-5">
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                    I specialize in developing scalable full-stack applications
                    using modern technologies such as{' '}
                    <span className="text-foreground font-semibold">
                      React.js, Next.js, Node.js, Express.js, TypeScript,
                      MongoDB, and Tailwind CSS
                    </span>.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                    Currently pursuing a{' '}
                    <span className="text-primary font-semibold">
                      Bachelor of Computer Applications (BCA)
                    </span>
                    , I continuously improve my engineering and problem-solving
                    skills through real-world projects, national-level
                    hackathons, and modern development practices.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                    My focus is on building responsive user experiences, clean
                    architecture, secure backend systems, and performance-driven
                    applications that deliver real-world value.
                  </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  {stats.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              scale: 1,
                            }
                          : {}
                      }
                      transition={{
                        delay: 0.5 + index * 0.1,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_35px_rgba(0,255,255,0.08)]"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-accent/10" />

                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                          {item.value}
                        </h3>

                        <p className="text-[11px] sm:text-sm text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 order-1 lg:order-2"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]"
                >
                  {/* OVERLAY */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br ${item.gradient}`}
                  />

                  {/* BLUR */}
                  <div
                    className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${item.gradient} opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700`}
                  />

                  <div className="relative z-10">
                    {/* ICON */}
                    <motion.div
                      whileHover={{
                        rotate: 6,
                        scale: 1.08,
                      }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg mb-5`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* TITLE */}
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 leading-snug">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* LINE */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-700" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =========================================
            TECH STACK SECTION
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="mt-16 md:mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8">

            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />

            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
              {/* LEFT */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Layers3 className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Modern Tech Stack
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Technologies & Tools I Work With
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Combining frontend engineering, backend architecture,
                  authentication systems, database management, and deployment
                  workflows to create scalable and high-performance digital
                  experiences.
                </p>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
