"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Eye, EyeOff, UserPlus, Droplets, User, Lock, Phone,
    MapPin, Home, Building, Users, Search, Map
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
    name: string;
    username: string;
    password: string;
    phone: string;
    address: string;
    type_location: string;
    latitude: string;
    longitude: string;
}

interface LocationCoords {
    lat: number;
    lng: number;
}

export default function RegisterPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        username: "",
        password: "",
        phone: "",
        address: "",
        type_location: "",
        latitude: "",
        longitude: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showMap, setShowMap] = useState(false);
    const [mapSearch, setMapSearch] = useState("");
    const [selectedLocation, setSelectedLocation] = useState<LocationCoords | null>(null);

    // Mock map component (in real implementation, you'd use Google Maps or similar)
    const MapSelector = () => (
        <div className="space-y-4">
            <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Cari lokasi (contoh: Tanahbumbu, Kalimantan Selatan)"
                    value={mapSearch}
                    onChange={(e) => setMapSearch(e.target.value)}
                    className="pl-10"
                />
            </div>

            <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center">
                <div className="text-center">
                    <Map className="mx-auto h-12 w-12 text-slate-400 mb-2" />
                    <p className="text-sm text-slate-500">
                        Klik pada peta untuk memilih lokasi
                    </p>
                    {selectedLocation && (
                        <div className="mt-2 text-xs text-cyan-600">
                            <p>Lat: {selectedLocation.lat}</p>
                            <p>Lng: {selectedLocation.lng}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-2">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowMap(false)}
                    className="flex-1"
                >
                    Batal
                </Button>
                <Button
                    type="button"
                    onClick={() => {
                        // Mock coordinates for demo
                        const mockCoords = { lat: -3.8890, lng: 115.6308 };
                        setFormData(prev => ({
                            ...prev,
                            latitude: mockCoords.lat.toString(),
                            longitude: mockCoords.lng.toString()
                        }));
                        setSelectedLocation(mockCoords);
                        setShowMap(false);
                    }}
                    className="flex-1 bg-cyan-600 hover:bg-cyan-700"
                >
                    Pilih Lokasi
                </Button>
            </div>
        </div>
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) setError("");
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            type_location: value
        }));
        if (error) setError("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Validation
        const requiredFields: (keyof FormData)[] = ['name', 'username', 'password', 'phone', 'address', 'type_location'];
        const emptyFields = requiredFields.filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            setError("Semua field harus diisi");
            setLoading(false);
            return;
        }

        if (!formData.latitude || !formData.longitude) {
            setError("Silakan pilih lokasi pada peta");
            setLoading(false);
            return;
        }

        if (formData.phone && !formData.phone.startsWith('08')) {
            setError("Nomor WhatsApp harus dimulai dengan 08");
            setLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log("Register data:", formData);

            // Redirect to login page
            // router.push("/login");

        } catch (err) {
            setError("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
        } finally {
            setLoading(false);
        }
    };

    const getLocationTypeIcon = (type: string) => {
        switch (type) {
            case "Rumah Tinggal": return <Home size={16} />;
            case "Komersil": return <Building size={16} />;
            case "Sosial": return <Users size={16} />;
            default: return <MapPin size={16} />;
        }
    };

    return (
        <div className="min-h-screen  bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-8 px-4">
            <div className="max-w-2xl mt-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo and Brand */}
                    <div className="text-center mb-8">
                        <motion.div
                            whileHover={{ rotate: 15 }}
                            className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-full mb-4"
                        >
                            <Droplets size={32} className="text-white" />
                        </motion.div>
                        <h1 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-2">
                            SISENJA
                        </h1>
                        <p className="text-muted-foreground">
                            Sistem Informasi Layanan Sedot Tinja
                        </p>
                    </div>

                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl text-cyan-700 dark:text-cyan-400">
                                Daftar Akun Baru
                            </CardTitle>
                            <CardDescription>
                                Lengkapi data diri Anda untuk mendaftar
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <Alert variant="destructive">
                                        <AlertDescription>{error}</AlertDescription>
                                    </Alert>
                                )}

                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 border-b pb-2">
                                        Informasi Pribadi
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nama Lengkap</Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Masukkan nama lengkap"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="pl-10 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">No WhatsApp</Label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="08xxxxxxxxxx"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="pl-10 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Location Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 border-b pb-2">
                                        Informasi Lokasi
                                    </h3>

                                    <div className="space-y-2">
                                        <Label htmlFor="type_location">Jenis Lokasi</Label>
                                        <Select value={formData.type_location} onValueChange={handleSelectChange}>
                                            <SelectTrigger className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500">
                                                <div className="flex items-center gap-2">
                                                    {getLocationTypeIcon(formData.type_location)}
                                                    <SelectValue placeholder="Pilih jenis lokasi" />
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Rumah Tinggal">
                                                    <div className="flex items-center gap-2">
                                                        <Home size={16} />
                                                        Rumah Tinggal
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="Komersil">
                                                    <div className="flex items-center gap-2">
                                                        <Building size={16} />
                                                        Komersil
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="Sosial">
                                                    <div className="flex items-center gap-2">
                                                        <Users size={16} />
                                                        Sosial
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="address">Alamat Lengkap</Label>
                                        <Textarea
                                            id="address"
                                            name="address"
                                            placeholder="Masukkan alamat lengkap"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500 min-h-[100px]"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Pilih Lokasi pada Peta</Label>
                                        {!showMap ? (
                                            <div className="flex items-center justify-between p-4 border-2 border-dashed border-cyan-200 rounded-lg">
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <MapPin size={16} />
                                                    <span className="text-sm">
                                                        {formData.latitude && formData.longitude
                                                            ? `Lokasi dipilih (${formData.latitude}, ${formData.longitude})`
                                                            : "Belum memilih lokasi"
                                                        }
                                                    </span>
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setShowMap(true)}
                                                    className="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                                                >
                                                    <Map size={16} className="mr-2" />
                                                    Pilih Lokasi
                                                </Button>
                                            </div>
                                        ) : (
                                            <MapSelector />
                                        )}
                                    </div>
                                </div>

                                {/* Account Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 border-b pb-2">
                                        Informasi Akun
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="username">Username</Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    placeholder="Masukkan username"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    className="pl-10 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="password">Password</Label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    id="password"
                                                    name="password"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Masukkan password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="pl-10 pr-10 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                                                >
                                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Mendaftar...
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <UserPlus size={16} />
                                                Daftar Sekarang
                                            </div>
                                        )}
                                    </Button>
                                </motion.div>

                                <div className="text-center pt-4">
                                    <p className="text-sm text-muted-foreground">
                                        Sudah punya akun?{" "}
                                        <Link
                                            href="/login"
                                            className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline"
                                        >
                                            Masuk sekarang
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="text-center mt-6">
                        <p className="text-xs text-muted-foreground">
                            © 2025 SISENJA. Sistem Informasi Layanan Sedot Tinja.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}