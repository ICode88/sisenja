"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Search, Filter, ThumbsUp, MessageCircle, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

export default function ReviewPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRating, setFilterRating] = useState("all");
  const [filterService, setFilterService] = useState("all");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    serviceType: "",
    rating: 0,
    title: "",
    comment: ""
  });

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
            className={`${sizeClasses[size]} ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission here
    console.log("New review:", newReview);
    setShowReviewForm(false);
    setNewReview({ name: "", serviceType: "", rating: 0, title: "", comment: "" });
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Review & Rating
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              Lihat pengalaman pelanggan kami dan berikan ulasan Anda tentang layanan SISENJA
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
                  placeholder="Cari review..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-lg bg-white/90 rounded-full text-gray-800 border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400 w-full"
                />
              </div>
              <Button
                onClick={() => setShowReviewForm(true)}
                size="lg"
                className="bg-white text-cyan-700 hover:bg-blue-50 rounded-full px-8"
              >
                Tulis Review
              </Button>
            </motion.div>
          </div>
        </div>

        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>

      {/* Rating Overview */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
            >
              {/* Overall Rating */}
              <Card className="lg:col-span-1">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-cyan-600 mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {renderStars(Math.round(averageRating), "lg")}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Berdasarkan {reviewsData.length} ulasan
                  </p>
                  <Button
                    onClick={() => setShowReviewForm(true)}
                    className="bg-cyan-600 hover:bg-cyan-700"
                  >
                    Tulis Review
                  </Button>
                </CardContent>
              </Card>

              {/* Rating Distribution */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Distribusi Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {ratingDistribution.map(({ rating, count, percentage }) => (
                      <div key={rating} className="flex items-center gap-4">
                        <div className="flex items-center gap-1 w-16">
                          <span className="text-sm font-medium">{rating}</span>
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-cyan-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-12">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 mb-8"
            >
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
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
                <SelectTrigger className="w-full md:w-48">
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
              className="space-y-6"
            >
              {filteredReviews.map((review) => (
                <motion.div
                  key={review.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <Card className="hover-card-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          {review.avatar ? (
                            <AvatarImage src={review.avatar} />
                          ) : null}
                          <AvatarFallback className="bg-cyan-600 text-white">
                            {review.customerName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{review.customerName}</h3>
                                {review.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    Terverifikasi
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{review.location}</span>
                                <span>•</span>
                                <span>{new Date(review.date).toLocaleDateString('id-ID')}</span>
                              </div>
                            </div>
                            <Badge variant="outline">{review.serviceType}</Badge>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            {renderStars(review.rating)}
                            <span className="font-medium">{review.rating}/5</span>
                          </div>

                          <h4 className="font-semibold mb-2">{review.title}</h4>
                          <p className="text-muted-foreground mb-4">{review.comment}</p>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <button className="flex items-center gap-1 hover:text-cyan-600 transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                              <span>Membantu ({review.helpful})</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-cyan-600 transition-colors">
                              <MessageCircle className="h-4 w-4" />
                              <span>Balas</span>
                            </button>
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
                className="text-center py-20"
              >
                <p className="text-xl text-muted-foreground">
                  Tidak ada review yang sesuai dengan filter Anda.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-card rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Tulis Review</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowReviewForm(false)}
              >
                ✕
              </Button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="serviceType">Jenis Layanan</Label>
                  <Select
                    value={newReview.serviceType}
                    onValueChange={(value) => setNewReview({ ...newReview, serviceType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih layanan" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Rating</Label>
                <div className="flex items-center gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="p-1"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= newReview.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {newReview.rating > 0 && `${newReview.rating}/5`}
                  </span>
                </div>
              </div>

              <div>
                <Label htmlFor="title">Judul Review</Label>
                <Input
                  id="title"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  placeholder="Ringkasan pengalaman Anda"
                  required
                />
              </div>

              <div>
                <Label htmlFor="comment">Komentar</Label>
                <Textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Ceritakan pengalaman Anda dengan layanan SISENJA..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowReviewForm(false)}
                  className="flex-1"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700"
                >
                  Kirim Review
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}