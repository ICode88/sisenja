"use client";

import { useState } from "react";
import { Search, Filter, Plus, MapPin, Calendar, Camera, FileText, Download, CheckCircle, ClipboardEdit, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface FieldReport {
    id: number;
    reportNumber: string;
    title: string;
    location: string;
    reporterName: string;
    team: string;
    reportDate: string;
    status: "draft" | "submitted" | "reviewed" | "approved";
    priority: "low" | "medium" | "high" | "urgent";
    category: "maintenance" | "installation" | "repair" | "inspection" | "emergency";
    description: string;
    findings: string;
    recommendations: string;
    attachments: number;
}

const reportsData: FieldReport[] = [
    {
        id: 1,
        reportNumber: "RPT-2025-001",
        title: "Laporan Penyedotan Rutin - Batulicin",
        location: "Jl. Merdeka No. 123, Batulicin",
        reporterName: "Ahmad Teknisi",
        team: "Tim A",
        reportDate: "2025-01-15",
        status: "submitted",
        priority: "medium",
        category: "maintenance",
        description: "Pelaksanaan penyedotan rutin untuk rumah tinggal",
        findings: "Sistem berfungsi normal, volume limbah sesuai estimasi",
        recommendations: "Jadwal pemeliharaan berikutnya dalam 6 bulan",
        attachments: 3
    },
    {
        id: 2,
        reportNumber: "RPT-2025-002",
        title: "Laporan Instalasi Baru - Tanah Bumbu",
        location: "Jl. Sudirman No. 45, Tanah Bumbu",
        reporterName: "Budi Installer",
        team: "Tim B",
        reportDate: "2025-01-14",
        status: "approved",
        priority: "high",
        category: "installation",
        description: "Instalasi sistem pengolahan air limbah baru",
        findings: "Instalasi berhasil, sistem telah diuji dan berfungsi dengan baik",
        recommendations: "Monitoring rutin selama 3 bulan pertama",
        attachments: 5
    },
    {
        id: 3,
        reportNumber: "RPT-2025-003",
        title: "Laporan Perbaikan Darurat - Batulicin",
        location: "Jl. Ahmad Yani No. 67, Batulicin",
        reporterName: "Siti Teknisi",
        team: "Tim C",
        reportDate: "2025-01-13",
        status: "reviewed",
        priority: "urgent",
        category: "emergency",
        description: "Perbaikan darurat sistem yang mengalami kerusakan",
        findings: "Ditemukan kerusakan pada pompa utama, telah diganti",
        recommendations: "Pemeriksaan berkala setiap 2 minggu",
        attachments: 4
    },
    {
        id: 4,
        reportNumber: "RPT-2025-004",
        title: "Laporan Inspeksi Rutin - Tanah Bumbu",
        location: "Jl. Diponegoro No. 89, Tanah Bumbu",
        reporterName: "Lisa Inspector",
        team: "Tim A",
        reportDate: "2025-01-12",
        status: "draft",
        priority: "low",
        category: "inspection",
        description: "Inspeksi rutin sistem pengolahan air limbah",
        findings: "Sistem dalam kondisi baik, tidak ada masalah signifikan",
        recommendations: "Lanjutkan pemeliharaan rutin sesuai jadwal",
        attachments: 2
    }
];

export default function FieldReportsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterCategory, setFilterCategory] = useState("all");
    const [filterPriority, setFilterPriority] = useState("all");

    const filteredReports = reportsData.filter(report => {
        const matchesSearch = report.reportNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.reporterName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || report.status === filterStatus;
        const matchesCategory = filterCategory === "all" || report.category === filterCategory;
        const matchesPriority = filterPriority === "all" || report.priority === filterPriority;

        return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "draft":
                return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Draft</Badge>;
            case "submitted":
                return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Dikirim</Badge>;
            case "reviewed":
                return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Direview</Badge>;
            case "approved":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Disetujui</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case "urgent":
                return <Badge className="bg-red-500 hover:bg-red-600 text-white">Mendesak</Badge>;
            case "high":
                return <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Tinggi</Badge>;
            case "medium":
                return <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">Sedang</Badge>;
            case "low":
                return <Badge className="bg-green-500 hover:bg-green-600 text-white">Rendah</Badge>;
            default:
                return <Badge variant="outline">{priority}</Badge>;
        }
    };

    const getCategoryBadge = (category: string) => {
        const categoryLabels = {
            maintenance: "Pemeliharaan",
            installation: "Instalasi",
            repair: "Perbaikan",
            inspection: "Inspeksi",
            emergency: "Darurat"
        };
        return <Badge variant="outline">{categoryLabels[category as keyof typeof categoryLabels]}</Badge>;
    };

    return (
       
            <div className="space-y-6">
                {/* Header Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                            <Input
                                placeholder="Cari laporan..."
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
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="submitted">Dikirim</SelectItem>
                                <SelectItem value="reviewed">Direview</SelectItem>
                                <SelectItem value="approved">Disetujui</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={filterCategory} onValueChange={setFilterCategory}>
                            <SelectTrigger className="w-full sm:w-40">
                                <SelectValue placeholder="Semua Kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua Kategori</SelectItem>
                                <SelectItem value="maintenance">Pemeliharaan</SelectItem>
                                <SelectItem value="installation">Instalasi</SelectItem>
                                <SelectItem value="repair">Perbaikan</SelectItem>
                                <SelectItem value="inspection">Inspeksi</SelectItem>
                                <SelectItem value="emergency">Darurat</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={filterPriority} onValueChange={setFilterPriority}>
                            <SelectTrigger className="w-full sm:w-40">
                                <SelectValue placeholder="Semua Prioritas" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua Prioritas</SelectItem>
                                <SelectItem value="urgent">Mendesak</SelectItem>
                                <SelectItem value="high">Tinggi</SelectItem>
                                <SelectItem value="medium">Sedang</SelectItem>
                                <SelectItem value="low">Rendah</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            <Download size={16} className="mr-2" />
                            Export
                        </Button>
                        <Button className="bg-cyan-600 hover:bg-cyan-700">
                            <Plus size={16} className="mr-2" />
                            Buat Laporan
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Total Laporan</p>
                                    <p className="text-2xl font-bold text-slate-900">{reportsData.length}</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Menunggu Review</p>
                                    <p className="text-2xl font-bold text-yellow-600">
                                        {reportsData.filter(r => r.status === 'submitted').length}
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
                                        {reportsData.filter(r => r.status === 'approved').length}
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
                                    <p className="text-sm text-slate-600">Draft</p>
                                    <p className="text-2xl font-bold text-gray-600">
                                        {reportsData.filter(r => r.status === 'draft').length}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <ClipboardEdit className="h-6 w-6 text-gray-600" />

                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Reports List */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredReports.map((report) => (
                        <Card key={report.id} className="hover-card-lift">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-lg">{report.reportNumber}</CardTitle>
                                        <CardDescription>{report.title}</CardDescription>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {getStatusBadge(report.status)}
                                        {getPriorityBadge(report.priority)}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="h-4 w-4 text-slate-400" />
                                        <span>{report.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="h-4 w-4 text-slate-400" />
                                        <span>{new Date(report.reportDate).toLocaleDateString('id-ID')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-slate-500">Pelapor:</span>
                                        <span>{report.reporterName} ({report.team})</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {getCategoryBadge(report.category)}
                                        {report.attachments > 0 && (
                                            <div className="flex items-center gap-1 text-sm text-slate-500">
                                                <Camera className="h-4 w-4" />
                                                <span>{report.attachments} file</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <p className="text-sm font-medium text-slate-700">Deskripsi:</p>
                                        <p className="text-sm text-slate-600">{report.description}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-700">Temuan:</p>
                                        <p className="text-sm text-slate-600">{report.findings}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-700">Rekomendasi:</p>
                                        <p className="text-sm text-slate-600">{report.recommendations}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        Detail
                                    </Button>
                                    {report.status === "draft" && (
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                            Edit
                                        </Button>
                                    )}
                                    {report.status === "submitted" && (
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                            Review
                                        </Button>
                                    )}
                                    <Button variant="outline" size="sm">
                                        <Download size={16} />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredReports.length === 0 && (
                    <div className="text-center py-12">
                        <FileText className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-500">Tidak ada laporan yang ditemukan</p>
                    </div>
                )}
            </div>
    );
}