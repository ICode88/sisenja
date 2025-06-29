"use client";

import { useState } from "react";
import { Search, Filter, Star, ThumbsUp, MessageCircle, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    status: "pending" | "approved" | "rejected";
    orderNumber: string;
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
        verified: true,
        status: "approved",
        orderNumber: "ORD-2025-001"
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
        verified: true,
        status: "approved",
        orderNumber: "ORD-2025-002"
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
        verified: true,
        status: "pending",
        orderNumber: "ORD-2025-003"
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
        verified: false,
        status: "approved",
        orderNumber: "ORD-2025-004"
    },
    {
        id: 5,
        customerName: "Andi Wijaya",
        rating: 2,
        title: "Pelayanan Kurang Memuaskan",
        comment: "Tim datang terlambat dan hasil kerja kurang rapi. Perlu peningkatan dalam hal ketepatan waktu dan kualitas kerja.",
        serviceType: "Konsultasi",
        date: "2025-01-01",
        location: "Batulicin",
        helpful: 3,
        verified: true,
        status: "pending",
        orderNumber: "ORD-2025-005"
    }
];

export default function ReviewsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRating, setFilterRating] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterService, setFilterService] = useState("all");

    const filteredReviews = reviewsData.filter(review => {
        const matchesSearch = review.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.comment.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRating = filterRating === "all" || review.rating.toString() === filterRating;
        const matchesStatus = filterStatus === "all" || review.status === filterStatus;
        const matchesService = filterService === "all" || review.serviceType === filterService;
        return matchesSearch && matchesRating && matchesStatus && matchesService;
    });

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

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "pending":
                return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Menunggu</Badge>;
            case "approved":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Disetujui</Badge>;
            case "rejected":
                return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Ditolak</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length;
    const serviceTypes = [...new Set(reviewsData.map(review => review.serviceType))];

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col gap-4">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <Input
                        placeholder="Cari ulasan..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>

                {/* Filters - Mobile: Stack, Desktop: Row */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <Select value={filterRating} onValueChange={setFilterRating}>
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Rating" />
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

                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Status</SelectItem>
                            <SelectItem value="pending">Menunggu</SelectItem>
                            <SelectItem value="approved">Disetujui</SelectItem>
                            <SelectItem value="rejected">Ditolak</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={filterService} onValueChange={setFilterService}>
                        <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Layanan" />
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

                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                        <Filter size={16} className="mr-2" />
                        <span className="hidden sm:inline">Filter Lanjutan</span>
                        <span className="sm:hidden">Filter</span>
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <Card>
                    <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs md:text-sm text-slate-600">Total</p>
                                <p className="text-lg md:text-2xl font-bold text-slate-900">{reviewsData.length}</p>
                            </div>
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Star className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs md:text-sm text-slate-600">Rating</p>
                                <p className="text-lg md:text-2xl font-bold text-yellow-600">{averageRating.toFixed(1)}</p>
                            </div>
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <Star className="h-4 w-4 md:h-6 md:w-6 text-yellow-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs md:text-sm text-slate-600">Pending</p>
                                <p className="text-lg md:text-2xl font-bold text-orange-600">
                                    {reviewsData.filter(r => r.status === 'pending').length}
                                </p>
                            </div>
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <Calendar className="h-4 w-4 md:h-6 md:w-6 text-orange-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs md:text-sm text-slate-600">Disetujui</p>
                                <p className="text-lg md:text-2xl font-bold text-green-600">
                                    {reviewsData.filter(r => r.status === 'approved').length}
                                </p>
                            </div>
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Reviews List */}
            <div className="space-y-4 md:space-y-6">
                {filteredReviews.map((review) => (
                    <Card key={review.id} className="hover-card-lift">
                        <CardContent className="p-4 md:p-6">
                            <div className="flex items-start gap-3 md:gap-4">
                                <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                                    {review.avatar ? (
                                        <AvatarImage src={review.avatar} />
                                    ) : null}
                                    <AvatarFallback className="bg-cyan-600 text-white text-sm">
                                        {review.customerName.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex-1 min-w-0">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-semibold text-sm md:text-base truncate">{review.customerName}</h3>
                                                {review.verified && (
                                                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                                                        Terverifikasi
                                                    </Badge>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-1 text-xs md:text-sm text-muted-foreground">
                                                <span>{review.location}</span>
                                                <span>•</span>
                                                <span>{new Date(review.date).toLocaleDateString('id-ID')}</span>
                                                <span className="hidden sm:inline">•</span>
                                                <span className="hidden sm:inline">{review.orderNumber}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:items-end gap-2">
                                            <div className="flex items-center gap-2">
                                                {getStatusBadge(review.status)}
                                                <Badge variant="outline" className="text-xs">{review.serviceType}</Badge>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-3">
                                        {renderStars(review.rating, "sm")}
                                        <span className="font-medium text-sm">{review.rating}/5</span>
                                    </div>

                                    {/* Content */}
                                    <h4 className="font-semibold mb-2 text-sm md:text-base">{review.title}</h4>
                                    <p className="text-muted-foreground mb-4 text-sm md:text-base">{review.comment}</p>

                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
                                                <span>Membantu ({review.helpful})</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                                                <span>Balas</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            {review.status === "pending" && (
                                                <>
                                                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs px-2 md:px-3">
                                                        Setujui
                                                    </Button>
                                                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 text-xs px-2 md:px-3">
                                                        Tolak
                                                    </Button>
                                                </>
                                            )}
                                            <Button variant="outline" size="sm" className="text-xs px-2 md:px-3">
                                                Detail
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredReviews.length === 0 && (
                <div className="text-center py-12">
                    <Star className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-500">Tidak ada ulasan yang ditemukan</p>
                </div>
            )}
        </div>
    );
}