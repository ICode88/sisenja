"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Search, Filter, ThumbsUp, MessageCircle, Calendar, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Img } from "@/components/ui/img";

interface Review {
  id: number;
  customerName: string;
  avatar?: string;
  rating: number;
  title: string;
  comment: string;
  serviceType: string;
  date: string;
  location: string;
  helpful: number;
  verified: boolean;
}

const reviewsData: Review[] = [
  {
    id: 1,
    customerName: "Budi Santoso",
    rating: 5,
    title: "Pelayanan Sangat Memuaskan",
    comment: "Tim SISENJA sangat profesional dan tepat waktu. Proses penyedotan berjalan lancar dan bersih. Sangat puas dengan layanannya!",
    serviceType: "Penyedotan Rutin",
    date: "2025-01-10",
    location: "Batulicin",
    helpful: 12,
    verified: true
  },
  {
    id: 2,
    customerName: "Siti Nurhaliza",
    rating: 4,
    title: "Layanan Bagus, Harga Terjangkau",
    comment: "Pelayanan cukup baik dan harga sesuai dengan kualitas. Tim datang tepat waktu dan bekerja dengan rapi.",
    serviceType: "Instalasi Baru",
    date: "2025-01-08",
    location: "Tanah Bumbu",
    helpful: 8,
    verified: true
  },
  {
    id: 3,
    customerName: "Ahmad Rahman",
    rating: 5,
    title: "Respons Cepat untuk Layanan Darurat",
    comment: "Ketika ada masalah darurat, tim SISENJA langsung merespons dan menangani dengan baik. Terima kasih atas pelayanan yang cepat!",
    serviceType: "Perbaikan Darurat",
    date: "2025-01-05",
    location: "Batulicin",
    helpful: 15,
    verified: true
  },
  {
    id: 4,
    customerName: "Lisa Permata",
    rating: 4,
    title: "Pemeliharaan Rutin yang Baik",
    comment: "Tim melakukan pemeliharaan dengan teliti dan memberikan laporan yang detail. Sistem berjalan lancar setelah pemeliharaan.",
    serviceType: "Pemeliharaan",
    date: "2025-01-03",
    location: "Tanah Bumbu",
    helpful: 6,
    verified: false
  },
  {
    id: 5,
    customerName: "Andi Wijaya",
    rating: 5,
    title: "Konsultasi Teknis yang Membantu",
    comment: "Mendapat penjelasan yang sangat detail tentang sistem pengolahan air limbah. Tim sangat sabar dalam memberikan konsultasi.",
    serviceType: "Konsultasi",
    date: "2025-01-01",
    location: "Batulicin",
    helpful: 9,
    verified: true
  }
];

const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length;
const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
  rating,
  count: reviewsData.filter(review => review.rating === rating).length,
  percentage: (reviewsData.filter(review => review.rating === rating).length / reviewsData.length) * 100
}));

// Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScL2vU0ayz6eTtFvcKQ7TBtZutiVkEfPOdlP9y8Rpli9DV1Mg/viewform?usp=header";

