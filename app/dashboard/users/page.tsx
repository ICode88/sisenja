"use client";

import { useState } from "react";
import { Search, Plus, Filter, Eye, Edit, Trash2, ChevronDown, Hourglass, UserCheck, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: "active" | "inactive" | "pending";
    joinDate: string;
    lastActive: string;
    avatar?: string;
}

const usersData: User[] = [
    {
        id: 1,
        name: "Budi Santoso",
        email: "budi.santoso@email.com",
        role: "Customer",
        status: "active",
        joinDate: "2024-01-15",
        lastActive: "2 menit lalu",
        avatar: "/api/placeholder/32/32"
    },
    {
        id: 2,
        name: "Siti Nurhaliza",
        email: "siti.nurhaliza@email.com",
        role: "Customer",
        status: "active",
        joinDate: "2024-02-20",
        lastActive: "5 menit lalu"
    },
    {
        id: 3,
        name: "Ahmad Rahman",
        email: "ahmad.rahman@email.com",
        role: "Operator",
        status: "pending",
        joinDate: "2024-03-10",
        lastActive: "1 jam lalu"
    },
    {
        id: 4,
        name: "Lisa Permata",
        email: "lisa.permata@email.com",
        role: "Customer",
        status: "inactive",
        joinDate: "2024-01-05",
        lastActive: "3 hari lalu"
    },
    {
        id: 5,
        name: "Andi Wijaya",
        email: "andi.wijaya@email.com",
        role: "Admin",
        status: "active",
        joinDate: "2023-12-01",
        lastActive: "10 menit lalu"
    }
];

export default function UsersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRole, setFilterRole] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");

    const filteredUsers = usersData.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === "all" || user.role === filterRole;
        const matchesStatus = filterStatus === "all" || user.status === filterStatus;

        return matchesSearch && matchesRole && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "active":
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Aktif</Badge>;
            case "inactive":
                return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Tidak Aktif</Badge>;
            case "pending":
                return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const getRoleBadge = (role: string) => {
        switch (role) {
            case "Customer":
                return <Badge variant="outline" className="text-blue-600 border-blue-600">Customer</Badge>;
            case "Operator":
                return <Badge variant="outline" className="text-purple-600 border-purple-600">Operator</Badge>;
            case "Admin":
                return <Badge variant="outline" className="text-green-600 border-green-600">Admin</Badge>;
            default:
                return <Badge variant="outline">{role}</Badge>;
        }
    };

    return (
        <>
            <div className="space-y-6">
                {/* Header Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                            <Input
                                placeholder="Cari nama atau email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 w-full sm:w-64"
                            />
                        </div>

                        <Select value={filterRole} onValueChange={setFilterRole}>
                            <SelectTrigger className="w-full sm:w-40">
                                <SelectValue placeholder="Semua Role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua Role</SelectItem>
                                <SelectItem value="Customer">Customer</SelectItem>
                                <SelectItem value="Operator">Operator</SelectItem>
                                <SelectItem value="Admin">Admin</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={filterStatus} onValueChange={setFilterStatus}>
                            <SelectTrigger className="w-full sm:w-40">
                                <SelectValue placeholder="Semua Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua Status</SelectItem>
                                <SelectItem value="active">Aktif</SelectItem>
                                <SelectItem value="inactive">Tidak Aktif</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
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
                            Tambah User
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Total User</p>
                                    <p className="text-2xl font-bold text-slate-900">{usersData.length}</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Users className="h-6 w-6 text-blue-600" />

                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">User Aktif</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        {usersData.filter(u => u.status === 'active').length}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                                   <UserCheck className="h-6 w-6 text-green-600" />
                                   
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Pending</p>
                                    <p className="text-2xl font-bold text-yellow-600">
                                        {usersData.filter(u => u.status === 'pending').length}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <Hourglass className="h-6 w-6 text-yellow-600" />

                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Tidak Aktif</p>
                                    <p className="text-2xl font-bold text-red-600">
                                        {usersData.filter(u => u.status === 'inactive').length}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                                                   <X className="h-6 w-6 text-red-600" />
                                   
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Users Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Daftar User</CardTitle>
                        <CardDescription>
                            Menampilkan {filteredUsers.length} dari {usersData.length} user
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="text-left py-3 px-4 font-medium text-slate-600">User</th>
                                        <th className="text-left py-3 px-4 font-medium text-slate-600">Role</th>
                                        <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                                        <th className="text-left py-3 px-4 font-medium text-slate-600">Bergabung</th>
                                        <th className="text-left py-3 px-4 font-medium text-slate-600">Terakhir Aktif</th>
                                        <th className="text-left py-3 px-4 font-medium text-slate-600">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50">
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="w-10 h-10">
                                                        {user.avatar ? (
                                                            <AvatarImage src={user.avatar} />
                                                        ) : null}
                                                        <AvatarFallback className="bg-cyan-600 text-white">
                                                            {user.name.split(' ').map(n => n[0]).join('')}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium text-slate-900">{user.name}</p>
                                                        <p className="text-sm text-slate-500">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                {getRoleBadge(user.role)}
                                            </td>
                                            <td className="py-4 px-4">
                                                {getStatusBadge(user.status)}
                                            </td>
                                            <td className="py-4 px-4 text-sm text-slate-600">
                                                {new Date(user.joinDate).toLocaleDateString('id-ID')}
                                            </td>
                                            <td className="py-4 px-4 text-sm text-slate-600">
                                                {user.lastActive}
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                                                        <Eye size={16} />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                                                        <Edit size={16} />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                                        <Trash2 size={16} />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {filteredUsers.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-slate-500">Tidak ada user yang ditemukan</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}