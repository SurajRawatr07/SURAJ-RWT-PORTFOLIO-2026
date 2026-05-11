import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import {
  ExternalLink,
  ArrowUpRight,

  TerminalSquare,
  FileBadge2,
  MapPinned,
  GraduationCap,

  Sparkles,
} from 'lucide-react';

const projects = [
  {
    title: 'Code Playground Hub',

    description:
      'Architected a high-performance multi-language code execution platform with secure sandboxing, real-time compilation, and optimized backend workflows capable of handling large-scale concurrent requests efficiently.',

    icon: TerminalSquare,

    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],

    color: 'from-cyan-500 to-blue-500',

    glow: 'shadow-cyan-500/20',

    link: 'https://github.com/SurajRawatr07/code-playground-hub',
  },

  {
    title: 'React Resume Builder',

    description:
      'Developed a modern resume generation platform with reusable UI architecture, advanced customization, smooth state management, and highly responsive user experience.',

    icon: FileBadge2,

    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],

    color: 'from-pink-500 to-rose-500',

    glow: 'shadow-pink-500/20',

    link: 'https://github.com/SurajRawatr07/React-Resume-Builder',
  },

  {
    title: 'SmartRoute – Delivery Optimization',

    description:
      'Built an intelligent delivery optimization system leveraging graph algorithms and real-time route analysis to improve operational efficiency and time prediction accuracy.',

    icon: MapPinned,

    tags: [
      'React',
      'Node.js',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],

    color: 'from-emerald-500 to-teal-500',

    glow: 'shadow-emerald-500/20',

    link: 'https://github.com/SurajRawatr07/SmartRoute-Optimized-Delivery-Routing-and-Time-Prediction-Website',
  },

  {
    title: 'NS Coaching Center Website',

    description:
      'Designed and engineered a fully responsive educational platform featuring admissions, events, media galleries, testimonials, and modern UI/UX.',

    icon: GraduationCap,

    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'React',
    ],

    color: 'from-violet-500 to-purple-500',

    glow: 'shadow-violet-500/20',

    link: 'https://github.com/SurajRawatr07/NST-ADDMISSION-2026',
  },
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Projects() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  });

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 md:py-32 px-4 section-frost"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-10 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-500/10 blur-[100px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-violet-500/10 blur-[100px] rounded-full" />

      <div
        ref={ref}
        className="container mx-auto max-w-6xl relative z-10"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 90 } : {}}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-5"
          />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            Featured{' '}
            <span className="text-gradient">
              Projects
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            A collection of scalable full-stack applications crafted with
            modern technologies, performance-focused architecture, and immersive
            user experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                y: -10,
              }}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl ${project.glow}`}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 via-primary/20 to-accent/20" />

              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Blur Effect */}
              <div
                className={`absolute -top-16 -right-16 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br ${project.color} opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Top */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl`}
                  >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-md" />

                    <project.icon className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />

                    {/* Floating Spark */}
                    <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white/70 animate-pulse" />
                  </motion.div>

                  {/* Arrow */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-white group-hover:border-primary/40 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[15px] md:text-base text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{
                        scale: 1.06,
                        y: -2,
                      }}
                      className="px-3 py-1.5 text-[11px] sm:text-xs md:text-sm rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:text-primary"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm sm:text-base tracking-wide">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Explore Project
                  </span>

                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}