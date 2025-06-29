"use client";

import { useState } from "react";
import { Search, Plus, Filter, Eye, Edit, DollarSign, TrendingUp, Calculator, ClipboardList, ClipboardCheck } from "lucide-react";
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

interface PricingItem {
    id: number;
    serviceName: string;
    zone: string;
    basePrice: number;
    category: string;
    description: string;
    lastUpdated: string;
    status: "active" | "inactive";
}

const pricingData: PricingItem[] = [
    {
        id: 1,
        serviceName: "Penyedotan Rutin - Rumah Tangga",
        zone: "Zona I (0-30 km)",
        basePrice: 200000,
        category: "Rumah Tangga",
        description: "Layanan penyedotan rutin untuk rumah tinggal zona I",
        lastUpdated: "2025-01-01",
        status: "active"
    },
    {
        id: 2,
        serviceName: "Penyedotan Rutin - Komersil",
        zone: "Zona I (0-30 km)",
        basePrice: 350000,
        category: "Komersil",
        description: "Layanan penyedotan untuk perusahaan/BUMN/industri zona I",
        lastUpdated: "2025-01-01",
        status: "active"
    },
    {
        id: 3,
        serviceName: "Instalasi Baru - Rumah Tangga",
        zone: "Zona II (31-60 km)",
        basePrice: 250000,
        category: "Rumah Tangga",
        description: "Instalasi sistem baru untuk rumah tinggal zona II",
        lastUpdated: "2025-01-01",
        status: "active"
    },
    {
        id: 4,
        serviceName: "Perbaikan Darurat",
        zone: "Zona I (0-30 km)",
        basePrice: 500000,
        category: "Darurat",
        description: "Layanan perbaikan darurat untuk semua jenis lokasi",
        lastUpdated: "2025-01-01",
        status: "active"
    },
    {
        id: 5,
        serviceName: "Pemeliharaan Rutin",
        zone: "Zona III (61-100 km)",
        basePrice: 300000,
        category: "Pemeliharaan",
        description: "Pemeliharaan rutin sistem pengolahan zona III",
        lastUpdated: "2024-12-15",
        status: "inactive"
    }
];

export default function PricingPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterZone, setFilterZone] = useState("all");
    const [filterCategory, setFilterCategory] = useState("all");

    const filteredPricing = pricingData.filter(item => {
        const matchesSearch = item.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesZone = filterZone === "all" || item.zone.includes(filterZone);
        const matchesCategory = filterCategory === "all" || item.category === filterCategory;

        return matchesSearch && matchesZone && matchesCategory;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "active":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Aktif</Badge>;
            case "inactive":
                return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Tidak Aktif</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const totalRevenue = pricingData.reduce((sum, item) => sum + item.basePrice, 0);
    const activeServices = pricingData.filter(item => item.status === "active").length;

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                        <Input
                            placeholder="Cari layanan..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full sm:w-64"
                        />
                    </div>

                    <Select value={filterZone} onValueChange={setFilterZone}>
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Semua Zona" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Zona</SelectItem>
                            <SelectItem value="I">Zona I</SelectItem>
                            <SelectItem value="II">Zona II</SelectItem>
                            <SelectItem value="III">Zona III</SelectItem>
                            <SelectItem value="IV">Zona IV</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Semua Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Kategori</SelectItem>
                            <SelectItem value="Rumah Tangga">Rumah Tangga</SelectItem>
                            <SelectItem value="Komersil">Komersil</SelectItem>
                            <SelectItem value="Darurat">Darurat</SelectItem>
                            <SelectItem value="Pemeliharaan">Pemeliharaan</SelectItem>
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
                        Tambah Tarif
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total Layanan</p>
                                <p className="text-2xl font-bold text-slate-900">{pricingData.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <ClipboardList className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Layanan Aktif</p>
                                <p className="text-2xl font-bold text-green-600">{activeServices}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <ClipboardCheck className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Rata-rata Tarif</p>
                                <p className="text-2xl font-bold text-purple-600">
                                    Rp {Math.round(totalRevenue / pricingData.length).toLocaleString()}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Calculator className="h-6 w-6 text-purple-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total Estimasi</p>
                                <p className="text-2xl font-bold text-orange-600">
                                    Rp {totalRevenue.toLocaleString()}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="h-6 w-6 text-orange-600" />

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Pricing Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Daftar Tarif Layanan</CardTitle>
                    <CardDescription>
                        Menampilkan {filteredPricing.length} dari {pricingData.length} tarif layanan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">ID</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Nama Layanan</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Zona</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Kategori</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Tarif Dasar</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Update Terakhir</th>
                                    <th className="text-left py-3 px-4 font-medium text-slate-600">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPricing.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="py-4 px-4 font-medium">#{item.id}</td>
                                        <td className="py-4 px-4">
                                            <div>
                                                <p className="font-medium text-slate-900">{item.serviceName}</p>
                                                <p className="text-sm text-slate-500">{item.description}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <Badge variant="outline">{item.zone}</Badge>
                                        </td>
                                        <td className="py-4 px-4">{item.category}</td>
                                        <td className="py-4 px-4">
                                            <p className="font-semibold text-green-600">
                                                Rp {item.basePrice.toLocaleString()}
                                            </p>
                                            <p className="text-xs text-slate-500">per m³</p>
                                        </td>
                                        <td className="py-4 px-4">
                                            {getStatusBadge(item.status)}
                                        </td>
                                        <td className="py-4 px-4 text-sm text-slate-600">
                                            {new Date(item.lastUpdated).toLocaleDateString('id-ID')}
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

                    {filteredPricing.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-slate-500">Tidak ada tarif yang ditemukan</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}