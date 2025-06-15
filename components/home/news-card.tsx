"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export default function NewsCard({
  title,
  excerpt,
  date,
  category,
  image,
  slug,
}: NewsCardProps) {
  return (
    <Link href={`/berita/${slug}`}>
      <motion.div 
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-full"
      >
        <Card className="overflow-hidden h-full hover-card-lift card-enhanced">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 left-3 z-10">
              <Badge
                className={cn(
                  "badge-enhanced",
                  category === 'Program' ? 'bg-indigo-500 hover:bg-indigo-600' : 
                  category === 'Layanan' ? 'bg-green-500 hover:bg-green-600' : 
                  'bg-amber-500 hover:bg-amber-600'
                )}
              >
                {category}
              </Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <CardContent className="p-5">
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <CalendarIcon className="mr-1 h-3 w-3" />
              <span>{date}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}