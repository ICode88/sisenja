"use client";

import { useState } from "react";
import { Search, Filter, MapPin, Clock, Truck, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TrackingOrder {
    id: number;
    orderNumber: string;
    customerName: string;
    serviceType: string;
    location: string;
    status: "pending" | "assigned" | "on_route" | "in_progress" | "completed" | "cancelled";
    assignedTeam: string;
    estimatedArrival: string;
    progress: number;
    lastUpdate: string;
    notes: string;
}

const trackingData: TrackingOrder[] = [
    {
        id: 1,
        orderNumber: "ORD-2025-001",
        customerName: "Budi Santoso",
        serviceType: "Penyedotan Rutin",
        location: "Jl. Merdeka No. 123, Batulicin",
        status: "on_route",
        assignedTeam: "Tim A - Truck 01",
        estimatedArrival: "2025-01-15 14:30",
        progress: 60,
        lastUpdate: "2025-01-15 13:45",
        notes: "Tim sedang dalam perjalanan menuju lokasi"
    },
    {
        id: 2,
        orderNumber: "ORD-2025-002",
        customerName: "Siti Nurhaliza",
        serviceType: "Instalasi Baru",
        location: "Jl. Sudirman No. 45, Tanah Bumbu",
        status: "in_progress",
        assignedTeam: "Tim B - Truck 02",
        estimatedArrival: "2025-01-15 10:00",
        progress: 80,
        lastUpdate: "2025-01-15 13:30",
        notes: "Instalasi sedang berlangsung, estimasi selesai 2 jam lagi"
    },
    {
        id: 3,
        orderNumber: "ORD-2025-003",
        customerName: "Ahmad Rahman",
        serviceType: "Perbaikan Darurat",
        location: "Jl. Ahmad Yani No. 67, Batulicin",
        status: "completed",
        assignedTeam: "Tim C - Truck 03",
        estimatedArrival: "2025-01-15 08:00",
        progress: 100,
        lastUpdate: "2025-01-15 12:00",
        notes: "Perbaikan selesai, sistem berfungsi normal"
    },
    {
        id: 4,
        orderNumber: "ORD-2025-004",
        customerName: "Lisa Permata",
        serviceType: "Pemeliharaan",
        location: "Jl. Diponegoro No. 89, Tanah Bumbu",
        status: "assigned",
        assignedTeam: "Tim A - Truck 01",
        estimatedArrival: "2025-01-15 16:00",
        progress: 25,
        lastUpdate: "2025-01-15 13:00",
        notes: "Tim telah ditugaskan, persiapan peralatan"
    },
    {
        id: 5,
        orderNumber: "ORD-2025-005",
        customerName: "Andi Wijaya",
        serviceType: "Konsultasi",
        location: "Jl. Gatot Subroto No. 12, Batulicin",
        status: "pending",
        assignedTeam: "-",
        estimatedArrival: "-",
        progress: 0,
        lastUpdate: "2025-01-15 12:30",
        notes: "Menunggu konfirmasi jadwal dari pelanggan"
    }
];

export default function TrackingPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    const filteredOrders = trackingData.filter(order => {
        const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || order.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "pending":
                return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Menunggu</Badge>;
            case "assigned":
                return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Ditugaskan</Badge>;
            case "on_route":
                return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Dalam Perjalanan</Badge>;
            case "in_progress":
                return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Sedang Proses</Badge>;
            case "completed":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Selesai</Badge>;
            case "cancelled":
                return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Dibatalkan</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "pending":
                return <Clock className="h-4 w-4" />;
            case "assigned":
                return <Truck className="h-4 w-4" />;
            case "on_route":
                return <MapPin className="h-4 w-4" />;
            case "in_progress":
                return <AlertCircle className="h-4 w-4" />;
            case "completed":
                return <CheckCircle className="h-4 w-4" />;
            case "cancelled":
                return <AlertCircle className="h-4 w-4" />;
            default:
                return <Clock className="h-4 w-4" />;
        }
    };

    const getProgressColor = (progress: number) => {
        if (progress === 0) return "bg-gray-300";
        if (progress < 50) return "bg-yellow-500";
        if (progress < 100) return "bg-blue-500";
        return "bg-green-500";
    };

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                        <Input
                            placeholder="Cari pesanan..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full sm:w-64"
                        />
                    </div>

                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                        <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Semua Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Status</SelectItem>
                            <SelectItem value="pending">Menunggu</SelectItem>
                            <SelectItem value="assigned">Ditugaskan</SelectItem>
                            <SelectItem value="on_route">Dalam Perjalanan</SelectItem>
                            <SelectItem value="in_progress">Sedang Proses</SelectItem>
                            <SelectItem value="completed">Selesai</SelectItem>
                            <SelectItem value="cancelled">Dibatalkan</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button variant="outline" size="sm">
                    <Filter size={16} className="mr-2" />
                    Filter Lanjutan
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total Tracking</p>
                                <p className="text-2xl font-bold text-slate-900">{trackingData.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Truck className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Dalam Perjalanan</p>
                                <p className="text-2xl font-bold text-yellow-600">
                                    {trackingData.filter(o => o.status === 'on_route').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <MapPin className="h-6 w-6 text-yellow-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Sedang Proses</p>
                                <p className="text-2xl font-bold text-orange-600">
                                    {trackingData.filter(o => o.status === 'in_progress').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <AlertCircle className="h-6 w-6 text-orange-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Selesai Hari Ini</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {trackingData.filter(o => o.status === 'completed').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Menunggu</p>
                                <p className="text-2xl font-bold text-gray-600">
                                    {trackingData.filter(o => o.status === 'pending').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Clock className="h-6 w-6 text-gray-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Tracking Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredOrders.map((order) => (
                    <Card key={order.id} className="hover-card-lift">
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle className="text-lg">{order.orderNumber}</CardTitle>
                                    <CardDescription>{order.customerName}</CardDescription>
                                </div>
                                <div className="flex items-center gap-2">
                                    {getStatusIcon(order.status)}
                                    {getStatusBadge(order.status)}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <Truck className="h-4 w-4 text-slate-400" />
                                    <span>{order.serviceType}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-slate-400" />
                                    <span>{order.location}</span>
                                </div>
                                {order.assignedTeam !== "-" && (
                                    <div className="flex items-center gap-2 text-sm">
                                        <Badge variant="outline">{order.assignedTeam}</Badge>
                                    </div>
                                )}
                            </div>

                            {/* Progress Bar */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Progress</span>
                                    <span>{order.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(order.progress)}`}
                                        style={{ width: `${order.progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Timeline Info */}
                            <div className="space-y-2 text-sm">
                                {order.estimatedArrival !== "-" && (
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Estimasi Tiba:</span>
                                        <span className="font-medium">
                                            {new Date(order.estimatedArrival).toLocaleString('id-ID')}
                                        </span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Update Terakhir:</span>
                                    <span className="font-medium">
                                        {new Date(order.lastUpdate).toLocaleString('id-ID')}
                                    </span>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="p-3 bg-slate-50 rounded-lg">
                                <p className="text-sm text-slate-700">{order.notes}</p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                    Detail
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1">
                                    Hubungi Tim
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredOrders.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-slate-500">Tidak ada pesanan yang ditemukan</p>
                </div>
            )}
        </div>
    );
}