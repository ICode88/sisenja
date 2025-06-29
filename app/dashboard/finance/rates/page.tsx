"use client";

import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, BarChart3, TrendingDown, ClipboardList } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Data tarif sesuai dengan halaman tarif home
const tarifData = {
    // Zona I (0 km - 30 km)
    zona1_perusahaan: { label: "Zona I - Perusahaan/BUMN/Perbankan/Industri/Komersil", tarif: 350000, zona: "Zona I (0 km - 30 km)" },
    zona1_perdagangan: { label: "Zona I - Perdagangan dan Perkotaan", tarif: 400000, zona: "Zona I (0 km - 30 km)" },
    zona1_perhotelan: { label: "Zona I - Perhotelan", tarif: 450000, zona: "Zona I (0 km - 30 km)" },
    zona1_hiburan: { label: "Zona I - Tempat Hiburan, Olahraga dan Seni", tarif: 500000, zona: "Zona I (0 km - 30 km)" },
    zona1_perkantoran: { label: "Zona I - Perkantoran Milik Pemerintah/Instansi Vertikal", tarif: 300000, zona: "Zona I (0 km - 30 km)" },
    zona1_rumah: { label: "Zona I - Rumah Tangga/Rusunawa", tarif: 200000, zona: "Zona I (0 km - 30 km)" },
    zona1_masyarakat: { label: "Zona I - Masyarakat yang mendapatkan bantuan program pembangunan tangki septik individual", tarif: 75000, zona: "Zona I (0 km - 30 km)" },

    // Zona II (31 km - 60 km)
    zona2_perusahaan: { label: "Zona II - Perusahaan/BUMN/Perbankan/Industri/Komersil", tarif: 400000, zona: "Zona II (31 km - 60 km)" },
    zona2_perdagangan: { label: "Zona II - Perdagangan dan Perkotaan", tarif: 450000, zona: "Zona II (31 km - 60 km)" },
    zona2_perhotelan: { label: "Zona II - Perhotelan", tarif: 500000, zona: "Zona II (31 km - 60 km)" },
    zona2_hiburan: { label: "Zona II - Tempat Hiburan, Olahraga dan Seni", tarif: 550000, zona: "Zona II (31 km - 60 km)" },
    zona2_perkantoran: { label: "Zona II - Perkantoran Milik Pemerintah/Instansi Vertikal", tarif: 350000, zona: "Zona II (31 km - 60 km)" },
    zona2_rumah: { label: "Zona II - Rumah Tangga/Rusunawa", tarif: 250000, zona: "Zona II (31 km - 60 km)" },
    zona2_masyarakat: { label: "Zona II - Masyarakat yang mendapatkan bantuan program pembangunan tangki septik individual", tarif: 100000, zona: "Zona II (31 km - 60 km)" },

    // Zona III (61 km - 100 km)
    zona3_perusahaan: { label: "Zona III - Perusahaan/BUMN/Perbankan/Industri/Komersil", tarif: 450000, zona: "Zona III (61 km - 100 km)" },
    zona3_perdagangan: { label: "Zona III - Perdagangan dan Perkotaan", tarif: 500000, zona: "Zona III (61 km - 100 km)" },
    zona3_perhotelan: { label: "Zona III - Perhotelan", tarif: 550000, zona: "Zona III (61 km - 100 km)" },
    zona3_hiburan: { label: "Zona III - Tempat Hiburan, Olahraga dan Seni", tarif: 600000, zona: "Zona III (61 km - 100 km)" },

    // Zona IV (101 km - 150 km)
    zona4_perusahaan: { label: "Zona IV - Perusahaan/BUMN/Perbankan/Industri/Komersil", tarif: 500000, zona: "Zona IV (101 km - 150 km)" },
    zona4_perdagangan: { label: "Zona IV - Perdagangan dan Perkotaan", tarif: 550000, zona: "Zona IV (101 km - 150 km)" },
    zona4_perhotelan: { label: "Zona IV - Perhotelan", tarif: 600000, zona: "Zona IV (101 km - 150 km)" },
    zona4_hiburan: { label: "Zona IV - Tempat Hiburan, Olahraga dan Seni", tarif: 650000, zona: "Zona IV (101 km - 150 km)" },
    zona4_perkantoran: { label: "Zona IV - Perkantoran Milik Pemerintah/Instansi Vertikal", tarif: 450000, zona: "Zona IV (101 km - 150 km)" },
    zona4_rumah: { label: "Zona IV - Rumah Tangga/Rusunawa", tarif: 300000, zona: "Zona IV (101 km - 150 km)" },
    zona4_masyarakat: { label: "Zona IV - Masyarakat yang mendapatkan bantuan program pembangunan tangki septik individual", tarif: 150000, zona: "Zona IV (101 km - 150 km)" },

    // Instalasi Pengolahan Lumpur Tinja milik Pemerintah Daerah
    institusi: { label: "Instalasi Pengolahan Lumpur Tinja milik Pemerintah Daerah", tarif: 50000, zona: "Institusi Pemerintah" }
};