export default function ReviewPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRating, setFilterRating] = useState("all");
  const [filterService, setFilterService] = useState("all");

  const filteredReviews = reviewsData.filter(review => {
    const matchesSearch = review.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = filterRating === "all" || review.rating.toString() === filterRating;
    const matchesService = filterService === "all" || review.serviceType === filterService;
    return matchesSearch && matchesRating && matchesService;
  });

  const serviceTypes = [...new Set(reviewsData.map(review => review.serviceType))];

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const sizeClasses = {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5"
    };

    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
          />
        ))}
      </div>
    );
  };

  const handleWriteReview = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg"
            alt="Review background"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Review & Rating
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-blue-100 mb-10 px-4"
            >
              Lihat pengalaman pelanggan kami dan berikan ulasan Anda tentang layanan SISENJA
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto px-4"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 sm:h-5 sm:w-5" />
                <Input
                  type="search"
                  placeholder="Cari review..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:pl-10 py-4 sm:py-6 text-base sm:text-lg bg-white/90 rounded-full text-gray-800 border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400 w-full"
                />
              </div>
              <Button
                onClick={handleWriteReview}
                size="lg"
                className="bg-white text-cyan-700 hover:bg-blue-50 rounded-full px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-center gap-2 text-base sm:text-lg whitespace-nowrap"
              >
                <span>Tulis Review</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>
      <Img color="fill-white dark:fill-background" height={30} />

      {/* Rating Overview */}
      <section className="py-12 sm:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12"
            >
              {/* Overall Rating */}
              <Card className="lg:col-span-1">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl sm:text-6xl font-bold text-cyan-600 mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {renderStars(Math.round(averageRating), "lg")}
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                    Berdasarkan {reviewsData.length} ulasan
                  </p>
                  <div className="flex items-center justify-center">


                  <Button
                    onClick={handleWriteReview}
                    className="bg-cyan-600 hover:bg-cyan-700 flex items-center gap-2 w-full sm:w-auto"
                  >
                    <span>Tulis Review</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Rating Distribution */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl">Distribusi Rating</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {ratingDistribution.map(({ rating, count, percentage }) => (
                      <div key={rating} className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-1 w-14 sm:w-16 flex-shrink-0">
                          <span className="text-sm font-medium">{rating}</span>
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-0">
                          <div
                            className="bg-cyan-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8 sm:w-12 text-right flex-shrink-0">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Call-to-Action untuk Review */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white text-center mb-8 sm:mb-12"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Bagikan Pengalaman Anda!</h3>
              <p className="text-cyan-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Pendapat Anda sangat berharga bagi kami. Bantu pelanggan lain dengan membagikan pengalaman Anda menggunakan layanan SISENJA.
              </p>
              <div className="flex items-center justify-center">

              <Button
                onClick={handleWriteReview}
                size="lg"
                className="bg-white text-cyan-700 hover:bg-blue-50 rounded-full px-6 sm:px-8 flex items-center gap-2 mx-auto text-sm sm:text-base"
              >
                <span>Isi Survey & Review</span>
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2 flex-shrink-0" />
                  <SelectValue placeholder="Semua Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Rating</SelectItem>
                  <SelectItem value="5">5 Bintang</SelectItem>
                  <SelectItem value="4">4 Bintang</SelectItem>
                  <SelectItem value="3">3 Bintang</SelectItem>
                  <SelectItem value="2">2 Bintang</SelectItem>
                  <SelectItem value="1">1 Bintang</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterService} onValueChange={setFilterService}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Semua Layanan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Layanan</SelectItem>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Reviews List */}
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
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {filteredReviews.map((review) => (
                <motion.div
                  key={review.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <Card className="hover-card-lift overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Avatar and Basic Info */}
                        <div className="flex items-start gap-3 sm:gap-4">
                          <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                            {review.avatar ? (
                              <AvatarImage src={review.avatar} />
                            ) : null}
                            <AvatarFallback className="bg-cyan-600 text-white text-sm">
                              {review.customerName.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1 min-w-0">
                            {/* Header Info */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <h3 className="font-semibold text-sm sm:text-base truncate">{review.customerName}</h3>
                                  {review.verified && (
                                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                                      Terverifikasi
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
                                  <span className="truncate">{review.location}</span>
                                  <span className="hidden sm:inline">•</span>
                                  <span className="truncate">{new Date(review.date).toLocaleDateString('id-ID')}</span>
                                </div>
                              </div>
                              <Badge variant="outline" className="text-xs flex-shrink-0 sm:ml-2">
                                {review.serviceType}
                              </Badge>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-3">
                              {renderStars(review.rating)}
                              <span className="font-medium text-sm">{review.rating}/5</span>
                            </div>

                            {/* Review Content */}
                            <h4 className="font-semibold mb-2 text-sm sm:text-base break-words">{review.title}</h4>
                            <p className="text-muted-foreground mb-4 text-sm sm:text-base break-words leading-relaxed">
                              {review.comment}
                            </p>

                            {/* Actions */}
                            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                              <button className="flex items-center gap-1 hover:text-cyan-600 transition-colors">
                                <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                <span className="whitespace-nowrap">Membantu ({review.helpful})</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-cyan-600 transition-colors">
                                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                <span>Balas</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredReviews.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12 sm:py-20"
              >
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Tidak ada review yang sesuai dengan filter Anda.
                </p>
              </motion.div>
            )}

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Sudah menggunakan layanan SISENJA?</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Ceritakan pengalaman Anda dan bantu pelanggan lain membuat keputusan yang tepat.
              </p>
              <div className="flex items-center justify-center">


              <Button
                onClick={handleWriteReview}
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 flex items-center gap-2 mx-auto text-sm sm:text-base"
              >
                <span>Tulis Review Sekarang</span>
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}