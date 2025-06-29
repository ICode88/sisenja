"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, Search, Plus, Clock, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface Communication {
    id: number;
    type: "call" | "chat" | "email";
    customerName: string;
    subject: string;
    message: string;
    status: "new" | "in_progress" | "resolved" | "closed";
    priority: "low" | "medium" | "high" | "urgent";
    assignedTo: string;
    createdAt: string;
    lastUpdate: string;
    phoneNumber?: string;
    email?: string;
}

const communicationData: Communication[] = [
    {
        id: 1,
        type: "call",
        customerName: "Budi Santoso",
        subject: "Keluhan Sistem Tidak Berfungsi",
        message: "Sistem pengolahan air limbah di rumah saya tidak berfungsi sejak kemarin. Mohon bantuan segera.",
        status: "new",
        priority: "high",
        assignedTo: "Customer Service 1",
        createdAt: "2025-01-15 09:30",
        lastUpdate: "2025-01-15 09:30",
        phoneNumber: "081234567890"
    },
    {
        id: 2,
        type: "chat",
        customerName: "Siti Nurhaliza",
        subject: "Pertanyaan Jadwal Instalasi",
        message: "Saya ingin menanyakan jadwal instalasi sistem baru yang sudah saya pesan minggu lalu.",
        status: "in_progress",
        priority: "medium",
        assignedTo: "Customer Service 2",
        createdAt: "2025-01-15 10:15",
        lastUpdate: "2025-01-15 11:00",
        phoneNumber: "081234567891"
    },
    {
        id: 3,
        type: "email",
        customerName: "Ahmad Rahman",
        subject: "Permintaan Penawaran Layanan",
        message: "Saya tertarik dengan layanan pemeliharaan rutin. Mohon dikirimkan penawaran harga untuk rumah saya.",
        status: "resolved",
        priority: "low",
        assignedTo: "Customer Service 1",
        createdAt: "2025-01-15 08:45",
        lastUpdate: "2025-01-15 12:30",
        email: "ahmad.rahman@email.com"
    },
    {
        id: 4,
        type: "call",
        customerName: "Lisa Permata",
        subject: "Konfirmasi Jadwal Pemeliharaan",
        message: "Saya ingin mengkonfirmasi jadwal pemeliharaan yang dijadwalkan besok pagi.",
        status: "resolved",
        priority: "medium",
        assignedTo: "Customer Service 3",
        createdAt: "2025-01-15 14:20",
        lastUpdate: "2025-01-15 14:45",
        phoneNumber: "081234567892"
    },
    {
        id: 5,
        type: "chat",
        customerName: "Andi Wijaya",
        subject: "Keluhan Kualitas Layanan",
        message: "Tim yang datang kemarin kurang profesional dan meninggalkan area kerja kotor.",
        status: "in_progress",
        priority: "urgent",
        assignedTo: "Supervisor",
        createdAt: "2025-01-15 13:10",
        lastUpdate: "2025-01-15 15:30",
        phoneNumber: "081234567893"
    }
];

