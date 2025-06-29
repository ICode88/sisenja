"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    MapPin,
    Camera,
    CreditCard,
    CheckCircle2,
    AlertCircle,
    Download,
    FileText,
    ArrowRight,
    Upload,
    Home,
    Phone,
    Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Img } from "@/components/ui/img";

const requirements = [
    {
        icon: MapPin,
        title: "Share Lokasi Rumah",
        description: "Koordinat GPS lokasi rumah yang akurat untuk memudahkan tim teknis dalam survei dan instalasi",
        details: [
            "Buka aplikasi Google Maps di smartphone Anda",
            "Cari lokasi rumah Anda dengan tepat",
            "Tekan dan tahan pada titik lokasi rumah",
            "Salin koordinat yang muncul (contoh: -3.123456, 115.654321)",
            "Kirimkan koordinat tersebut saat pendaftaran"
        ],
        color: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900",
        iconColor: "text-green-600 dark:text-green-400",
        tips: "Pastikan lokasi yang dibagikan adalah titik yang mudah diakses oleh kendaraan tim teknis"
    },
    {
        icon: Camera,
        title: "Foto Manhole Septik Tank",
        description: "Dokumentasi visual kondisi manhole septik tank yang ada di rumah Anda",
        details: [
            "Ambil foto manhole (lubang akses) septik tank dari berbagai sudut",
            "Pastikan foto menunjukkan kondisi tutup manhole dengan jelas",
            "Foto harus menampakkan area sekitar manhole",
            "Gunakan pencahayaan yang cukup untuk hasil foto yang jelas",
            "Format foto: JPG/PNG, maksimal 5MB per foto"
        ],
        color: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900",
        iconColor: "text-blue-600 dark:text-blue-400",
        tips: "Jika tidak memiliki septik tank, foto dapat diganti dengan foto area yang akan dibangun instalasi"
    },
    {
        icon: CreditCard,
        title: "Kartu Tanda Penduduk (KTP)",
        description: "Identitas resmi sebagai bukti kependudukan dan kepemilikan rumah",
        details: [
            "KTP asli dan fotokopi yang masih berlaku",
            "KTP harus atas nama pemilik rumah atau penghuni tetap",
            "Pastikan alamat di KTP sesuai dengan lokasi rumah",
            "Jika alamat berbeda, sertakan surat keterangan domisili",
            "Scan/foto KTP dengan resolusi tinggi dan jelas terbaca"
        ],
        color: "bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950 dark:to-yellow-900",
        iconColor: "text-amber-600 dark:text-amber-400",
        tips: "Pastikan semua informasi di KTP terbaca dengan jelas dalam foto/scan"
    }
];

const additionalDocs = [
    {
        title: "Surat Kepemilikan Rumah",
        description: "Sertifikat rumah, IMB, atau surat kontrak sewa (minimal 1 tahun)",
        required: false
    },
    {
        title: "Kartu Keluarga (KK)",
        description: "Untuk verifikasi anggota keluarga yang tinggal di rumah",
        required: false
    },
    {
        title: "Surat Keterangan RT/RW",
        description: "Konfirmasi dari RT/RW setempat tentang domisili",
        required: false
    }
];

const processSteps = [
    {
        step: 1,
        title: "Persiapan Dokumen",
        description: "Siapkan semua persyaratan yang diperlukan sesuai checklist"
    },
    {
        step: 2,
        title: "Pengajuan Online",
        description: "Submit formulir pendaftaran melalui website SISENJA"
    },
    {
        step: 3,
        title: "Verifikasi Data",
        description: "Tim kami akan memverifikasi kelengkapan dokumen (1-2 hari)"
    },
    {
        step: 4,
        title: "Survei Lokasi",
        description: "Tim teknis melakukan survei ke lokasi rumah Anda"
    },
    {
        step: 5,
        title: "Instalasi",
        description: "Pemasangan sistem pengelolaan air limbah domestik"
    }
];

