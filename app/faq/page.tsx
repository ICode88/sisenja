
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WaveDivider } from "@/components/ui/wave-divider";

const faqCategories = [
  {
    title: "Umum",
    questions: [
      {
        q: "Apa itu UPTD Layanan Sedot Tinja?",
        a: "UPTD Layanan Sedot Tinja adalah unit pelaksana teknis daerah yang bertanggung jawab atas layanan sedot tinja di Kabupaten Tanah Bumbu, termasuk pengolahan, pemeliharaan infrastruktur, dan pelayanan kepada masyarakat."
      },
      {
        q: "Dimana lokasi kantor UPTD?",
        a: "Kantor UPTD Layanan Sedot Tinja berlokasi di Jl. Example No. 123, Tanah Bumbu, Kalimantan Selatan. Kami melayani masyarakat setiap hari kerja (Senin-Jumat) dari pukul 08.00-16.00 WITA."
      },
      {
        q: "Bagaimana cara menghubungi UPTD?",
        a: "Anda dapat menghubungi kami melalui:\n- Telepon: (0518) 12345678\n- Email: info@sipald-tala.go.id\n- Kunjungan langsung ke kantor UPTD\n- Formulir kontak di website ini"
      }
    ]
  },
  {
    title: "Layanan",
    questions: [
      {
        q: "Bagaimana cara mendaftar sebagai pelanggan baru?",
        a: "Untuk mendaftar sebagai pelanggan baru, Anda dapat:\n1. Mengisi formulir pendaftaran online di website ini\n2. Mengunjungi kantor UPTD dengan membawa persyaratan yang diperlukan\n3. Menghubungi call center kami untuk panduan lebih lanjut"
      },
      {
        q: "Apa saja layanan yang disediakan UPTD?",
        a: "Layanan kami meliputi:\n- Pengelolaan layanan sedot tinja\n- Penyedotan limbah terjadwal\n- Pemeliharaan instalasi\n- Penanganan darurat\n- Konsultasi teknis\n- Edukasi masyarakat"
      },
      {
        q: "Berapa lama proses pemasangan instalasi baru?",
        a: "Proses pemasangan instalasi baru biasanya memakan waktu 3-7 hari kerja, tergantung pada kondisi lokasi dan kompleksitas instalasi yang diperlukan."
      }
    ]
  },
  {
    title: "Pembayaran",
    questions: [
      {
        q: "Bagaimana cara membayar tagihan?",
        a: "Pembayaran tagihan dapat dilakukan melalui:\n- Transfer bank\n- Pembayaran langsung di kantor UPTD\n- Mobile banking\n- E-wallet yang bekerja sama"
      },
      {
        q: "Kapan batas waktu pembayaran tagihan?",
        a: "Batas waktu pembayaran tagihan adalah tanggal 20 setiap bulannya. Keterlambatan pembayaran akan dikenakan denda sebesar 5% dari total tagihan."
      },
      {
        q: "Apakah ada subsidi untuk masyarakat kurang mampu?",
        a: "Ya, UPTD menyediakan program subsidi untuk masyarakat kurang mampu. Untuk mengajukan subsidi, silakan membawa Kartu Keluarga, KTP, dan Surat Keterangan Tidak Mampu ke kantor UPTD."
      }
    ]
  },
  {
    title: "Teknis",
    questions: [
      {
        q: "Apa yang harus dilakukan jika terjadi masalah dengan instalasi?",
        a: "Jika terjadi masalah dengan instalasi:\n1. Segera laporkan melalui layanan pengaduan\n2. Tim teknis kami akan merespons dalam 24 jam\n3. Untuk keadaan darurat, gunakan nomor darurat kami"
      },
      {
        q: "Berapa sering pemeliharaan rutin dilakukan?",
        a: "Pemeliharaan rutin dilakukan setiap 6 bulan sekali untuk memastikan sistem berfungsi optimal. Jadwal pemeliharaan akan diinformasikan sebelumnya."
      },
      {
        q: "Bagaimana proses pengolahan air limbah dilakukan?",
        a: "Proses pengolahan air limbah meliputi:\n1. Pengumpulan limbah\n2. Penyaringan awal\n3. Pengolahan biologis\n4. Pengolahan kimia\n5. Pemurnian akhir\n6. Pembuangan aman"
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Umum");

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg"
            alt="FAQ background"
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
              Pertanyaan yang Sering Diajukan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              Temukan jawaban untuk pertanyaan umum seputar layanan sedot tinja
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-2xl mx-auto"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                type="search"
                placeholder="Cari pertanyaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg bg-white/90 rounded-full text-gray-800 border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400"
              />
            </motion.div>
          </div>
        </div>

        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold mb-6 text-cyan-900 dark:text-cyan-50">
                  {category.title}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={expandedCategory === category.title ? "0" : undefined}
                  className="space-y-4"
                >
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={faqIndex.toString()}
                      className="bg-white dark:bg-card rounded-lg border border-border/50 overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-muted/30 transition-colors">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-muted-foreground">
                        {faq.a.split('\n').map((line, i) => (
                          <p key={i} className="mb-2">{line}</p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}

            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-xl text-muted-foreground mb-8">
                  Tidak ada pertanyaan yang sesuai dengan pencarian Anda.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSearchQuery("")}
                  className="border-cyan-600 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/30"
                >
                  Lihat Semua FAQ
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-800 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Jika Anda belum menemukan jawaban yang Anda cari, tim kami siap membantu
              Anda dengan informasi lebih lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-cyan-700 hover:bg-blue-50"
                asChild
              >
                <Link href="/kontak">
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                asChild
              >
                <Link href="/layanan">
                  Lihat Layanan
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}