export default function CommunicationPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterType, setFilterType] = useState("all");
    const [filterPriority, setFilterPriority] = useState("all");
    const [showNewTicket, setShowNewTicket] = useState(false);
    const [newTicket, setNewTicket] = useState({
        customerName: "",
        subject: "",
        message: "",
        type: "chat",
        priority: "medium"
    });

    const filteredCommunications = communicationData.filter(comm => {
        const matchesSearch = comm.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comm.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comm.message.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || comm.status === filterStatus;
        const matchesType = filterType === "all" || comm.type === filterType;
        const matchesPriority = filterPriority === "all" || comm.priority === filterPriority;

        return matchesSearch && matchesStatus && matchesType && matchesPriority;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "new":
                return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Baru</Badge>;
            case "in_progress":
                return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Sedang Proses</Badge>;
            case "resolved":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Selesai</Badge>;
            case "closed":
                return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Ditutup</Badge>;
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

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "call":
                return <Phone className="h-4 w-4" />;
            case "chat":
                return <MessageCircle className="h-4 w-4" />;
            case "email":
                return <Mail className="h-4 w-4" />;
            default:
                return <MessageCircle className="h-4 w-4" />;
        }
    };

    const handleSubmitTicket = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New ticket:", newTicket);
        setShowNewTicket(false);
        setNewTicket({
            customerName: "",
            subject: "",
            message: "",
            type: "chat",
            priority: "medium"
        });
    };

    return (
        <DashboardLayout
            title="Komunikasi & Customer Service"
            subtitle="Kelola komunikasi dengan pelanggan melalui telepon, chat, dan email"
        >
            <div className="space-y-6">
                {/* Header Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                            <Input
                                placeholder="Cari komunikasi..."
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
                                <SelectItem value="new">Baru</SelectItem>
                                <SelectItem value="in_progress">Sedang Proses</SelectItem>
                                <SelectItem value="resolved">Selesai</SelectItem>
                                <SelectItem value="closed">Ditutup</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={filterType} onValueChange={setFilterType}>
                            <SelectTrigger className="w-full sm:w-40">
                                <SelectValue placeholder="Semua Tipe" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua Tipe</SelectItem>
                                <SelectItem value="call">Telepon</SelectItem>
                                <SelectItem value="chat">Chat</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
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
                    <Button 
                        onClick={() => setShowNewTicket(true)}
                        className="bg-cyan-600 hover:bg-cyan-700"
                    >
                        <Plus size={16} className="mr-2" />
                        Tiket Baru
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Total Tiket</p>
                                    <p className="text-2xl font-bold text-slate-900">{communicationData.length}</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <MessageCircle className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Tiket Baru</p>
                                    <p className="text-2xl font-bold text-blue-600">
                                        {communicationData.filter(c => c.status === 'new').length}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-blue-600" />
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
                                        {communicationData.filter(c => c.status === 'in_progress').length}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <User className="h-6 w-6 text-yellow-600" />
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
                                        {communicationData.filter(c => c.status === 'resolved').length}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Communications List */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredCommunications.map((comm) => (
                        <Card key={comm.id} className="hover-card-lift">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-10 h-10">
                                            <AvatarFallback className="bg-cyan-600 text-white">
                                                {comm.customerName.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-lg">{comm.customerName}</CardTitle>
                                            <CardDescription>{comm.subject}</CardDescription>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            {getTypeIcon(comm.type)}
                                            {getStatusBadge(comm.status)}
                                        </div>
                                        {getPriorityBadge(comm.priority)}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-slate-600 line-clamp-3">{comm.message}</p>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Ditangani oleh:</span>
                                        <Badge variant="outline">{comm.assignedTo}</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Dibuat:</span>
                                        <span>{new Date(comm.createdAt).toLocaleString('id-ID')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Update terakhir:</span>
                                        <span>{new Date(comm.lastUpdate).toLocaleString('id-ID')}</span>
                                    </div>
                                    {comm.phoneNumber && (
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Telepon:</span>
                                            <span>{comm.phoneNumber}</span>
                                        </div>
                                    )}
                                    {comm.email && (
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Email:</span>
                                            <span>{comm.email}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        Detail
                                    </Button>
                                    {comm.status === "new" && (
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                            Ambil
                                        </Button>
                                    )}
                                    {comm.status === "in_progress" && (
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                            Selesai
                                        </Button>
                                    )}
                                    {comm.type === "call" && (
                                        <Button size="sm" variant="outline" className="text-green-600 hover:text-green-700">
                                            <Phone size={16} />
                                        </Button>
                                    )}
                                    {comm.type === "chat" && (
                                        <Button size="sm" variant="outline" className="text-blue-600 hover:text-blue-700">
                                            <MessageCircle size={16} />
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredCommunications.length === 0 && (
                    <div className="text-center py-12">
                        <MessageCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-500">Tidak ada komunikasi yang ditemukan</p>
                    </div>
                )}

                {/* New Ticket Modal */}
                {showNewTicket && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Buat Tiket Baru</CardTitle>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowNewTicket(false)}
                                    >
                                        ✕
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmitTicket} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium mb-2 block">Nama Pelanggan</label>
                                            <Input
                                                value={newTicket.customerName}
                                                onChange={(e) => setNewTicket({ ...newTicket, customerName: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium mb-2 block">Tipe Komunikasi</label>
                                            <Select
                                                value={newTicket.type}
                                                onValueChange={(value) => setNewTicket({ ...newTicket, type: value })}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="call">Telepon</SelectItem>
                                                    <SelectItem value="chat">Chat</SelectItem>
                                                    <SelectItem value="email">Email</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium mb-2 block">Subjek</label>
                                            <Input
                                                value={newTicket.subject}
                                                onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium mb-2 block">Prioritas</label>
                                            <Select
                                                value={newTicket.priority}
                                                onValueChange={(value) => setNewTicket({ ...newTicket, priority: value })}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="low">Rendah</SelectItem>
                                                    <SelectItem value="medium">Sedang</SelectItem>
                                                    <SelectItem value="high">Tinggi</SelectItem>
                                                    <SelectItem value="urgent">Mendesak</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Pesan</label>
                                        <Textarea
                                            value={newTicket.message}
                                            onChange={(e) => setNewTicket({ ...newTicket, message: e.target.value })}
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setShowNewTicket(false)}
                                            className="flex-1"
                                        >
                                            Batal
                                        </Button>
                                        <Button
                                            type="submit"
                                            className="flex-1 bg-cyan-600 hover:bg-cyan-700"
                                        >
                                            Buat Tiket
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}