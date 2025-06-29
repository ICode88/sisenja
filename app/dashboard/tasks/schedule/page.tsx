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

    const formatDateShort = (date: Date) => {
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
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
                <CardContent className="p-4 md:p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => navigateDate('prev')}
                                className="h-8 w-8 p-0 md:h-9 md:w-auto md:px-3"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                <span className="hidden md:inline ml-1">Prev</span>
                            </Button>
                            <div className="text-center">
                                {/* Mobile: Short format */}
                                <h2 className="text-lg md:text-2xl font-bold text-slate-900 md:hidden">
                                    {formatDateShort(currentDate)}
                                </h2>
                                {/* Desktop: Full format */}
                                <h2 className="hidden md:block text-2xl font-bold text-slate-900">
                                    {formatDate(currentDate)}
                                </h2>
                                <p className="text-xs md:text-sm text-slate-500">Jadwal Harian Tim</p>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => navigateDate('next')}
                                className="h-8 w-8 p-0 md:h-9 md:w-auto md:px-3"
                            >
                                <span className="hidden md:inline mr-1">Next</span>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-xs md:text-sm px-2 md:px-4">
                            <span className="hidden sm:inline">Tambah Jadwal</span>
                            <span className="sm:hidden">+</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <Card>
                    <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs md:text-sm text-slate-600">Total</p>
                                <p className="text-lg md:text-2xl font-bold text-slate-900">{totalTasks}</p>
                            </div>
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Calendar className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs md:text-sm text-slate-600">Terjadwal</p>
                                <p className="text-lg md:text-2xl font-bold text-blue-600">{scheduledTasks}</p>
                            </div>
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <CalendarCheck className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs md:text-sm text-slate-600">Proses</p>
                                <p className="text-lg md:text-2xl font-bold text-yellow-600">{inProgressTasks}</p>
                            </div>
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <Clock className="h-4 w-4 md:h-6 md:w-6 text-yellow-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-3 md:p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs md:text-sm text-slate-600">Selesai</p>
                                <p className="text-lg md:text-2xl font-bold text-green-600">{completedTasks}</p>
                            </div>
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Schedule Timeline */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl">Jadwal Harian</CardTitle>
                    <CardDescription className="text-sm">
                        Daftar tugas dan jadwal untuk hari ini
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3 md:space-y-4">
                        {scheduleData.map((item) => (
                            <div
                                key={item.id}
                                className={`flex flex-col md:flex-row md:items-start gap-3 md:gap-4 p-3 md:p-4 border-l-4 ${getTypeColor(item.type)} bg-slate-50 rounded-r-lg hover:bg-slate-100 transition-colors`}
                            >
                                {/* Time and Duration - Mobile: Top, Desktop: Left */}
                                <div className="flex justify-between items-center md:flex-col md:items-center md:justify-start md:w-16 text-center">
                                    <div className="text-base md:text-lg font-bold text-slate-900">{item.time}</div>
                                    <div className="text-xs text-slate-500">{item.duration}</div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                        <div>
                                            <h3 className="font-semibold text-slate-900 text-sm md:text-base">{item.title}</h3>
                                            <p className="text-xs md:text-sm text-slate-600">{item.customer}</p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge variant="outline" className="text-xs">{item.type}</Badge>
                                            {getStatusBadge(item.status)}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                                            <span className="truncate">{item.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="h-3 w-3 md:h-4 md:w-4" />
                                            <span>{item.team}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 mt-2 md:mt-0 md:flex-shrink-0">
                                    {item.status === "scheduled" && (
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs px-2 md:px-3">
                                            Mulai
                                        </Button>
                                    )}
                                    {item.status === "in_progress" && (
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs px-2 md:px-3">
                                            Selesai
                                        </Button>
                                    )}
                                    {(item.status === "completed" || item.status === "cancelled") && (
                                        <Button variant="outline" size="sm" className="text-xs px-2 md:px-3">
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