import {
  Hand,
  Leaf,
  Waves,
  Footprints,
  Flame,
  Users,
  Sparkles,
  Heart,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/content/services";

const ICONS: Record<Service["icon"], React.ComponentType<LucideProps>> = {
  hand: Hand,
  leaf: Leaf,
  waves: Waves,
  footprints: Footprints,
  flame: Flame,
  users: Users,
  sparkles: Sparkles,
  heart: Heart,
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
