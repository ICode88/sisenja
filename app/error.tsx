"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, RotateCcw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-orange-100 dark:from-red-950 dark:to-orange-900 relative overflow-hidden">
      {/* Animated warning symbols */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ rotate: 0, opacity: 0.1 }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 10}%`,
            }}
          >
            <AlertTriangle
              className="text-red-500 dark:text-red-400"
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
          <h1 className="text-9xl font-bold text-red-600 dark:text-red-400 mb-4">500</h1>
          <p className="text-2xl font-semibold text-red-800 dark:text-red-200 mb-2">
            Terjadi Kesalahan
          </p>
          <p className="text-red-600 dark:text-red-300 max-w-md mx-auto">
            Maaf, telah terjadi kesalahan pada server kami. Tim teknis kami telah diberitahu
            dan sedang bekerja untuk memperbaikinya.
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
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500"
            onClick={reset}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Coba Lagi
          </Button>
          <Button
            variant="outline"
            className="border-red-600 text-red-700 hover:bg-red-50 dark:border-red-400 dark:text-red-300 dark:hover:bg-red-900/30"
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