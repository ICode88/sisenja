"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: string;
  iconColor?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  color = "bg-card",
  iconColor = "text-primary",
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "rounded-xl p-6 h-full transition-all duration-300 hover-card-lift card-enhanced",
          color
        )}
      >
        <div className="flex flex-col h-full">
          <div
            className={cn(
              "mb-4 p-3 rounded-lg inline-flex w-fit",
              iconColor === "text-primary"
                ? "bg-primary/10"
                : "bg-white/25 dark:bg-black/10"
            )}
          >
            <Icon className={cn("h-6 w-6", iconColor)} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          <div
            className={cn(
              "flex items-center text-sm font-medium mt-auto group",
              iconColor
            )}
          >
            <span className="group-hover:mr-2 transition-all">Selengkapnya</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}