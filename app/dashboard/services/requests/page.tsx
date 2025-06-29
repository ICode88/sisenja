"use client";

import { useState } from "react";
import { Search, Plus, Filter, Eye, Edit, CheckCircle, XCircle, Clock, Settings, Check, Clipboard } from "lucide-react";
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

interface ServiceRequest {
    id: number;
    customerName: string;
    serviceType: string;
    location: string;
    status: "pending" | "approved" | "rejected" | "in_progress" | "completed";
    requestDate: string;
    priority: "low" | "medium" | "high";
    description: string;
}

const requestsData: ServiceRequest[] = [
    {
        id: 1,
        customerName: "Budi Santoso",
        serviceType: "Penyedotan Rutin",
        location: "Jl. Merdeka No. 123, Batulicin",
        status: "pending",
        requestDate: "2025-01-15",
        priority: "high",
        description: "Permintaan penyedotan rutin untuk rumah tinggal"
    },
    {
        id: 2,
        customerName: "Siti Nurhaliza",
        serviceType: "Instalasi Baru",
        location: "Jl. Sudirman No. 45, Tanah Bumbu",
        status: "approved",
        requestDate: "2025-01-14",
        priority: "medium",
        description: "Instalasi sistem pengolahan air limbah baru"
    },
    {
        id: 3,
        customerName: "Ahmad Rahman",
        serviceType: "Perbaikan Darurat",
        location: "Jl. Ahmad Yani No. 67, Batulicin",
        status: "in_progress",
        requestDate: "2025-01-13",
        priority: "high",
        description: "Perbaikan sistem yang mengalami kerusakan"
    },
    {
        id: 4,
        customerName: "Lisa Permata",
        serviceType: "Pemeliharaan",
        location: "Jl. Diponegoro No. 89, Tanah Bumbu",
        status: "completed",
        requestDate: "2025-01-12",
        priority: "low",
        description: "Pemeliharaan rutin sistem pengolahan"
    },
    {
        id: 5,
        customerName: "Andi Wijaya",
        serviceType: "Konsultasi",
        location: "Jl. Gatot Subroto No. 12, Batulicin",
        status: "rejected",
        requestDate: "2025-01-11",
        priority: "medium",
        description: "Konsultasi teknis untuk upgrade sistem"
    }
];

export default function ServiceRequestsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterPriority, setFilterPriority] = useState("all");

    const filteredRequests = requestsData.filter(request => {
        const matchesSearch = request.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || request.status === filterStatus;
        const matchesPriority = filterPriority === "all" || request.priority === filterPriority;

        return matchesSearch && matchesStatus && matchesPriority;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "pending":
                return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Menunggu</Badge>;
            case "approved":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Disetujui</Badge>;
            case "rejected":
                return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Ditolak</Badge>;
            case "in_progress":
                return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Sedang Proses</Badge>;
            case "completed":
                return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Selesai</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case "high":
                return <Badge variant="destructive">Tinggi</Badge>;
            case "medium":
                return <Badge className="bg-yellow-500 hover:bg-yellow-600">Sedang</Badge>;
            case "low":
                return <Badge className="bg-green-500 hover:bg-green-600">Rendah</Badge>;
            default:
                return <Badge variant="outline">{priority}</Badge>;
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "pending":
                return <Clock className="h-4 w-4" />;
            case "approved":
                return <CheckCircle className="h-4 w-4" />;
            case "rejected":
                return <XCircle className="h-4 w-4" />;
            case "in_progress":
                return <Clock className="h-4 w-4" />;
            case "completed":
                return <CheckCircle className="h-4 w-4" />;
            default:
                return <Clock className="h-4 w-4" />;
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
                            placeholder="Cari permohonan..."
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
                            <SelectItem value="pending">Menunggu</SelectItem>
                            <SelectItem value="approved">Disetujui</SelectItem>
                            <SelectItem value="rejected">Ditolak</SelectItem>
                            <SelectItem value="in_progress">Sedang Proses</SelectItem>
                            <SelectItem value="completed">Selesai</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={filterPriority} onValueChange={setFilterPriority}>
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Semua Prioritas" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Prioritas</SelectItem>
                            <SelectItem value="high">Tinggi</SelectItem>
                            <SelectItem value="medium">Sedang</SelectItem>
                            <SelectItem value="low">Rendah</SelectItem>
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
                        Tambah Permohonan
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total</p>
                                <p className="text-2xl font-bold text-slate-900">{requestsData.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Clipboard className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Menunggu</p>
                                <p className="text-2xl font-bold text-yellow-600">
                                    {requestsData.filter(r => r.status === 'pending').length}
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
                                <p className="text-sm text-slate-600">Disetujui</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {requestsData.filter(r => r.status === 'approved').length}
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
                                <p className="text-sm text-slate-600">Sedang Proses</p>
                                <p className="text-2xl font-bold text-yellow-600">
                                    {requestsData.filter(r => r.status === 'in_progress').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <Settings className="h-6 w-6 text-yellow-600" />
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
                                    {requestsData.filter(r => r.status === 'completed').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <Check className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Requests Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Daftar Permohonan Layanan</CardTitle>
                    <CardDescription>
                        Menampilkan {filteredRequests.length} dari {requestsData.length} permohonan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">ID</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Pelanggan</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Jenis Layanan</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Lokasi</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Prioritas</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Tanggal</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRequests.map((request) => (
                                    <tr key={request.id} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="py-4 px-4 font-medium">#{request.id}</td>
                                        <td className="py-4 px-4">
                                            <div>
                                                <p className="font-medium text-slate-900">{request.customerName}</p>
                                                <p className="text-sm text-slate-500">{request.description}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">{request.serviceType}</td>
                                        <td className="py-4 px-4">
                                            <p className="text-sm text-slate-600">{request.location}</p>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                {getStatusIcon(request.status)}
                                                {getStatusBadge(request.status)}
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            {getPriorityBadge(request.priority)}
                                        </td>
                                        <td className="py-4 px-4 text-sm text-slate-600">
                                            {new Date(request.requestDate).toLocaleDateString('id-ID')}
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

                    {filteredRequests.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-slate-500">Tidak ada permohonan yang ditemukan</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}