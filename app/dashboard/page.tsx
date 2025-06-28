"use client";

import { Users, Truck, FileText, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/libs/utils";

export default function DashboardPage() {
    return (
    <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-cyan-100 text-sm font-medium">Total User</p>
                                <p className="text-3xl font-bold">1,247</p>
                            </div>
                            <Users className="w-8 h-8 text-cyan-200" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-100 text-sm font-medium">Pesanan Aktif</p>
                                <p className="text-3xl font-bold">23</p>
                            </div>
                            <Truck className="w-8 h-8 text-green-200" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-yellow-100 text-sm font-medium">Menunggu Approval</p>
                                <p className="text-3xl font-bold">8</p>
                            </div>
                            <FileText className="w-8 h-8 text-yellow-200" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-purple-100 text-sm font-medium">Pendapatan Bulan Ini</p>
                                <p className="text-3xl font-bold">Rp 45M</p>
                            </div>
                            <DollarSign className="w-8 h-8 text-purple-200" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-slate-900 dark:text-slate-100">
                            Aktivitas Terbaru
                        </CardTitle>
                        <CardDescription>
                            Pembaruan sistem dan aktivitas user
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { user: "Budi Santoso", action: "melakukan pemesanan layanan", time: "2 menit lalu", type: "order" },
                            { user: "Siti Nurhaliza", action: "menyelesaikan pembayaran", time: "15 menit lalu", type: "payment" },
                            { user: "Ahmad Rahman", action: "mengajukan permohonan baru", time: "1 jam lalu", type: "request" },
                            { user: "Lisa Permata", action: "memberikan ulasan 5 bintang", time: "2 jam lalu", type: "review" }
                        ].map((activity, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                                <div className={cn(
                                    "w-2 h-2 rounded-full",
                                    activity.type === "order" && "bg-blue-500",
                                    activity.type === "payment" && "bg-green-500",
                                    activity.type === "request" && "bg-yellow-500",
                                    activity.type === "review" && "bg-purple-500"
                                )} />
                                <div className="flex-1">
                                    <p className="text-sm text-slate-900 dark:text-slate-100">
                                        <span className="font-medium">{activity.user}</span> {activity.action}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-slate-900 dark:text-slate-100">
                            Tugas Prioritas
                        </CardTitle>
                        <CardDescription>
                            Tugas yang memerlukan perhatian segera
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { task: "Review laporan lapangan area Tanahbumbu", priority: "high", deadline: "Hari ini" },
                            { task: "Approve permohonan layanan komersil", priority: "medium", deadline: "Besok" },
                            { task: "Update tarif layanan Q2 2024", priority: "low", deadline: "Minggu depan" },
                            { task: "Koordinasi dengan tim teknis", priority: "high", deadline: "2 hari lagi" }
                        ].map((task, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className={cn(
                                    "w-3 h-3 rounded-full",
                                    task.priority === "high" && "bg-red-500",
                                    task.priority === "medium" && "bg-yellow-500",
                                    task.priority === "low" && "bg-green-500"
                                )} />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                        {task.task}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Deadline: {task.deadline}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}