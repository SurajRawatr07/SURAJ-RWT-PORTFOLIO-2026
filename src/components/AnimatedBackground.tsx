import { useIsMobile } from '@/hooks/use-mobile';

export default function AnimatedBackground() {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Soft mesh g
        className="absolute inse
      />ent orbs (dName="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
          <div clte for hero readability */}
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-background/60 to-transparent" />
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background/60 to-transparent" />
    </div>
  );
}
