"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Info, FileText, Clock, Droplets, BarChart4, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WaveDivider } from "@/components/ui/wave-divider";
import ServiceCard from "@/components/home/service-card";
import NewsCard from "@/components/home/news-card";
import StatCard from "@/components/home/stat-card";
import { cn } from "@/lib/utils";
import ImageSlider from "@/components/home/image-slider";

export default function Home() {
  const [activeTab, setActiveTab] = useState("umum");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      title: "Pendaftaran Pelanggan Baru",
      description: "Informasi dan prosedur untuk pendaftaran layanan pengelolaan air limbah",
      icon: FileText,
      href: "/layanan/pendaftaran",
      color: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900",
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      title: "Informasi Tarif",
      description: "Rincian biaya dan mekanisme pembayaran layanan",
      icon: BarChart4,
      href: "/tarif",
      color: "bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-teal-950 dark:to-emerald-900",
      iconColor: "text-teal-500 dark:text-teal-400",
    },
    {
      title: "Pengaduan Layanan",
      description: "Sampaikan keluhan dan pertanyaan terkait layanan",
      icon: PhoneCall,
      href: "/layanan/pengaduan",
      color: "bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950 dark:to-yellow-900",
      iconColor: "text-amber-500 dark:text-amber-400",
    },
    {
      title: "Informasi Pengelolaan",
      description: "Proses dan manfaat Layanan Sedot Tinja",
      icon: Info,
      href: "/tentang/pengelolaan",
      color: "bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950 dark:to-purple-900",
      iconColor: "text-indigo-500 dark:text-indigo-400",
    },
  ];

  const news = [
    {
      title: "Peluncuran Program Edukasi Masyarakat tentang Pengelolaan Limbah",
      excerpt: "UPTD meluncurkan program edukasi tentang pentingnya pengelolaan limbah domestik yang benar.",
      date: "5 Mei 2025",
      category: "Program",
      image: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "program-edukasi-masyarakat",
    },
    {
      title: "Peningkatan Layanan Pemeliharaan Sistem Pengelolaan Air Limbah",
      excerpt: "UPTD meningkatkan frekuensi pemeliharaan untuk memastikan sistem berfungsi optimal.",
      date: "2 Mei 2025",
      category: "Layanan",
      image: "https://images.pexels.com/photos/1076080/pexels-photo-1076080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "peningkatan-layanan-pemeliharaan",
    },
    {
      title: "Pengumuman Jadwal Pemeliharaan Rutin Bulan Mei",
      excerpt: "Jadwal pemeliharaan rutin sistem pengelolaan air limbah untuk bulan Mei 2025.",
      date: "28 April 2025",
      category: "Pengumuman",
      image: "https://images.pexels.com/photos/8473465/pexels-photo-8473465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "jadwal-pemeliharaan-mei",
    },
  ];

  const stats = [
    {
      title: "Pelanggan Aktif",
      value: "7,800+",
      icon: Droplets,
      description: "Pengguna layanan",
    },
    {
      title: "Kapasitas Olah",
      value: "3,500",
      suffix: "m³/hari",
      icon: BarChart4,
      description: "Kapasitas pengolahan",
    },
    {
      title: "Respons Cepat",
      value: "< 24",
      suffix: "jam",
      icon: Clock,
      description: "Waktu penanganan",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 pb-24 overflow-visible bg-gradient-to-b from-cyan-50 to-blue-100 dark:from-cyan-950 dark:to-blue-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <Image 
              src="https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Water background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          
          {/* Animated water particle effects */}
          <motion.div 
            className="absolute bottom-0 left-1/4 w-4 h-4 rounded-full bg-cyan-500 opacity-70"
            animate={{ 
              y: [-20, -120], 
              opacity: [0.7, 0],
              scale: [1, 1.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-10 right-1/3 w-6 h-6 rounded-full bg-blue-500 opacity-60"
            animate={{ 
              y: [-30, -150], 
              opacity: [0.6, 0],
              scale: [1, 1.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              delay: 1,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-1/4 w-3 h-3 rounded-full bg-teal-500 opacity-80"
            animate={{ 
              y: [-10, -100], 
              opacity: [0.8, 0],
              scale: [1, 1.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              delay: 0.5,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1 mb-6 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm font-medium"
              >
                UPTD Layanan Sedot Tinja
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cyan-900 dark:text-cyan-50"
              >
                <span className="relative">
                  Sistem Informasi
                 
                </span>
                <br />
                Layanan Sedot Tinja (SISENJA)
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-cyan-800 dark:text-cyan-200 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Cepat, Tepat, dan Berkelanjutan.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                  asChild
                >
                  <Link href="/layanan">
                    Layanan Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cyan-600 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/30"
                  asChild
                >
                  <Link href="/tentang">Tentang UPTD</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/30 to-blue-500/30 animate-pulse" />

                <Image
                  src="/images/ilustration.svg"
                  alt="Water treatment"
                  width={400}
                  height={400}
                  className="rounded-full shadow-lg object-cover z-10 relative w-full h-full"
                />

                <motion.div
                  className="absolute -bottom-5 -right-5 w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <Droplets size={40} />
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
        
        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-900 dark:text-cyan-50">
              Layanan UPTD Sedot Tinja
            </h2>
            <p className="text-lg text-muted-foreground">
              Kami menyediakan berbagai layanan terkait Layanan Sedot Tinja
              untuk masyarakat Kabupaten Tanah Bumbu
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-900 dark:to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="wave" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 20 61, 40 50 T 80 50 T 120 50 T 160 50 T 200 50" stroke="white" strokeWidth="5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ImageSlider />


            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm font-medium">
                Tentang Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-900 dark:text-cyan-50">
                UPTD Layanan Sedot Tinja
              </h2>

              <Tabs defaultValue="umum" onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="umum">Umum</TabsTrigger>
                  <TabsTrigger value="visi">Visi & Misi</TabsTrigger>
                  <TabsTrigger value="manfaat">Manfaat</TabsTrigger>
                </TabsList>

                <TabsContent value="umum" className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    UPTD Layanan Sedot Tinja Kabupaten Tanah Bumbu adalah unit pelaksana
                    teknis daerah yang bertanggung jawab atas Layanan Sedot Tinja di
                    Kabupaten Tanah Bumbu.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Kami menyediakan layanan pengelolaan air limbah yang berkualitas untuk
                    mewujudkan lingkungan yang bersih dan sehat bagi masyarakat.
                  </p>
                </TabsContent>

                <TabsContent value="visi" className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-cyan-900 dark:text-cyan-50">Visi</h4>
                    <p className="text-lg text-muted-foreground mb-4">
                      Mewujudkan Kabupaten Tanah Bumbu yang bersih, sehat, dan berkelanjutan
                      melalui Layanan Sedot Tinja yang optimal.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-cyan-900 dark:text-cyan-50">Misi</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Meningkatkan kualitas Layanan Sedot Tinja</li>
                      <li>Mengembangkan infrastruktur pengolahan air limbah yang modern</li>
                      <li>Meningkatkan kesadaran masyarakat tentang pengelolaan limbah</li>
                      <li>Menjamin keberlanjutan sistem pengelolaan air limbah</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="manfaat" className="space-y-4">
                  <p className="text-lg text-muted-foreground mb-4">
                    Layanan Sedot Tinja yang baik memberikan berbagai manfaat penting:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Mencegah pencemaran air tanah dan sumber air minum</li>
                    <li>Mengurangi risiko penyakit yang ditularkan melalui air</li>
                    <li>Meningkatkan kualitas lingkungan dan kebersihan</li>
                    <li>Menjaga keseimbangan ekosistem air</li>
                    <li>Mendukung pembangunan berkelanjutan</li>
                  </ul>
                </TabsContent>
              </Tabs>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={activeTab === "umum" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={cn("mt-8", activeTab !== "umum" && "hidden")}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                  asChild
                >
                  <Link href="/tentang">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* News & Announcements Section */}
      <section className="py-20 bg-cyan-50 dark:bg-cyan-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-900 dark:text-cyan-50">
              Berita & Pengumuman
            </h2>
            <p className="text-lg text-muted-foreground">
              Dapatkan informasi terbaru tentang program, kegiatan, dan pengumuman
              terkait Layanan Sedot Tinja
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {news.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <NewsCard {...item} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-600 text-cyan-700 hover:bg-cyan-100 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/30"
              asChild
            >
              <Link href="/berita">
                Lihat Semua Berita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-800 dark:to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="water-pattern" width="56" height="100" x="0" y="0" patternUnits="userSpaceOnUse">
              <path d="M28 66Q42 46 56 66V100H0V66Q14 86 28 66" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#water-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Punya Pertanyaan Tentang Layanan Kami?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Hubungi kami untuk informasi lebih lanjut tentang layanan sedot tinja dan cara mendaftarkan diri Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-cyan-700 hover:bg-blue-50"
                asChild
              >
                <Link href="/kontak">
                  Hubungi Kami
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                asChild
              >
                <Link href="/faq">
                  Lihat FAQ
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}