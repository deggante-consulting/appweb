import {
  Handshake,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import type { services } from "@/content/site";

type ServiceId = (typeof services)[number]["id"];

const serviceIcons: Record<ServiceId, LucideIcon> = {
  "diagnostic-conseil": SearchCheck,
  "prevention-conflits": ShieldCheck,
  "dialogue-negociation": MessageSquareText,
  "formation-managers": Handshake,
};

export function ServiceIcon({
  id,
  size = "md",
}: Readonly<{ id: ServiceId; size?: "sm" | "md" }>) {
  const Icon = serviceIcons[id];
  const dimensions = size === "sm" ? "size-12" : "size-14";
  const iconSize = size === "sm" ? 23 : 26;

  return (
    <span
      className={`inline-flex ${dimensions} shrink-0 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--accent-dark)]`}
    >
      <Icon aria-hidden="true" size={iconSize} strokeWidth={2.25} />
    </span>
  );
}
