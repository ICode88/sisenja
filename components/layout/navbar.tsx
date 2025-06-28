"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Droplets, LogIn, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { cn } from "@/libs/utils";
import Image from "next/image";

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Tarif", href: "/tarif" },
  { name: "Persyaratan", href: "/persyaratan" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "FAQ", href: "/faq" },
  { name: "Berita", href: "/berita" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="text-primary"
            >
              {/* <Droplets size={28} className="text-cyan-600 dark:text-cyan-400" /> */}
              <Image src="/images/Logo.png" alt="Tanbu" width={80} height={80} />
            </motion.div>
            <motion.span
              className="font-bold text-xl text-cyan-700 dark:text-cyan-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* SISENJA */}
            </motion.span>
          </Link>

          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400",
                  pathname === item.href
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-cyan-600 dark:bg-cyan-400"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 dark:text-cyan-400 dark:hover:text-cyan-300 dark:hover:bg-cyan-900/20"
                >
                  <Link href="/login" className="flex items-center gap-2">
                    <LogIn size={16} />
                    Masuk
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  asChild
                  className="bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600"
                >
                  <Link href="/register" className="flex items-center gap-2">
                    <UserPlus size={16} />
                    Daftar
                  </Link>
                </Button>
              </motion.div>
            </div>

            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 px-2 py-1.5 rounded-md",
                      pathname === item.href
                        ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Auth Buttons - Mobile */}
                <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="justify-start text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 dark:text-cyan-400 dark:hover:text-cyan-300 dark:hover:bg-cyan-900/20"
                  >
                    <Link href="/login" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <LogIn size={16} />
                      Masuk
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="justify-start bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600"
                  >
                    <Link href="/register" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <UserPlus size={16} />
                      Daftar
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}