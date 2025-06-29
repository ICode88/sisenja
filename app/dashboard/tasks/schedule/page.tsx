"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, User, ChevronLeft, ChevronRight, CalendarCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScheduleItem {
    id: number;
    time: string;
    title: string;
    customer: string;
    location: string;
    team: string;
    type: string;
    status: "scheduled" | "in_progress" | "completed" | "cancelled";
    duration: string;
}

const scheduleData: ScheduleItem[] = [
    {
        id: 1,
        time: "08:00",
        title: "Penyedotan Rutin",
        customer: "Budi Santoso",
        location: "Jl. Merdeka No. 123, Batulicin",
        team: "Tim A",
        type: "Penyedotan",
        status: "completed",
        duration: "2 jam"
    },
    {
        id: 2,
        time: "10:30",
        title: "Instalasi Baru",
        customer: "Siti Nurhaliza",
        location: "Jl. Sudirman No. 45, Tanah Bumbu",
        team: "Tim B",
        type: "Instalasi",
        status: "in_progress",
        duration: "4 jam"
    },
    {
        id: 3,
        time: "13:00",
        title: "Pemeliharaan Rutin",
        customer: "Ahmad Rahman",
        location: "Jl. Ahmad Yani No. 67, Batulicin",
        team: "Tim C",
        type: "Pemeliharaan",
        status: "scheduled",
        duration: "1.5 jam"
    },
    {
        id: 4,
        time: "15:00",
        title: "Perbaikan Darurat",
        customer: "Lisa Permata",
        location: "Jl. Diponegoro No. 89, Tanah Bumbu",
        team: "Tim A",
        type: "Perbaikan",
        status: "scheduled",
        duration: "3 jam"
    },
    {
        id: 5,
        time: "16:30",
        title: "Konsultasi Teknis",
        customer: "Andi Wijaya",
        location: "Jl. Gatot Subroto No. 12, Batulicin",
        team: "Tim Konsultan",
        type: "Konsultasi",
        status: "cancelled",
        duration: "1 jam"
    }
];

export default function SchedulePage() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const navigateDate = (direction: 'prev' | 'next') => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
        setCurrentDate(newDate);
    };

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

    const getTypeColor = (type: string) => {
        switch (type) {
            case "Penyedotan":
                return "border-l-blue-500";
            case "Instalasi":
                return "border-l-green-500";
            case "Pemeliharaan":
                return "border-l-yellow-500";
            case "Perbaikan":
                return "border-l-red-500";
            case "Konsultasi":
                return "border-l-purple-500";
            default:
                return "border-l-gray-500";
        }
    };

    const completedTasks = scheduleData.filter(item => item.status === "completed").length;
    const inProgressTasks = scheduleData.filter(item => item.status === "in_progress").length;
    const scheduledTasks = scheduleData.filter(item => item.status === "scheduled").length;
    const totalTasks = scheduleData.length;

    return (
        <div className="space-y-6">
            {/* Date Navigation */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => navigateDate('prev')}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    {formatDate(currentDate)}
                                </h2>
                                <p className="text-sm text-slate-500">Jadwal Harian Tim</p>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => navigateDate('next')}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                        <Button className="bg-cyan-600 hover:bg-cyan-700">
                            Tambah Jadwal
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total Jadwal</p>
                                <p className="text-2xl font-bold text-slate-900">{totalTasks}</p>
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
                                <p className="text-sm text-slate-600">Terjadwal</p>
                                <p className="text-2xl font-bold text-blue-600">{scheduledTasks}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <CalendarCheck className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Sedang Proses</p>
                                <p className="text-2xl font-bold text-yellow-600">{inProgressTasks}</p>
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
                                <p className="text-2xl font-bold text-green-600">{completedTasks}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-green-600" />

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Schedule Timeline */}
            <Card>
                <CardHeader>
                    <CardTitle>Jadwal Harian</CardTitle>
                    <CardDescription>
                        Daftar tugas dan jadwal untuk hari ini
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {scheduleData.map((item) => (
                            <div
                                key={item.id}
                                className={`flex items-start gap-4 p-4 border-l-4 ${getTypeColor(item.type)} bg-slate-50 rounded-r-lg hover:bg-slate-100 transition-colors`}
                            >
                                <div className="flex-shrink-0 w-16 text-center">
                                    <div className="text-lg font-bold text-slate-900">{item.time}</div>
                                    <div className="text-xs text-slate-500">{item.duration}</div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                            <p className="text-sm text-slate-600">{item.customer}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline">{item.type}</Badge>
                                            {getStatusBadge(item.status)}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{item.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="h-4 w-4" />
                                            <span>{item.team}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    {item.status === "scheduled" && (
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                            Mulai
                                        </Button>
                                    )}
                                    {item.status === "in_progress" && (
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                            Selesai
                                        </Button>
                                    )}
                                    {(item.status === "completed" || item.status === "cancelled") && (
                                        <Button variant="outline" size="sm">
                                            Detail
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {scheduleData.length === 0 && (
                        <div className="text-center py-12">
                            <Calendar className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                            <p className="text-slate-500">Tidak ada jadwal untuk hari ini</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}