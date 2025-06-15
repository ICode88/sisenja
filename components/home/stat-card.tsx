"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
  suffix?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
  suffix,
}: StatCardProps) {
  return (
    <Card className="glass-effect text-white p-6 h-full relative overflow-hidden hover-card-lift">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-0"
      >
        <Icon className="h-32 w-32 -mt-8 -mr-8" />
      </motion.div>
      <div className="relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg font-medium text-blue-100 mb-1"
        >
          {title}
        </motion.h3>
        <div className="flex items-baseline mb-1">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold"
          >
            {value}
          </motion.span>
          {suffix && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="ml-1 text-xl text-blue-200"
            >
              {suffix}
            </motion.span>
          )}
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-blue-200"
        >
          {description}
        </motion.p>
      </div>
    </Card>
  );
}