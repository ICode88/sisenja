"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
  Building2,
  GraduationCap,
  Briefcase,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Img } from "@/components/ui/img";

const values = [
  {
    icon: Users,
    title: "Pelayanan Prima",
    description: "Memberikan pelayanan terbaik dengan standar profesional tinggi untuk kepuasan masyarakat."
  },
  {
    icon: Target,
    title: "Inovasi Berkelanjutan",
    description: "Terus berinovasi dalam teknologi dan metode pengelolaan air limbah yang ramah lingkungan."
  },
  {
    icon: Award,
    title: "Integritas",
    description: "Menjalankan tugas dengan kejujuran, transparansi, dan tanggung jawab penuh."
  },
  {
    icon: CheckCircle2,
    title: "Komitmen Kualitas",
    description: "Menjaga standar kualitas tinggi dalam setiap aspek pengelolaan air limbah."
  }
];

const timeline = [
  {
    year: "2016",
    title: "Pengembangan Infrastruktur",
    description: "Pembangunan infrastruktur awal untuk mendukung sistem pengelolaan air limbah domestik di Kabupaten Tanah Bumbu."
  },
  {
    year: "2018",
    title: "Pendirian/Pembentukan UPTD",
    description: "Resmi dibentuknya UPTD Pengelolaan Air Limbah Domestik sebagai lembaga operasional di bidang sanitasi."
  },
  {
    year: "2018",
    title: "Operasional",
    description: "Mulai beroperasinya layanan sedot tinja dan pengelolaan air limbah secara aktif."
  },
  {
    year: "2025",
    title: "Digitalisasi Layanan",
    description: "Transformasi digital melalui penerapan teknologi modern untuk meningkatkan efisiensi dan akses layanan."
  }
];

const team = [
  {
    name: "Ihwan Rinjani",
    position: "Operator",
    image: "/images/image2.png",
    department: "Operator"
  },
  {
    name: "Sarwani",
    position: "Operator",
    image: "/images/image.png",
    department: "Operator"
  }
 
];

export default function TentangPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
            alt="About background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Tentang Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed px-2"
            >
              UPTD Pengelolaan Air Limbah Domestik Kabupaten Tanah Bumbu berkomitmen untuk
              mewujudkan lingkungan yang bersih dan sehat melalui layanan sedot tinja
              yang optimal dan berkelanjutan.
            </motion.p>
          </div>
        </div>

        <WaveDivider color="fill-white dark:fill-background" height={60} />
      </section>

      <Img color="fill-white dark:fill-background" height={30} />

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-cyan-900 dark:text-cyan-50">
                Visi & Misi
              </h2>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-cyan-800 dark:text-cyan-200">
                  Visi
                </h3>
                <p className="text-base sm:text-lg text-cyan-700 dark:text-cyan-300 mb-6 sm:mb-8 leading-relaxed">
                  &quot;Mewujudkan Kabupaten Tanah Bumbu yang bersih, sehat, dan berkelanjutan
                  melalui layanan sedot tinja yang optimal.&quot;
                </p>

                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-cyan-800 dark:text-cyan-200">
                  Misi
                </h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 leading-relaxed">
                      Meningkatkan kualitas layanan layanan sedot tinja
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 leading-relaxed">
                      Mengembangkan infrastruktur sedot tinja yang modern
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 leading-relaxed">
                      Meningkatkan kesadaran masyarakat tentang pengelolaan limbah
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 leading-relaxed">
                      Menjamin keberlanjutan sistem layanan sedot tinja
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-card-lift card-enhanced">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start">
                        <div className="p-2.5 sm:p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="text-base sm:text-lg font-semibold mb-2">{value.title}</h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>

            {/* Timeline - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-cyan-900 dark:text-cyan-50">
                Perjalanan Kami
              </h2>

              {/* Mobile Timeline (Vertical) */}
              <div className="block sm:hidden space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-cyan-500 dark:bg-cyan-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="absolute left-3 top-6 w-0.5 h-16 bg-cyan-200 dark:bg-cyan-800" />
                    )}
                    <div className="bg-white dark:bg-card p-4 rounded-lg shadow-md">
                      <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Timeline (Horizontal) */}
              <div className="hidden sm:block relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-200 dark:bg-cyan-800" />
                {timeline.map((item, index) => (
                  <div key={index} className="relative mb-8">
                    <div
                      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                      <div className="w-1/2" />
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 z-10" />
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"
                          }`}
                      >
                        <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-cyan-900 dark:text-cyan-50">
                Tim Kami
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover-card-lift card-enhanced overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-40 sm:h-48">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-3 sm:p-4">
                          <h3 className="font-semibold text-base sm:text-lg mb-1">{member.name}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                            {member.position}
                          </p>
                          <div className="inline-block bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 text-xs px-2 py-1 rounded-full">
                            {member.department}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Bergabung Bersama Kami
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed px-2">
              Mari bersama-sama mewujudkan lingkungan yang bersih dan sehat melalui
              pengelolaan air limbah yang optimal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-white text-cyan-700 hover:bg-blue-50 w-full sm:w-auto"
                asChild
              >
                <Link href="/layanan" className="flex items-center justify-center">
                  Lihat Layanan Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white w-full sm:w-auto"
                asChild
              >
                <Link href="/kontak" className="flex items-center justify-center">
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}