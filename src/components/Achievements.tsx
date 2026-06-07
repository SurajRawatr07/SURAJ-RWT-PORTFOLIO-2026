import { motion, useInView, PanInfo } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = certificateImages.map((image, index) => ({
  title: `Certificate ${index + 1}`,
  issuer: 'Organizations & Colleges',
  date: rue,
  });
    setActive((prev) => (prev + 1) % certificates.length);
  };

  const prev = () => {
    setActive(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) next();
    if (info.offset.x > 50) prev();
  };

  const getOffset = (index: number) => {
    let diff = index - active;

    if (diff > certificates.length / 2) {
      diff -= certificates.length;
    }

    if (diff < -certificates.length / 2) {
      diff += certificates.length;
    }

    return diff;
  };

  return (
    <section className="py-32 px-4 overflow-hidden section-frost">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates
          </h2>

          <p className="text-muted-foreground text-lg">
            {certificates.length} Certifications
          </p>
        </motion.div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-50
            w-12 h-12 rounded-full border border-white/20
            bg-black/40 backdrop-blur-md
            flex items-center justify-center
            hover:scale-110 hover:bg-primary/20
            transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-50
            w-12 h-12 rounded-full border border-white/20
            bg-black/40 backdrop-blur-md
            flex items-center justify-center
            hover:scale-110 hover:bg-primary/20
            transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="relative flex justify-center items-center h-[520px]"
          >
            {certificates.map((cert, index) => {
              const offset = getOffset(index);
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={index}
                  onClick={() => setActive(index)}
                  animate={{
                    x: offset * 240,
                    scale: isCenter ? 1 : 0.75,
                    opacity: Math.abs(offset) > 3 ? 0 : isCenter ? 1 : 0.4,
                    rotateY: offset * -15,
                    zIndex: 20 - Math.abs(offset),
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 18,
                  }}
                  className="absolute w-[320px] cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className={`overflow-hidden rounded-3xl border transition-all duration-500
                    ${
                      isCenter
                        ? 'bg-card shadow-2xl border-primary/40'
                        : 'bg-card/50 border-white/10'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={`w-full h-[240px] object-cover transition-all duration-500
                        ${
                          isCenter
                            ? 'brightness-100 blur-0 scale-100'
                            : 'brightness-50 blur-[2px] scale-95'
                        }`}
                      />

                      {!isCenter && (
                        <div className="absolute inset-0 bg-black/20" />
                      )}
                    </div>

                    {/* Center Info */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="p-5 text-center"
                      >
                        <h3 className="text-xl font-semibold">
                          {cert.title}
                        </h3>

                        <p className="text-sm mt-1 text-muted-foreground">
                          {cert.issuer}
                        </p>

                        <p className="text-xs uppercase tracking-widest mt-2 text-primary">
                          {cert.date}
                        </p>

                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all"
                        >
                          View Certificate
                          <ExternalLink size={14} />
                        </a>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Dots */}
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-300 rounded-full
              ${
                active === index
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-muted-foreground/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
