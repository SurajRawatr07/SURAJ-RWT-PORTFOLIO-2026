import {
  Code,
  Palette,
  FileCode,
  Atom,
  Layers,
  Wind,
  Server,
  Database,
  ShieldCheck,
  Key,
  Workflow,
  GitBranch,
  Link,
  Github,
  Cloud,
  Gauge,
  Brain,
  Lightbulb,
  Cpu
} from 'lucide-react';

const items = [
  { label: 'HTML5', icon: Code },
  { label: 'CSS3', icon: Palette },
  { label: 'JAVASCRIPT', icon: FileCode },
  { label: 'TYPESCRIPT', icon: FileCode },
  { label: 'REACT.JS', icon: Atom },
  { label: 'NEXT.JS', icon: Layers },
  { label: 'TAILWIND CSS', icon: Wind },
  { label: 'NODE.JS', icon: Server },
  { label: 'EXPRESS.JS', icon: Server },
  { label: 'REST APIs', icon: Link },
  { label: 'MONGODB', icon: Database },
  { label: 'MYSQL', icon: Database },
  { label: 'AUTHENTICATION', icon: ShieldCheck },
  { label: 'JWT / OAUTH', icon: Key },
  { label: 'STATE MANAGEMENT', icon: Workflow },
  { label: 'REDUX / CONTEXT API', icon: GitBranch },
  { label: 'API INTEGRATION', icon: Link },
  { label: 'GIT & GITHUB', icon: Github },
  { label: 'DOCKER', icon: Cloud },
  { label: 'AWS / CLOUD', icon: Cloud },
  { label: 'PERFORMANCE OPTIMIZATION', icon: Gauge },
  { label: 'SYSTEM DESIGN', icon: Cpu },
  { label: 'DSA', icon: Brain },
  { label: 'PROBLEM SOLVING', icon: Lightbulb },
];

function ItemList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div aria-hidden={duplicate} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span
          key={`${item.label}-${i}`}
          className="inline-flex items-center gap-2.5 px-6 shrink-0"
        >
          <item.icon size={20} className="text-primary/70 shrink-0" />
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div className="w-full flex justify-center py-8 mt-4">
      <div className="w-1/2 overflow-hidden rounded-full border border-border/30 bg-card/30 backdrop-blur-sm py-3">
        <div className="flex w-max whitespace-nowrap font-display text-base md:text-lg tracking-[0.15em] text-muted-foreground/70 font-medium uppercase animate-marquee-loop will-change-transform [transform:translate3d(0,0,0)]">
          <ItemList />
          <ItemList duplicate />
        </div>
      </div>
    </div>
  );
}