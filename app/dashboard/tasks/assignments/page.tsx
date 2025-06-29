"use client";

import { useState } from "react";
import { Search, Filter, Plus, Calendar, Clock, User, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TaskAssignment {
    id: number;
    taskNumber: string;
    title: string;
    description: string;
    assignedTo: string;
    priority: "low" | "medium" | "high" | "urgent";
    status: "pending" | "accepted" | "in_progress" | "completed" | "rejected";
    dueDate: string;
    estimatedDuration: string;
    location: string;
    customerName: string;
    createdDate: string;
    notes: string;
}

const assignmentsData: TaskAssignment[] = [
    {
        id: 1,
        taskNumber: "TSK-2025-001",
        title: "Penyedotan Rutin - Rumah Budi",
        description: "Melakukan penyedotan rutin untuk rumah tinggal di Batulicin",
        assignedTo: "Tim A",
        priority: "medium",
        status: "pending",
        dueDate: "2025-01-16",
        estimatedDuration: "2 jam",
        location: "Jl. Merdeka No. 123, Batulicin",
        customerName: "Budi Santoso",
        createdDate: "2025-01-15",
        notes: "Pelanggan meminta jadwal pagi hari"
    },
    {
        id: 2,
        taskNumber: "TSK-2025-002",
        title: "Instalasi Baru - Kantor Siti",
        description: "Instalasi sistem pengolahan air limbah baru untuk kantor",
        assignedTo: "Tim B",
        priority: "high",
        status: "accepted",
        dueDate: "2025-01-17",
        estimatedDuration: "4 jam",
        location: "Jl. Sudirman No. 45, Tanah Bumbu",
        customerName: "Siti Nurhaliza",
        createdDate: "2025-01-15",
        notes: "Perlu koordinasi dengan pihak kantor untuk akses"
    },
    {
        id: 3,
        taskNumber: "TSK-2025-003",
        title: "Perbaikan Darurat - Sistem Ahmad",
        description: "Perbaikan darurat sistem yang mengalami kerusakan",
        assignedTo: "Tim C",
        priority: "urgent",
        status: "in_progress",
        dueDate: "2025-01-15",
        estimatedDuration: "3 jam",
        location: "Jl. Ahmad Yani No. 67, Batulicin",
        customerName: "Ahmad Rahman",
        createdDate: "2025-01-15",
        notes: "Prioritas tinggi, sistem tidak berfungsi"
    },
    {
        id: 4,
        taskNumber: "TSK-2025-004",
        title: "Pemeliharaan Rutin - Rumah Lisa",
        description: "Pemeliharaan rutin sistem pengolahan air limbah",
        assignedTo: "Tim A",
        priority: "low",
        status: "completed",
        dueDate: "2025-01-14",
        estimatedDuration: "1.5 jam",
        location: "Jl. Diponegoro No. 89, Tanah Bumbu",
        customerName: "Lisa Permata",
        createdDate: "2025-01-13",
        notes: "Pemeliharaan selesai, sistem berfungsi normal"
    },
    {
        id: 5,
        taskNumber: "TSK-2025-005",
        title: "Konsultasi Teknis - Proyek Andi",
        description: "Konsultasi teknis untuk upgrade sistem pengolahan",
        assignedTo: "Tim Konsultan",
        priority: "medium",
        status: "rejected",
        dueDate: "2025-01-16",
        estimatedDuration: "1 jam",
        location: "Jl. Gatot Subroto No. 12, Batulicin",
        customerName: "Andi Wijaya",
        createdDate: "2025-01-14",
        notes: "Tim tidak tersedia pada jadwal yang diminta"
    }
];

export default function AssignmentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterPriority, setFilterPriority] = useState("all");
    const [filterTeam, setFilterTeam] = useState("all");

    const filteredAssignments = assignmentsData.filter(task => {
        const matchesSearch = task.taskNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.customerName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || task.status === filterStatus;
        const matchesPriority = filterPriority === "all" || task.priority === filterPriority;
        const matchesTeam = filterTeam === "all" || task.assignedTo === filterTeam;

        return matchesSearch && matchesStatus && matchesPriority && matchesTeam;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "pending":
                return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Menunggu</Badge>;
            case "accepted":
                return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Diterima</Badge>;
            case "in_progress":
                return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Sedang Proses</Badge>;
            case "completed":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Selesai</Badge>;
            case "rejected":
                return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Ditolak</Badge>;
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

    const teams = [...new Set(assignmentsData.map(task => task.assignedTo))];

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                        <Input
                            placeholder="Cari tugas..."
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
                            <SelectItem value="accepted">Diterima</SelectItem>
                            <SelectItem value="in_progress">Sedang Proses</SelectItem>
                            <SelectItem value="completed">Selesai</SelectItem>
                            <SelectItem value="rejected">Ditolak</SelectItem>
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

                    <Select value={filterTeam} onValueChange={setFilterTeam}>
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Semua Tim" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Tim</SelectItem>
                            {teams.map((team) => (
                                <SelectItem key={team} value={team}>
                                    {team}
                                </SelectItem>
                            ))}
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
                        Tambah Tugas
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total Tugas</p>
                                <p className="text-2xl font-bold text-slate-900">{assignmentsData.length}</p>
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
                                <p className="text-sm text-slate-600">Menunggu</p>
                                <p className="text-2xl font-bold text-yellow-600">
                                    {assignmentsData.filter(t => t.status === 'pending').length}
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
                                <p className="text-sm text-slate-600">Sedang Proses</p>
                                <p className="text-2xl font-bold text-orange-600">
                                    {assignmentsData.filter(t => t.status === 'in_progress').length}
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
                                <p className="text-sm text-slate-600">Selesai</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {assignmentsData.filter(t => t.status === 'completed').length}
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
                                <p className="text-sm text-slate-600">Mendesak</p>
                                <p className="text-2xl font-bold text-red-600">
                                    {assignmentsData.filter(t => t.priority === 'urgent').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <span className="text-red-600 font-semibold">🚨</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Assignments Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredAssignments.map((task) => (
                    <Card key={task.id} className="hover-card-lift">
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle className="text-lg">{task.taskNumber}</CardTitle>
                                    <CardDescription>{task.title}</CardDescription>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {getStatusBadge(task.status)}
                                    {getPriorityBadge(task.priority)}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-slate-600">{task.description}</p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <User className="h-4 w-4 text-slate-400" />
                                    <span>{task.customerName}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="h-4 w-4 text-slate-400" />
                                    <span>Deadline: {new Date(task.dueDate).toLocaleDateString('id-ID')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Clock className="h-4 w-4 text-slate-400" />
                                    <span>Estimasi: {task.estimatedDuration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Badge variant="outline">{task.assignedTo}</Badge>
                                </div>
                            </div>

                            <div className="p-3 bg-slate-50 rounded-lg">
                                <p className="text-sm text-slate-700">{task.notes}</p>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                    Detail
                                </Button>
                                {task.status === "pending" && (
                                    <>
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                            Terima
                                        </Button>
                                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                            Tolak
                                        </Button>
                                    </>
                                )}
                                {task.status === "accepted" && (
                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                        Mulai
                                    </Button>
                                )}
                                {task.status === "in_progress" && (
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                        Selesai
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredAssignments.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-slate-500">Tidak ada tugas yang ditemukan</p>
                </div>
            )}
        </div>
    );
}