export default function RatesPage() {
    const [selectedZona, setSelectedZona] = useState("zona1_perusahaan");
    const [volume, setVolume] = useState(10);
    const [calculatedCost, setCalculatedCost] = useState(0);

    const handleCalculate = () => {
        const baseTarif = tarifData[selectedZona as keyof typeof tarifData].tarif;
        const total = baseTarif * volume;
        setCalculatedCost(total);
    };

    // Statistik tarif
    const allTarifs = Object.values(tarifData).map(item => item.tarif);
    const minTarif = Math.min(...allTarifs);
    const maxTarif = Math.max(...allTarifs);
    const avgTarif = allTarifs.reduce((sum, tarif) => sum + tarif, 0) / allTarifs.length;

    // Group tarif by zona
    const zonaGroups = {
        zona1: Object.entries(tarifData).filter(([key]) => key.startsWith('zona1_')),
        zona2: Object.entries(tarifData).filter(([key]) => key.startsWith('zona2_')),
        zona3: Object.entries(tarifData).filter(([key]) => key.startsWith('zona3_')),
        zona4: Object.entries(tarifData).filter(([key]) => key.startsWith('zona4_')),
        institusi: Object.entries(tarifData).filter(([key]) => key === 'institusi')
    };

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Tarif Terendah</p>
                                <p className="text-2xl font-bold text-green-600">Rp {minTarif.toLocaleString()}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <TrendingDown className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Tarif Tertinggi</p>
                                <p className="text-2xl font-bold text-red-600">Rp {maxTarif.toLocaleString()}</p>
                            </div>
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-red-600" />

                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Rata-rata Tarif</p>
                                <p className="text-2xl font-bold text-blue-600">Rp {Math.round(avgTarif).toLocaleString()}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <BarChart3 className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600">Total Kategori</p>
                                <p className="text-2xl font-bold text-purple-600">{Object.keys(tarifData).length}</p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <ClipboardList className="h-6 w-6 text-purple-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            {/* Calculator */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calculator className="h-5 w-5 text-cyan-600" />
                            Kalkulator Tarif
                        </CardTitle>
                        <CardDescription>
                            Hitung estimasi biaya layanan berdasarkan zona dan volume
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium mb-2 block">Pilih Zona & Kategori</label>
                            <Select value={selectedZona} onValueChange={setSelectedZona}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(tarifData).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>
                                            {value.label.length > 50 
                                                ? `${value.label.substring(0, 50)}...` 
                                                : value.label
                                            }
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-2 block">Volume (m³)</label>
                            <Input
                                type="number"
                                min="1"
                                value={volume}
                                onChange={(e) => setVolume(parseInt(e.target.value) || 1)}
                                placeholder="Masukkan volume"
                            />
                        </div>

                        <Button 
                            onClick={handleCalculate}
                            className="w-full bg-cyan-600 hover:bg-cyan-700"
                        >
                            Hitung Estimasi
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-green-600" />
                            Hasil Perhitungan
                        </CardTitle>
                        <CardDescription>
                            Estimasi biaya berdasarkan tarif yang dipilih
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                                <div className="text-center">
                                    <p className="text-sm text-slate-600 mb-2">Total Estimasi Biaya</p>
                                    <p className="text-3xl font-bold text-cyan-600">
                                        {calculatedCost > 0 ? `Rp ${calculatedCost.toLocaleString()}` : '-'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Zona:</span>
                                    <Badge variant="outline">
                                        {tarifData[selectedZona as keyof typeof tarifData].zona}
                                    </Badge>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tarif Dasar:</span>
                                    <span>Rp {tarifData[selectedZona as keyof typeof tarifData].tarif.toLocaleString()} / m³</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Volume:</span>
                                    <span>{volume} m³</span>
                                </div>
                                <div className="border-t pt-2 flex justify-between font-semibold">
                                    <span>Total:</span>
                                    <span>{calculatedCost > 0 ? `Rp ${calculatedCost.toLocaleString()}` : '-'}</span>
                                </div>
                            </div>

                            <div className="text-xs text-slate-500 italic">
                                * Estimasi ini dapat berbeda dengan tarif aktual sesuai kondisi lapangan
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Tarif by Zone */}
            <Card>
                <CardHeader>
                    <CardTitle>Daftar Tarif Berdasarkan Zona</CardTitle>
                    <CardDescription>
                        Rincian tarif untuk setiap zona pelayanan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {Object.entries(zonaGroups).map(([zoneKey, items]) => (
                            <div key={zoneKey} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-lg mb-4 text-cyan-700">
                                    {zoneKey === 'institusi' ? 'Institusi Pemerintah' : 
                                     zoneKey === 'zona1' ? 'Zona I (0 km - 30 km)' :
                                     zoneKey === 'zona2' ? 'Zona II (31 km - 60 km)' :
                                     zoneKey === 'zona3' ? 'Zona III (61 km - 100 km)' :
                                     'Zona IV (101 km - 150 km)'}
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-2 px-4">No</th>
                                                <th className="text-left py-2 px-4">Kategori</th>
                                                <th className="text-right py-2 px-4">Tarif (Rp/m³)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map(([key, value], index) => (
                                                <tr key={key} className="border-b hover:bg-slate-50">
                                                    <td className="py-2 px-4">{index + 1}</td>
                                                    <td className="py-2 px-4">
                                                        {value.label.replace(/^Zona [IVX]+ - /, '')}
                                                    </td>
                                                    <td className="py-2 px-4 text-right font-semibold">
                                                        Rp {value.tarif.toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}