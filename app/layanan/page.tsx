"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, 
  PhoneCall, 
  BarChart4, 
  Info, 
  ArrowRight, 
  Search,
  DropletIcon,
  WrenchIcon,
  Book,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LayananPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tabValue, setTabValue] = useState("all");

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

  const mainServices = [
    {
      title: "Pendaftaran Pelanggan Baru",
      description: "Layanan pendaftaran bagi pelanggan baru yang ingin menggunakan jasa pengelolaan air limbah domestik",
      icon: FileText,
      href: "/layanan/pendaftaran",
      color: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900",
      iconColor: "text-blue-500 dark:text-blue-400",
      category: "Pendaftaran",
    },
    {
      title: "Pengaduan Layanan",
      description: "Layanan pengaduan untuk melaporkan masalah terkait layanan air limbah domestik",
      icon: PhoneCall,
      href: "/layanan/pengaduan",
      color: "bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950 dark:to-yellow-900",
      iconColor: "text-amber-500 dark:text-amber-400",
      category: "Pengaduan",
    },
    {
      title: "Penyedotan Terjadwal",
      description: "Layanan penyedotan limbah secara terjadwal untuk memastikan sistem pengolahan berfungsi optimal",
      icon: DropletIcon,
      href: "/layanan/penyedotan",
      color: "bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-teal-950 dark:to-emerald-900",
      iconColor: "text-teal-500 dark:text-teal-400",
      category: "Penyedotan",
    },
    {
      title: "Pemeliharaan & Perbaikan",
      description: "Layanan pemeliharaan dan perbaikan untuk instalasi pengolahan air limbah",
      icon: WrenchIcon,
      href: "/layanan/pemeliharaan",
      color: "bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950 dark:to-purple-900",
      iconColor: "text-indigo-500 dark:text-indigo-400",
      category: "Pemeliharaan",
    },
  ];

  const supportServices = [
    {
      title: "Edukasi Masyarakat",
      description: "Program edukasi masyarakat tentang pentingnya pengelolaan air limbah domestik",
      icon: Book,
      href: "/layanan/edukasi",
      category: "Edukasi",
    },
    {
      title: "Konsultasi Teknis",
      description: "Layanan konsultasi teknis terkait instalasi pengolahan air limbah",
      icon: Info,
      href: "/layanan/konsultasi",
      category: "Konsultasi",
    },
    {
      title: "Informasi Tarif",
      description: "Informasi rinci tentang tarif layanan pengelolaan air limbah domestik",
      icon: BarChart4,
      href: "/tarif",
      category: "Informasi",
    },
    {
      title: "Respons Darurat",
      description: "Layanan penanganan darurat untuk kasus-kasus khusus terkait air limbah",
      icon: AlertCircle,
      href: "/layanan/darurat",
      category: "Darurat",
    },
  ];

  const filteredMainServices = mainServices.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSupportServices = supportServices.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Water background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Animated droplets */}
        <motion.div 
          className="absolute -bottom-4 left-1/4 w-8 h-8 rounded-full bg-cyan-300 opacity-40"
          animate={{ 
            y: [-20, -80], 
            opacity: [0.4, 0],
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
          className="absolute -bottom-4 right-1/3 w-12 h-12 rounded-full bg-blue-300 opacity-30"
          animate={{ 
            y: [-30, -100], 
            opacity: [0.3, 0],
            scale: [1, 1.8]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3.5,
            delay: 0.5,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-4 right-1/4 w-6 h-6 rounded-full bg-teal-300 opacity-50"
          animate={{ 
            y: [-10, -60], 
            opacity: [0.5, 0],
            scale: [1, 1.3]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5,
            delay: 1,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Layanan UPTD Pengelolaan Air Limbah Domestik
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              Berbagai layanan yang kami sediakan untuk masyarakat Kabupaten Tanah Bumbu
              dalam pengelolaan air limbah domestik yang optimal dan berkelanjutan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-2xl mx-auto"
            >
              <Input
                type="search"
                placeholder="Cari layanan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg bg-white/90 rounded-full text-gray-800 border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400"
              />
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </motion.div>
          </div>
        </div>
        
        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs value={tabValue} onValueChange={setTabValue} className="mb-12">
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-3xl font-bold text-cyan-900 dark:text-cyan-50">
                    Layanan Utama
                  </h2>

                  {/* Mobile: Dropdown Select */}
                  <div className="md:hidden w-full">
                    <Select defaultValue="all" onValueChange={(value) => setTabValue(value)}>
                      <SelectTrigger className="w-full bg-cyan-50 dark:bg-cyan-900 border-cyan-200 dark:border-cyan-800">
                        <SelectValue placeholder="Pilih Kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua</SelectItem>
                        <SelectItem value="pendaftaran">Pendaftaran</SelectItem>
                        <SelectItem value="pengaduan">Pengaduan</SelectItem>
                        <SelectItem value="pemeliharaan">Pemeliharaan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Desktop: Traditional Tabs */}
                  <div className="hidden md:block">
                    <TabsList>
                      <TabsTrigger value="all">Semua</TabsTrigger>
                      <TabsTrigger value="pendaftaran">Pendaftaran</TabsTrigger>
                      <TabsTrigger value="pengaduan">Pengaduan</TabsTrigger>
                      <TabsTrigger value="pemeliharaan">Pemeliharaan</TabsTrigger>
                    </TabsList>
                  </div>
                </div>
              </div>

              <TabsContent value="all">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredMainServices.map((service, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="pendaftaran">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredMainServices
                    .filter((service) => service.category === "Pendaftaran")
                    .map((service, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <ServiceCard service={service} />
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="pengaduan">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredMainServices
                    .filter((service) => service.category === "Pengaduan")
                    .map((service, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <ServiceCard service={service} />
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="pemeliharaan">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredMainServices
                    .filter((service) =>
                      service.category === "Pemeliharaan" ||
                      service.category === "Penyedotan"
                    )
                    .map((service, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <ServiceCard service={service} />
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Additional Services */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-900 dark:text-cyan-50">
              Layanan Pendukung
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredSupportServices.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SupportServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-50 dark:bg-cyan-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-cyan-900 dark:text-cyan-50">
                Butuh Bantuan Lebih Lanjut?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Jika Anda memiliki pertanyaan atau butuh bantuan lebih lanjut tentang layanan
                kami, silakan hubungi tim kami atau kunjungi kantor UPTD Pengelolaan Air Limbah
                Domestik Kabupaten Tanah Bumbu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                  asChild
                >
                  <Link href="/kontak">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cyan-600 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/30"
                  asChild
                >
                  <Link href="/faq">
                    Lihat FAQ
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

interface ServiceProps {
  service: {
    title: string;
    description: string;
    icon: any;
    href: string;
    color?: string;
    iconColor?: string;
    category: string;
  };
}

function ServiceCard({ service }: ServiceProps) {
  const { title, description, icon: Icon, href, color = "bg-card", iconColor = "text-primary", category } = service;
  
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className={`rounded-xl p-6 h-full transition-all duration-300 shadow-sm hover:shadow-md ${color}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div
              className={`p-3 rounded-lg inline-flex ${
                iconColor === "text-primary"
                  ? "bg-primary/10"
                  : "bg-white/25 dark:bg-black/10"
              }`}
            >
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <Badge variant="outline" className="text-xs">{category}</Badge>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          <div className={`flex items-center text-sm font-medium mt-auto ${iconColor}`}>
            <span>Selengkapnya</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function SupportServiceCard({ service }: ServiceProps) {
  const { title, description, icon: Icon, href, category } = service;
  
  return (
    <Link href={href}>
      <Card className="h-full transition-all duration-200 hover:shadow-md overflow-hidden">
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300">
              <Icon className="h-5 w-5" />
            </div>
            <Badge variant="secondary" className="text-xs">{category}</Badge>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex items-center text-sm font-medium mt-4 text-cyan-600 dark:text-cyan-400">
            <span>Selengkapnya</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </motion.div>
      </Card>
    </Link>
  );
}