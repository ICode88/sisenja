"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Forbidden() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-900 relative overflow-hidden">
      {/* Animated shield symbols */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ scale: 0.5, opacity: 0.1 }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          >
            <ShieldAlert
              className="text-amber-500 dark:text-amber-400"
              style={{
                width: `${30 + i * 10}px`,
                height: `${30 + i * 10}px`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-amber-600 dark:text-amber-400 mb-4">403</h1>
          <p className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mb-2">
            Akses Ditolak
          </p>
          <p className="text-amber-600 dark:text-amber-300 max-w-md mx-auto">
            Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi
            administrator jika Anda yakin seharusnya memiliki akses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="default"
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
          <Button
            variant="outline"
            className="border-amber-600 text-amber-700 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-300 dark:hover:bg-amber-900/30"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Beranda
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}