"use client";

import { useState } from "react";
import { Search, Filter, Calendar, Download, Eye, Star, ClipboardCheck, DollarSign, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface OrderHistory {
    id: number;
    orderNumber: string;
    customerName: string;
    serviceType: string;
    location: string;
    completedDate: string;
    duration: string;
    totalCost: number;
    rating: number;
    assignedTeam: string;
    notes: string;
}

const historyData: OrderHistory[] = [
    {
        id: 1,
        orderNumber: "ORD-2025-001",
        customerName: "Budi Santoso",
        serviceType: "Penyedotan Rutin",
        location: "Jl. Merdeka No. 123, Batulicin",
        completedDate: "2025-01-14",
        duration: "2 jam 30 menit",
        totalCost: 200000,
        rating: 5,
        assignedTeam: "Tim A",
        notes: "Layanan selesai dengan baik, pelanggan puas"
    },
    {
        id: 2,
        orderNumber: "ORD-2025-002",
        customerName: "Siti Nurhaliza",
        serviceType: "Instalasi Baru",
        location: "Jl. Sudirman No. 45, Tanah Bumbu",
        completedDate: "2025-01-13",
        duration: "4 jam 15 menit",
        totalCost: 500000,
        rating: 4,
        assignedTeam: "Tim B",
        notes: "Instalasi berhasil, sistem berfungsi normal"
    },
    {
        id: 3,
        orderNumber: "ORD-2025-003",
        customerName: "Ahmad Rahman",
        serviceType: "Perbaikan Darurat",
        location: "Jl. Ahmad Yani No. 67, Batulicin",
        completedDate: "2025-01-12",
        duration: "3 jam 45 menit",
        totalCost: 350000,
        rating: 5,
        assignedTeam: "Tim C",
        notes: "Perbaikan darurat berhasil, sistem kembali normal"
    },
    {
        id: 4,
        orderNumber: "ORD-2025-004",
        customerName: "Lisa Permata",
        serviceType: "Pemeliharaan",
        location: "Jl. Diponegoro No. 89, Tanah Bumbu",
        completedDate: "2025-01-11",
        duration: "1 jam 30 menit",
        totalCost: 150000,
        rating: 4,
        assignedTeam: "Tim A",
        notes: "Pemeliharaan rutin selesai, sistem dalam kondisi baik"
    },
    {
        id: 5,
        orderNumber: "ORD-2025-005",
        customerName: "Andi Wijaya",
        serviceType: "Konsultasi",
        location: "Jl. Gatot Subroto No. 12, Batulicin",
        completedDate: "2025-01-10",
        duration: "1 jam",
        totalCost: 100000,
        rating: 5,
        assignedTeam: "Tim Konsultan",
        notes: "Konsultasi teknis selesai, pelanggan mendapat penjelasan lengkap"
    }
];

export default function HistoryPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterService, setFilterService] = useState("all");
    const [filterMonth, setFilterMonth] = useState("all");

    const filteredHistory = historyData.filter(order => {
        const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesService = filterService === "all" || order.serviceType === filterService;
        const matchesMonth = filterMonth === "all" || 
            new Date(order.completedDate).getMonth() === parseInt(filterMonth);

        return matchesSearch && matchesService && matchesMonth;
    });

    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`h-4 w-4 ${
                            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                    />
                ))}
            </div>
        );
    };

    const totalRevenue = filteredHistory.reduce((sum, order) => sum + order.totalCost, 0);
    const averageRating = filteredHistory.reduce((sum, order) => sum + order.rating, 0) / filteredHistory.length;
    const serviceTypes = [...new Set(historyData.map(order => order.serviceType))];

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                        <Input
                            placeholder="Cari riwayat..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full sm:w-64"
                        />
                    </div>

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

                    <Select value={filterMonth} onValueChange={setFilterMonth}>
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Semua Bulan" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Bulan</SelectItem>
                            <SelectItem value="0">Januari</SelectItem>
                            <SelectItem value="1">Februari</SelectItem>
                            <SelectItem value="2">Maret</SelectItem>
                            <SelectItem value="3">April</SelectItem>
                            <SelectItem value="4">Mei</SelectItem>
                            <SelectItem value="5">Juni</SelectItem>
                            <SelectItem value="6">Juli</SelectItem>
                            <SelectItem value="7">Agustus</SelectItem>
                            <SelectItem value="8">September</SelectItem>
                            <SelectItem value="9">Oktober</SelectItem>
                            <SelectItem value="10">November</SelectItem>
                            <SelectItem value="11">Desember</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Download size={16} className="mr-2" />
                        Export
                    </Button>
                    <Button variant="outline" size="sm">
                        <Filter size={16} className="mr-2" />
                        Filter
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total Pesanan</p>
                                <p className="text-2xl font-bold text-slate-900">{filteredHistory.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <ClipboardCheck className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total Pendapatan</p>
                                <p className="text-2xl font-bold text-green-600">
                                    Rp {totalRevenue.toLocaleString()}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                              <DollarSign className="h-6 w-6 text-green-600" />
                              
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Rata-rata Rating</p>
                                <p className="text-2xl font-bold text-yellow-600">
                                    {averageRating ? averageRating.toFixed(1) : '0'}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <Star className="h-6 w-6 text-yellow-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Rata-rata Durasi</p>
                                <p className="text-2xl font-bold text-purple-600">2.5 jam</p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                                               <Clock3 className="h-6 w-6 text-purple-600" />
                               
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* History Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Riwayat Pesanan</CardTitle>
                    <CardDescription>
                        Menampilkan {filteredHistory.length} dari {historyData.length} riwayat pesanan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">No. Pesanan</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Pelanggan</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Layanan</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Tanggal Selesai</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Durasi</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Biaya</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Rating</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Tim</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredHistory.map((order) => (
                                    <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="py-4 px-4 font-medium">{order.orderNumber}</td>
                                        <td className="py-4 px-4">
                                            <div>
                                                <p className="font-medium text-slate-900">{order.customerName}</p>
                                                <p className="text-sm text-slate-500">{order.location}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">{order.serviceType}</td>
                                        <td className="py-4 px-4">
                                            {new Date(order.completedDate).toLocaleDateString('id-ID')}
                                        </td>
                                        <td className="py-4 px-4">{order.duration}</td>
                                        <td className="py-4 px-4">
                                            <p className="font-semibold text-green-600">
                                                Rp {order.totalCost.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                {renderStars(order.rating)}
                                                <span className="text-sm font-medium">{order.rating}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <Badge variant="outline">{order.assignedTeam}</Badge>
                                        </td>
                                        <td className="py-4 px-4">
                                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                                                <Eye size={16} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredHistory.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-slate-500">Tidak ada riwayat pesanan yang ditemukan</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}