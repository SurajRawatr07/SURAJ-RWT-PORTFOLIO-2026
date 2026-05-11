import { useState, useEffect, useCallback } from 'react';

import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  Award,
  Moon,
  Sun,
  Sparkles,
} from 'lucide-react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import { useActiveSection } from '@/hooks/useActiveSection';

/* =========================================
   NAV ITEMS
========================================= */

const navItems = [
  {
    icon: Home,
    href: '#home',
    label: 'Home',
    id: 'home',
  },

  {
    icon: User,
    href: '#about',
    label: 'About',
    id: 'about',
  },

  {
    icon: Briefcase,
    href: '#experience',
    label: 'Experience',
    id: 'experience',
  },

  {
    icon: Code2,
    href: '#skills',
    label: 'Skills',
    id: 'skills',
  },

  {
    icon: FolderGit2,
    href: '#projects',
    label: 'Projects',
    id: 'projects',
  },

  /* FIXED HERE */
  {
    icon: Award,
    href: '#Achievements',
    label: 'Certifications',
    id: 'achievement',
  },

  {
    icon: Mail,
    href: '#contact',
    label: 'Contact',
    id: 'contact',
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Navbar() {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isDark, setIsDark] =
    useState(true);

  const activeSection = useActiveSection(
    navItems.map((item) => item.id)
  );

  /* =========================================
     SCROLL
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  /* =========================================
     THEME
  ========================================= */

  useEffect(() => {
    const root =
      document.documentElement;

    if (isDark) {
      root.classList.add('dark');

      root.classList.remove('light');
    } else {
      root.classList.add('light');

      root.classList.remove('dark');
    }
  }, [isDark]);

  /* =========================================
     SMOOTH SCROLL
  ========================================= */

  const handleNavClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string
    ) => {
      e.preventDefault();

      const id = href.replace('#', '');

      const element =
        document.getElementById(id);

      if (element) {
        const offset = 90;

        const top =
          element.getBoundingClientRect()
            .top +
          window.scrollY -
          offset;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    },
    []
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] flex justify-center px-3 pt-4">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className={`
          relative
          flex
          items-center
          justify-between
          gap-3
          px-3
          sm:px-5
          py-2.5
          sm:py-3
          rounded-full
          border
          transition-all
          duration-500
          backdrop-blur-2xl
          overflow-hidden
          w-full
          max-w-[360px]
          sm:max-w-[700px]
          ${
            isScrolled
              ? `
                bg-background/70
                border-white/10
                shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              `
              : `
                bg-background/40
                border-white/5
              `
          }
        `}
      >

        {/* BACKGROUND GLOW */}

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 left-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />

          <div className="absolute bottom-0 right-10 w-32 h-32 bg-violet-500/10 blur-3xl rounded-full" />
        </div>

        {/* =========================================
            LOGO
        ========================================= */}

        <a
          href="#home"
          onClick={(e) =>
            handleNavClick(
              e,
              '#home'
            )
          }
          className="relative flex items-center gap-2 shrink-0"
        >

          {/* ICON */}

          <div
            className="
              w-9
              h-9
              rounded-full
              bg-gradient-to-br
              from-primary
              to-accent
              flex
              items-center
              justify-center
              shadow-lg
              shadow-primary/20
            "
          >
            <Sparkles className="w-4 h-4 text-white" />
          </div>

          {/* TEXT */}

          <div className="hidden sm:block leading-none">

            <h2 className="text-sm font-bold tracking-[0.2em] text-foreground">
              SURAJ
            </h2>

            <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase mt-1">
              Portfolio
            </p>
          </div>
        </a>

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <div className="flex items-center gap-1 sm:gap-2 relative z-10">

          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              activeSection === item.id;

            return (
              <a
                key={item.label}
                href={item.href}
                title={item.label}
                onClick={(e) =>
                  handleNavClick(
                    e,
                    item.href
                  )
                }
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  rounded-full
                  transition-all
                  duration-300
                  group
                "
              >

                {/* ACTIVE */}

                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    transition={{
                      type:
                        'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-r
                      from-primary/20
                      to-accent/20
                      border
                      border-primary/20
                    "
                  />
                )}

                {/* ICON */}

                <Icon
                  className={`
                    relative
                    z-10
                    w-[17px]
                    h-[17px]
                    sm:w-[18px]
                    sm:h-[18px]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? `
                          text-primary
                          scale-110
                        `
                        : `
                          text-muted-foreground
                          group-hover:text-foreground
                          group-hover:scale-110
                        `
                    }
                  `}
                />

                {/* TOOLTIP */}

                <div
                  className="
                    absolute
                    -bottom-10
                    opacity-0
                    pointer-events-none
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    px-2
                    py-1
                    rounded-md
                    text-[10px]
                    tracking-wide
                    bg-background/90
                    border
                    border-white/10
                    backdrop-blur-xl
                    whitespace-nowrap
                    hidden
                    sm:block
                  "
                >
                  {item.label}
                </div>
              </a>
            );
          })}

          {/* DIVIDER */}

          <div className="w-px h-5 bg-white/10 mx-1 sm:mx-2" />

          {/* =========================================
              DARK MODE
          ========================================= */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              setIsDark(!isDark)
            }
            className="
              relative
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              flex
              items-center
              justify-center
              text-muted-foreground
              hover:text-foreground
              hover:border-primary/30
              transition-all
              duration-300
              overflow-hidden
            "
          >

            {/* GLOW */}

            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition duration-300" />

            <AnimatePresence mode="wait">

              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative z-10"
                >
                  <Sun className="w-[17px] h-[17px]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative z-10"
                >
                  <Moon className="w-[17px] h-[17px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>
    </header>
  );
}