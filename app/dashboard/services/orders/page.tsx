"use client";

import { useState } from "react";
import { Search, Plus, Filter, Eye, Edit, Truck, MapPin, Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ServiceOrder {
    id: number;
    customerName: string;
    serviceType: string;
    location: string;
    status: "scheduled" | "in_progress" | "completed" | "cancelled";
    scheduledDate: string;
    assignedTeam: string;
    estimatedDuration: string;
    totalCost: number;
}

const ordersData: ServiceOrder[] = [
    {
        id: 1,
        customerName: "Budi Santoso",
        serviceType: "Penyedotan Rutin",
        location: "Jl. Merdeka No. 123, Batulicin",
        status: "scheduled",
        scheduledDate: "2025-01-16",
        assignedTeam: "Tim A",
        estimatedDuration: "2 jam",
        totalCost: 200000
    },
    {
        id: 2,
        customerName: "Siti Nurhaliza",
        serviceType: "Instalasi Baru",
        location: "Jl. Sudirman No. 45, Tanah Bumbu",
        status: "in_progress",
        scheduledDate: "2025-01-15",
        assignedTeam: "Tim B",
        estimatedDuration: "4 jam",
        totalCost: 500000
    },
    {
        id: 3,
        customerName: "Ahmad Rahman",
        serviceType: "Perbaikan Darurat",
        location: "Jl. Ahmad Yani No. 67, Batulicin",
        status: "completed",
        scheduledDate: "2025-01-14",
        assignedTeam: "Tim C",
        estimatedDuration: "3 jam",
        totalCost: 350000
    }
];

export default function ServiceOrdersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    const filteredOrders = ordersData.filter(order => {
        const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || order.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "scheduled":
                return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Terjadwal</Badge>;
            case "in_progress":
                return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Sedang Proses</Badge>;
            case "completed":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Selesai</Badge>;
            case "cancelled":
                return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Dibatalkan</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
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
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Semua Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Status</SelectItem>
                            <SelectItem value="scheduled">Terjadwal</SelectItem>
                            <SelectItem value="in_progress">Sedang Proses</SelectItem>
                            <SelectItem value="completed">Selesai</SelectItem>
                            <SelectItem value="cancelled">Dibatalkan</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Filter size={16} className="mr-2" />
                        Filter
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                        <Plus size={16} className="mr-2" />
                        Tambah Pesanan
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
                                <p className="text-2xl font-bold text-slate-900">{ordersData.length}</p>
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
                                <p className="text-sm text-slate-600">Terjadwal</p>
                                <p className="text-2xl font-bold text-blue-600">
                                    {ordersData.filter(o => o.status === 'scheduled').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Calendar className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Sedang Proses</p>
                                <p className="text-2xl font-bold text-yellow-600">
                                    {ordersData.filter(o => o.status === 'in_progress').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <Clock className="h-6 w-6 text-yellow-600" />

                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Selesai</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {ordersData.filter(o => o.status === 'completed').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-green-600" />

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Orders Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Daftar Pesanan Layanan</CardTitle>
                    <CardDescription>
                        Menampilkan {filteredOrders.length} dari {ordersData.length} pesanan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">ID</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Pelanggan</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Layanan</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Lokasi</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Tim</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Jadwal</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Biaya</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order) => (
                                    <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="py-4 px-4 font-medium">#{order.id}</td>
                                        <td className="py-4 px-4">
                                            <p className="font-medium text-slate-900">{order.customerName}</p>
                                        </td>
                                        <td className="py-4 px-4">{order.serviceType}</td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4 text-slate-400" />
                                                <p className="text-sm text-slate-600">{order.location}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            {getStatusBadge(order.status)}
                                        </td>
                                        <td className="py-4 px-4">
                                            <Badge variant="outline">{order.assignedTeam}</Badge>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div>
                                                <p className="text-sm font-medium">
                                                    {new Date(order.scheduledDate).toLocaleDateString('id-ID')}
                                                </p>
                                                <p className="text-xs text-slate-500">{order.estimatedDuration}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <p className="font-medium">Rp {order.totalCost.toLocaleString()}</p>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                                                    <Eye size={16} />
                                                </Button>
                                                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                                                    <Edit size={16} />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredOrders.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-slate-500">Tidak ada pesanan yang ditemukan</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}