export default function PersyaratanPage() {
    const [activeTab, setActiveTab] = useState("persyaratan");

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg"
                        alt="Requirements background"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            Persyaratan Pendaftaran
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-blue-100 mb-10"
                        >
                            Informasi lengkap tentang persyaratan dan dokumen yang diperlukan
                            untuk mendaftar sebagai pelanggan baru layanan pengelolaan air limbah domestik
                        </motion.p>
                    </div>
                </div>

                <WaveDivider color="fill-white dark:fill-background" height={80} />
            </section>
                    <Img color="fill-white dark:fill-background" height={30} />
            

            {/* Main Content */}
            <section className="py-20 bg-white dark:bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
                            <div className="flex justify-center items-center mb-12">
                                {/* Mobile: Dropdown Select */}
                                <div className="md:hidden w-full">
                                    <Select defaultValue="persyaratan" onValueChange={(value) => setActiveTab(value)}>
                                        <SelectTrigger className="w-full bg-cyan-50 dark:bg-cyan-900 border-cyan-200 dark:border-cyan-800">
                                            <SelectValue placeholder="Pilih Kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="persyaratan">Persyaratan Utama</SelectItem>
                                            <SelectItem value="proses">Proses Pendaftaran</SelectItem>
                                            <SelectItem value="bantuan">Bantuan & Tips</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Desktop: Traditional Tabs */}
                                <div className="hidden md:block">
                                    <TabsList className="bg-cyan-100 dark:bg-cyan-900/50">
                                        <TabsTrigger value="persyaratan">Persyaratan Utama</TabsTrigger>
                                        <TabsTrigger value="proses">Proses Pendaftaran</TabsTrigger>
                                        <TabsTrigger value="bantuan">Bantuan & Tips</TabsTrigger>
                                    </TabsList>
                                </div>

                            </div>

                            <TabsContent value="persyaratan">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                                            Persyaratan Wajib
                                        </h2>
                                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                            Tiga dokumen utama yang harus Anda siapkan untuk mendaftar sebagai pelanggan baru
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                                        {requirements.map((req, index) => {
                                            const Icon = req.icon;
                                            return (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Card className={`h-full hover-card-lift ${req.color}`}>
                                                        <CardHeader>
                                                            <div className="flex items-center justify-between mb-4">
                                                                <div className={`p-3 rounded-lg bg-white/25 dark:bg-black/10`}>
                                                                    <Icon className={`h-6 w-6 ${req.iconColor}`} />
                                                                </div>
                                                                <Badge variant="secondary" className="bg-white/20 text-foreground">
                                                                    Wajib
                                                                </Badge>
                                                            </div>
                                                            <CardTitle className="text-xl text-foreground">{req.title}</CardTitle>
                                                            <CardDescription className="text-muted-foreground">
                                                                {req.description}
                                                            </CardDescription>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <div className="space-y-3 mb-4">
                                                                {req.details.map((detail, i) => (
                                                                    <div key={i} className="flex items-start">
                                                                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                                                                        <span className="text-sm text-muted-foreground">{detail}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <Alert>
                                                                <AlertCircle className="h-4 w-4" />
                                                                <AlertDescription className="text-xs">
                                                                    <strong>Tips:</strong> {req.tips}
                                                                </AlertDescription>
                                                            </Alert>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {/* Additional Documents */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="mb-12"
                                    >
                                        <h3 className="text-2xl font-bold mb-6 text-center text-cyan-900 dark:text-cyan-50">
                                            Dokumen Pendukung (Opsional)
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {additionalDocs.map((doc, index) => (
                                                <Card key={index} className="hover-card-lift">
                                                    <CardContent className="p-6">
                                                        <div className="flex items-start">
                                                            <FileText className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                                                            <div>
                                                                <h4 className="font-semibold mb-2">{doc.title}</h4>
                                                                <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                                                                <Badge variant={doc.required ? "default" : "secondary"} className="text-xs">
                                                                    {doc.required ? "Wajib" : "Opsional"}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* CTA */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-center"
                                    >
                                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                                                Siap Mendaftar?
                                            </h3>
                                            <p className="text-lg text-muted-foreground mb-6">
                                                Pastikan semua persyaratan sudah lengkap sebelum mengajukan pendaftaran
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                <Button
                                                    size="lg"
                                                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                                                    asChild
                                                >
                                                    <Link href="/layanan/pendaftaran">
                                                        Daftar Sekarang
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="lg"
                                                    className="border-cyan-600 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/30"
                                                    asChild
                                                >
                                                    <Link href="/kontak">
                                                        Butuh Bantuan?
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="proses">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                                            Alur Proses Pendaftaran
                                        </h2>
                                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                            Langkah-langkah yang akan Anda lalui dari pendaftaran hingga instalasi selesai
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-200 dark:bg-cyan-800" />
                                        {processSteps.map((step, index) => (
                                            <div key={index} className="relative mb-12">
                                                <div className="flex items-center">
                                                    <div className="w-1/2 pr-8 text-right">
                                                        {index % 2 === 0 && (
                                                            <motion.div
                                                                initial={{ opacity: 0, x: 20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.1 }}
                                                            >
                                                                <Card className="hover-card-lift">
                                                                    <CardContent className="p-6">
                                                                        <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg mb-2">
                                                                            Langkah {step.step}
                                                                        </div>
                                                                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                                                        <p className="text-muted-foreground">{step.description}</p>
                                                                    </CardContent>
                                                                </Card>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-500 dark:bg-cyan-400 flex items-center justify-center text-white font-bold z-10">
                                                        {step.step}
                                                    </div>
                                                    <div className="w-1/2 pl-8">
                                                        {index % 2 === 1 && (
                                                            <motion.div
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.1 }}
                                                            >
                                                                <Card className="hover-card-lift">
                                                                    <CardContent className="p-6">
                                                                        <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg mb-2">
                                                                            Langkah {step.step}
                                                                        </div>
                                                                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                                                        <p className="text-muted-foreground">{step.description}</p>
                                                                    </CardContent>
                                                                </Card>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="bantuan">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                                            Bantuan & Tips
                                        </h2>
                                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                            Panduan dan tips untuk memudahkan proses pendaftaran Anda
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                        <Card className="hover-card-lift">
                                            <CardHeader>
                                                <CardTitle className="flex items-center">
                                                    <Camera className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2" />
                                                    Tips Mengambil Foto
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li>• Gunakan pencahayaan alami (siang hari)</li>
                                                    <li>• Pastikan foto tidak blur atau buram</li>
                                                    <li>• Ambil dari beberapa sudut yang berbeda</li>
                                                    <li>• Hindari bayangan yang menutupi objek</li>
                                                    <li>• Format JPG/PNG, maksimal 5MB</li>
                                                </ul>
                                            </CardContent>
                                        </Card>

                                        <Card className="hover-card-lift">
                                            <CardHeader>
                                                <CardTitle className="flex items-center">
                                                    <MapPin className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2" />
                                                    Tips Share Lokasi
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li>• Pastikan GPS smartphone aktif</li>
                                                    <li>• Berdiri tepat di depan rumah</li>
                                                    <li>• Tunggu hingga lokasi akurat terdeteksi</li>
                                                    <li>• Salin koordinat dengan lengkap</li>
                                                    <li>• Cek kembali di Google Maps</li>
                                                </ul>
                                            </CardContent>
                                        </Card>

                                        <Card className="hover-card-lift">
                                            <CardHeader>
                                                <CardTitle className="flex items-center">
                                                    <Upload className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2" />
                                                    Format Dokumen
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li>• Scan/foto dengan resolusi tinggi</li>
                                                    <li>• Pastikan semua teks terbaca jelas</li>
                                                    <li>• Hindari refleksi cahaya pada dokumen</li>
                                                    <li>• Crop foto agar fokus pada dokumen</li>
                                                    <li>• Simpan dalam format PDF atau JPG</li>
                                                </ul>
                                            </CardContent>
                                        </Card>

                                        <Card className="hover-card-lift">
                                            <CardHeader>
                                                <CardTitle className="flex items-center">
                                                    <AlertCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2" />
                                                    Hal yang Perlu Diperhatikan
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li>• Pastikan semua data sesuai dan akurat</li>
                                                    <li>• Siapkan nomor telepon yang aktif</li>
                                                    <li>• Alamat email yang valid untuk notifikasi</li>
                                                    <li>• Koordinasikan waktu survei dengan tim</li>
                                                    <li>• Siapkan akses ke area septik tank</li>
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-2xl">
                                        <h3 className="text-2xl font-bold mb-6 text-center text-cyan-900 dark:text-cyan-50">
                                            Butuh Bantuan Lebih Lanjut?
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 inline-flex mb-3">
                                                    <Phone className="h-6 w-6" />
                                                </div>
                                                <h4 className="font-semibold mb-1">Telepon</h4>
                                                <p className="text-muted-foreground"> (+62) 821 5505 5167</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 inline-flex mb-3">
                                                    <Mail className="h-6 w-6" />
                                                </div>
                                                <h4 className="font-semibold mb-1">Email</h4>
                                                <p className="text-muted-foreground">info@sipald-tanbu.go.id</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 inline-flex mb-3">
                                                    <Home className="h-6 w-6" />
                                                </div>
                                                <h4 className="font-semibold mb-1">Kantor</h4>
                                                <p className="text-muted-foreground">Senin-Jumat, 08.00-16.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    );
}