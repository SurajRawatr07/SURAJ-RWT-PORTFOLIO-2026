import { motion } from 'framer-motion';

import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
  Heart,
  Sparkles,
  Code2,
} from 'lucide-react';

const socials = [
  {
    icon: Github,
    href: 'https://github.com/SurajRawatr07',
    label: 'GitHub',
    username: '@SurajRawatr07',
    gradient: 'from-zinc-500 to-zinc-700',
  },

  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/suraj-rawat-30513b340',
    label: 'LinkedIn',
    username: 'Suraj Rawat',
    gradient: 'from-blue-500 to-cyan-500',
  },

  {
    icon: Instagram,
    href: 'https://www.instagram.com/surajrawat07',
    label: 'Instagram',
    username: '@surajrawat07',
    gradient: 'from-pink-500 to-rose-500',
  },

  {
    icon: Mail,
    href: 'mailto:rawatsuraj80627@gmail.com',
    label: 'Email',
    username: 'Contact Me',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const quickLinks = [
  'Home',
  'About',
  'Projects',
  'Experience',
  'Contact',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background/60 backdrop-blur-3xl">

      {/* =====================================
          BACKGROUND EFFECTS
      ===================================== */}

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
        <div className="absolute -top-28 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6">

        {/* =====================================
            TOP SECTION
        ===================================== */}

        <div className="py-14 sm:py-16 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* BRAND */}
            <div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="inline-flex items-center gap-3 mb-4"
              >

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">

                  <Code2 className="w-6 h-6 text-white" />
                </div>

                <div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">

                    <span className="text-gradient">
                      Suraj Rawat
                    </span>
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer
                  </p>
                </div>
              </motion.div>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                Passionate BCA student and Full-Stack Developer focused on
                building scalable, modern, and high-performance web applications
                using MERN Stack and modern frontend technologies.
              </p>
            </div>

            {/* STATUS BADGE */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-xl"
            >

              <Sparkles className="w-4 h-4 text-primary" />

              <span className="text-sm text-primary font-medium">
                Open for Projects & Collaborations
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="lg:mx-auto"
          >

            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {quickLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{
                    x: 6,
                  }}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.05,
                  }}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >

                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />

                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* =====================================
              SOCIAL LINKS
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >

            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Connect With Me
            </h3>

            <div className="space-y-4">

              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative overflow-hidden flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,255,255,0.08)]"
                  >

                    {/* BG GLOW */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-r ${social.gradient}`}
                    />

                    <div className="relative z-10 flex items-center gap-4">

                      {/* ICON */}
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg`}
                      >

                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* TEXT */}
                      <div>

                        <h4 className="text-sm font-medium text-foreground">
                          {social.label}
                        </h4>

                        <p className="text-xs text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </div>

                    {/* ARROW */}
                    <ArrowUpRight className="relative z-10 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =====================================
            DIVIDER
        ===================================== */}

        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =====================================
            BOTTOM BAR
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >

          {/* COPYRIGHT */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Suraj Rawat. All rights reserved.
          </p>

         
        </motion.div>
      </div>
    </footer>
  );
}
