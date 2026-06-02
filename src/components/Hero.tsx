import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import {
  ChevronDown,
  Download,
  Mail,
  Sparkles,
  Code2,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Globe,
  Database,
 Server,
} from 'lucide-react';

import profileImage from '@/assets/profile.png';

/* =========================================
   ROLE ANIMATION
========================================= */

const roles = [
  'FULL STACK DEVELOPER',
  'MERN STACK DEVELOPER',
  'REACT & NEXT.JS DEVELOPER',
  'BACKEND ENGINEER',
  'BCA STUDENT & FREELANCER',
];

/* =========================================
   TECH STACK
========================================= */

const techStack = [
  {
    icon: Globe,
    label: 'React.js',
    color: 'text-cyan-400',
  },

  {
    icon: Server,
    label: 'Node.js',
    color: 'text-green-500',
  },

  {
    icon: Database,
    label: 'MongoDB',
    color: 'text-emerald-500',
  },

  {
    icon: Code2,
    label: 'TypeScript',
    color: 'text-blue-500',
  },

  {
    icon: Sparkles,
    label: 'Tailwind CSS',
    color: 'text-sky-400',
  },
];

/* =========================================
   SOCIAL LINKS
========================================= */

const socials = [
  {
    icon: Github,
    href: 'https://github.com/SurajRawatr07',
    label: 'GitHub',
    gradient: 'from-zinc-600 to-zinc-800',
  },

  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/suraj-rawat-30513b340/',
    label: 'LinkedIn',
    gradient: 'from-blue-500 to-cyan-500',
  },

  {
    icon: Instagram,
    href: 'https://www.instagram.com/surajrawat07/',
    label: 'Instagram',
    gradient: 'from-pink-500 to-rose-500',
  },

  {
    icon: Mail,
    href: 'mailto:rawatsuraj80627@gmail.com',
    label: 'Email',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);

        setFade(true);
      }, 300);
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-24 pb-14 px-4"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* GLOW */}
        <div className="absolute top-20 left-0 w-72 sm:w-[32rem] h-72 sm:h-[32rem] bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-72 sm:w-[32rem] h-72 sm:h-[32rem] bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* BADGE */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm mb-6 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4" />

              Full Stack Developer & BCA Student
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="font-black tracking-tight leading-none mb-6"
            >
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
                SURAJ
              </span>

              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient mt-1">
                RAWAT
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-7"
            >
              <div className="h-[2px] w-10 bg-gradient-to-r from-primary to-accent rounded-full" />

              <p
                className={`text-sm sm:text-lg md:text-xl font-medium tracking-[0.2em] text-muted-foreground transition-all duration-300 ${
                  fade
                    ? 'opacity-100 blur-0'
                    : 'opacity-0 blur-sm'
                }`}
              >
                {roles[roleIndex]}
              </p>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Passionate Full-Stack Developer and BCA student focused on
              building scalable, modern, and performance-driven web applications
              using MERN Stack, React.js, TypeScript, and modern backend
              technologies.
            </motion.p>

            {/* TECH STACK */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              {techStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.label}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-primary/30 transition-all duration-300"
                  >
                    <Icon className={`w-5 h-5 ${tech.color}`} />

                    <span className="text-sm text-muted-foreground">
                      {tech.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="/SURAJ RWT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-xl shadow-primary/20 transition-all duration-300"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />

                Download Resume
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-foreground hover:border-primary/30 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-primary" />

                Contact Me

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="group relative"
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 blur-xl transition duration-500`}
                    />

                    <div className="relative w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:border-primary/30 transition-all duration-300">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* ROTATING BORDER */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow blur-md opacity-40" />

              {/* OUTER RING */}
              <div className="absolute inset-[-20px] rounded-full border border-primary/20 animate-pulse" />

              {/* IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[430px] md:h-[430px] rounded-full overflow-hidden border-[6px] border-white/10 shadow-[0_0_80px_rgba(0,255,255,0.12)] backdrop-blur-xl"
              >
                <img
                  src={profileImage}
                  alt="Suraj Rawat"
                  className="w-full h-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-[0.3em] uppercase">
            Scroll
          </span>

          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
}
