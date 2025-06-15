"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WaveDivider } from "@/components/ui/wave-divider";
import NewsCard from "@/components/home/news-card";

// Sample news data - in a real app, this would come from an API
const newsData = [
  {
    title: "Peluncuran Program Edukasi Masyarakat tentang Pengelolaan Limbah",
    excerpt: "UPTD meluncurkan program edukasi tentang pentingnya pengelolaan limbah domestik yang benar untuk meningkatkan kesadaran masyarakat.",
    date: "5 Mei 2025",
    category: "Program",
    image: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg",
    slug: "program-edukasi-masyarakat",
  },
  {
    title: "Peningkatan Layanan Pemeliharaan Sistem Pengelolaan Air Limbah",
    excerpt: "UPTD meningkatkan frekuensi pemeliharaan untuk memastikan sistem berfungsi optimal sepanjang tahun.",
    date: "2 Mei 2025",
    category: "Layanan",
    image: "https://images.pexels.com/photos/1076080/pexels-photo-1076080.jpeg",
    slug: "peningkatan-layanan-pemeliharaan",
  },
  {
    title: "Pengumuman Jadwal Pemeliharaan Rutin Bulan Mei",
    excerpt: "Jadwal pemeliharaan rutin sistem pengelolaan air limbah untuk bulan Mei 2025 telah dirilis.",
    date: "28 April 2025",
    category: "Pengumuman",
    image: "https://images.pexels.com/photos/8473465/pexels-photo-8473465.jpeg",
    slug: "jadwal-pemeliharaan-mei",
  },
  {
    title: "Kerjasama dengan Pemerintah Daerah untuk Perluasan Layanan",
    excerpt: "UPTD menjalin kerjasama strategis dengan pemerintah daerah untuk memperluas jangkauan layanan.",
    date: "25 April 2025",
    category: "Program",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    slug: "kerjasama-perluasan-layanan",
  },
  {
    title: "Tips Menghemat Air dan Mengurangi Limbah Domestik",
    excerpt: "Panduan praktis bagi masyarakat untuk menghemat penggunaan air dan mengurangi produksi limbah.",
    date: "20 April 2025",
    category: "Edukasi",
    image: "https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg",
    slug: "tips-hemat-air",
  },
  {
    title: "Inovasi Teknologi dalam Pengolahan Air Limbah",
    excerpt: "UPTD mengadopsi teknologi terbaru untuk meningkatkan efisiensi pengolahan air limbah.",
    date: "15 April 2025",
    category: "Teknologi",
    image: "https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg",
    slug: "inovasi-teknologi",
  },
];

export default function BeritaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredNews = newsData.filter((news) => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || news.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(newsData.map(news => news.category))];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg"
            alt="News background"
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
              Berita & Pengumuman
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              Informasi terbaru seputar layanan dan program pengelolaan air limbah domestik
              di Kabupaten Tanah Bumbu
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Cari berita..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-lg bg-white/90 rounded-full text-gray-800 border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400 w-full"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px] border-cyan-600 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/30 rounded-full h-[50px]">
                  <Filter className="h-5 w-5 mr-2" />
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "Semua Kategori" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          </div>
        </div>
        
        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNews.map((news, index) => (
              <motion.div
                key={news.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <NewsCard {...news} />
              </motion.div>
            ))}
          </motion.div>

          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                Tidak ada berita yang sesuai dengan pencarian Anda.
              </p>
            </motion.div>
          )}

          {filteredNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-600 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/30"
              >
                Muat Lebih Banyak
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}