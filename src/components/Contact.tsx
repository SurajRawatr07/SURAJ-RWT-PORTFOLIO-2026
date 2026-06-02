import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

import {
  Mail,
  Phone,
  MapP
  Briefcase,
} from 'lucide-react';

import { toast } from 'sonner';

/* =========================================
   CONTACT INFO
========================================= */

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rawatsuraj80627@gmail.com',
    href: 'mailto:rawatsuraj80627@gmail.com',
    gradient: 'from-cyan-500 to-blue-500',
  },

  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9675219087',
    href: 'tel:+919675219087',
    gradient: 'from-violet-500 to-purple-500',
  },

  {
    icon: MapPin,
    label: 'Location',
    value: 'Haldwani, Uttarakhand, India',
    href: '#',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

/* =========================================
   SOCIAL LINKS
========================================= */

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/SurajRawatr07',
    gradient: 'from-slate-700 to-slate-900',
  },

  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suraj-rawat-30513b340',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Contact() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  /* =========================================
     FORM SUBMIT
  ========================================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        body: data,
      });

      toast.success(
        'Message sent successfully 🚀'
      );

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error(
        'Failed to send message. Please try again.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-32 px-4 section-frost"
    >
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      <div
        ref={ref}
        className="container mx-auto max-w-7xl relative z-10"
      >
        {/* =========================================
            HEADING
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
          }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={
              isInView
                ? {
                    width: 90,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-5"
          />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Get In{' '}
            <span className="text-gradient">
              Touch
            </span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Open to internships, freelance projects,
            collaborations, hackathons, and full-stack
            development opportunities. Let’s build
            something impactful together.
          </p>
        </motion.div>

        {/* =========================================
            MAIN GRID
        ========================================= */}

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

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
            className="space-y-8"
          >
            {/* TOP CARD */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8">

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

              <div className="relative z-10">

                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm mb-6">
                  <Sparkles className="w-4 h-4" />

                  Available for Opportunities
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
                  Let’s Create Modern Digital
                  Experiences
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-8">
                  I’m a BCA student and Full-Stack Web
                  Developer passionate about scalable
                  applications, modern UI/UX, backend
                  systems, and performance-driven web
                  experiences.
                </p>

                {/* QUICK STATS */}

                <div className="grid grid-cols-3 gap-4">

                  {[
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
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                    >
                      <h4 className="text-xl sm:text-2xl font-bold text-gradient">
                        {item.value}
                      </h4>

                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTACT INFO */}

            <div className="space-y-5">

              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{
                    opacity: 0,
                    x: -20,
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
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                  className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 hover:border-primary/30 transition-all duration-500"
                >
                  {/* HOVER GLOW */}

                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br ${item.gradient}`}
                  />

                  {/* ICON */}

                  <div
                    className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* TEXT */}

                  <div className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>

                    <p className="text-sm sm:text-base font-medium text-foreground break-all">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* SOCIALS */}

            <div className="flex flex-wrap gap-4 pt-2">

              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    scale: 1.04,
                  }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${social.gradient} text-white font-medium shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />

                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* =========================================
              RIGHT SIDE FORM
          ========================================= */}

          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
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
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 md:p-10"
          >
            {/* BG GLOW */}

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />

            <div className="relative z-10">

              {/* FORM HEADER */}

              <div className="mb-8">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm mb-5">
                  <MessageSquare className="w-4 h-4" />

                  Send a Message
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Start a Conversation
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Share your project idea, internship
                  opportunity, collaboration, or any
                  development-related discussion.
                </p>
              </div>

              {/* HIDDEN INPUTS */}

              <input
                type="hidden"
                name="form-name"
                value="contact"
              />

              <input
                type="hidden"
                name="subject"
                value="Portfolio Contact Form"
              />

              <p className="hidden">
                <label>
                  Don&apos;t fill this out:
                  <input name="bot-field" />
                </label>
              </p>

              {/* INPUTS */}

              <div className="space-y-6">

                {/* NAME */}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter your name"
                      className="w-full h-14 pl-12 pr-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                {/* EMAIL */}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Email
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your email"
                      className="w-full h-14 pl-12 pr-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Message
                  </label>

                  <div className="relative">
                    <Briefcase className="absolute left-4 top-5 w-5 h-5 text-muted-foreground" />

                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* BUTTON */}

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="group relative overflow-hidden w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white font-semibold shadow-2xl"
                >
                  {/* SHINE */}

                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />

                    Send Message
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
