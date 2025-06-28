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
    year: "2020",
    title: "Pendirian UPTD",
    description: "Pembentukan UPTD Pengelolaan Air Limbah Domestik Kabupaten Tanah Bumbu."
  },
  {
    year: "2021",
    title: "Pengembangan Infrastruktur",
    description: "Pembangunan instalasi pengolahan layanan sedot tinja pertama."
  },
  {
    year: "2022",
    title: "Perluasan Layanan",
    description: "Perluasan jaringan dan peningkatan kapasitas pengolahan."
  },
  {
    year: "2023",
    title: "Modernisasi Sistem",
    description: "Implementasi teknologi modern dalam pengelolaan air limbah."
  },
  {
    year: "2024",
    title: "Sertifikasi ISO",
    description: "Pencapaian sertifikasi ISO untuk standar pengelolaan."
  },
  {
    year: "2025",
    title: "Digitalisasi Layanan",
    description: "Peluncuran platform digital SISENJA untuk pelayanan masyarakat."
  }
];

const team = [
  {
    name: "Ir. Ahmad Suryadi",
    position: "Kepala UPTD",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    department: "Pimpinan"
  },
  {
    name: "Siti Nurhaliza, ST",
    position: "Kepala Seksi Teknis",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    department: "Teknis"
  },
  {
    name: "Budi Santoso, SE",
    position: "Kepala Seksi Administrasi",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    department: "Administrasi"
  },
  {
    name: "Drg. Maya Indah",
    position: "Kepala Seksi Pelayanan",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    department: "Pelayanan"
  }
];

export default function TentangPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
            alt="About background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Tentang Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              UPTD Pengelolaan Air Limbah Domestik Kabupaten Tanah Bumbu berkomitmen untuk
              mewujudkan lingkungan yang bersih dan sehat melalui layanan sedot tinja
              yang optimal dan berkelanjutan.
            </motion.p>
          </div>
        </div>

        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-cyan-900 dark:text-cyan-50">
                Visi & Misi
              </h2>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">
                  Visi
                </h3>
                <p className="text-lg text-cyan-700 dark:text-cyan-300 mb-8">
                  &quot;Mewujudkan Kabupaten Tanah Bumbu yang bersih, sehat, dan berkelanjutan
                  melalui layanan sedot tinja yang optimal.&quot;
                </p>

                <h3 className="text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">
                  Misi
                </h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700 dark:text-cyan-300">
                      Meningkatkan kualitas layanan layanan sedot tinja
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700 dark:text-cyan-300">
                      Mengembangkan infrastruktur sedot tinja yang modern
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700 dark:text-cyan-300">
                      Meningkatkan kesadaran masyarakat tentang pengelolaan limbah
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700 dark:text-cyan-300">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-card-lift card-enhanced">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-10 text-center text-cyan-900 dark:text-cyan-50">
                Perjalanan Kami
              </h2>
              <div className="relative">
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
              <h2 className="text-3xl font-bold mb-10 text-cyan-900 dark:text-cyan-50">
                Tim Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        <div className="relative h-48">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-800 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bergabung Bersama Kami
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Mari bersama-sama mewujudkan lingkungan yang bersih dan sehat melalui
              pengelolaan air limbah yang optimal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-cyan-700 hover:bg-blue-50"
                asChild
              >
                <Link href="/layanan">
                  Lihat Layanan Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                asChild
              >
                <Link href="/kontak">
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
