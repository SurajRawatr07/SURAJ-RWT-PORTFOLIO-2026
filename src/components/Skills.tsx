import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Layers3,
  Wrench,
  Sparkles,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color:
      'from-cyan-500/20 via-blue-500/10 to-sky-500/20',
    border: 'border-cyan-500/20',
    glow: 'group-hover:shadow-cyan-500/20',
    iconColor: 'text-cyan-400',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'C',
      'C++',
      'PHP',
      'HTML',
      'CSS',
      'MongoDB',
      'SQL',
    ],
  },

  {
    title: 'Frameworks & Libraries',
    icon: Layers3,
    color:
      'from-violet-500/20 via-fuchsia-500/10 to-purple-500/20',
    border: 'border-violet-500/20',
    glow: 'group-hover:shadow-violet-500/20',
    iconColor: 'text-violet-400',
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },

  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color:
      'from-amber-500/20 via-orange-500/10 to-yellow-500/20',
    border: 'border-amber-500/20',
    glow: 'group-hover:shadow-amber-500/20',
    iconColor: 'text-amber-400',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'AWS',
      'Postman',
      'Vercel',
      'Netlify',
      'Microsoft Office',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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

export default function Skills() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 md:py-32 px-4 section-frost"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-500/10 blur-[100px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-violet-500/10 blur-[100px] rounded-full" />
      </div>

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
            Skills &{' '}
            <span className="text-gradient">
              Expertise
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Modern technologies and tools I use to build scalable,
            responsive, and high-performance digital products.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                }}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border ${category.border} bg-gradient-to-br ${category.color} backdrop-blur-2xl p-5 sm:p-6 md:p-7 transition-all duration-500 hover:border-white/20 hover:shadow-2xl ${category.glow}`}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
                </div>

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center ${category.iconColor}`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </motion.div>

                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white/20 group-hover:text-white/60 transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-5">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
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
                        delay: index * 0.04,
                      }}
                      whileHover={{
                        scale: 1.06,
                        y: -2,
                      }}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.05] border border-white/10 text-[11px] sm:text-sm text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Animated Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}