"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-50 to-blue-100 dark:from-cyan-950 dark:to-blue-900 relative overflow-hidden">
      {/* Animated water drops */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: "-20px",
            }}
          >
            <Droplets
              className="text-cyan-500 dark:text-cyan-400"
              style={{
                width: `${20 + i * 5}px`,
                height: `${20 + i * 5}px`,
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
          <h1 className="text-9xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">404</h1>
          <p className="text-2xl font-semibold text-cyan-800 dark:text-cyan-200 mb-2">
            Halaman Tidak Ditemukan
          </p>
          <p className="text-cyan-600 dark:text-cyan-300 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan atau dihapus.
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
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
          <Button
            variant="outline"
            className="border-cyan-600 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/30"
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