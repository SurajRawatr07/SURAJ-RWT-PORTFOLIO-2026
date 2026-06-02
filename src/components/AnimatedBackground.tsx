import { useIsMobile } from '@/hooks/use-mobile';

export default function AnimatedBackground() {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Soft mesh g
        className="absolute inse
      />ent orbs (disabled on mobile for perf) */}
      {!isMobile && (
        <>
          <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-accent/20 blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-[34rem] h-[34rem] rounded-full bg-primary/15 blur-3xl animate-blob animation-delay-4000" />
        </>
      )}

      {/* Top vignette for hero readability */}
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-background/60 to-transparent" />
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background/60 to-transparent" />
    </div>
  );
}
