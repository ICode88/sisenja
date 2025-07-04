"use client"
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, CircleDollarSign, Building2, Building, HelpCircle, Factory, School, GraduationCap, Landmark, Calculator, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Img } from "@/components/ui/img";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TarifItem {
  label: string;
  tarif: number;
  zona: string;
  icon: typeof Building;
}

interface TarifData {
  [key: string]: TarifItem;
}

interface ZonaGroups {
  zona1: Array<{ key: string } & TarifItem>;
  zona2: Array<{ key: string } & TarifItem>;
  zona3: Array<{ key: string } & TarifItem>;
  zona4: Array<{ key: string } & TarifItem>;
  institusi: Array<{ key: string } & TarifItem>;
}

export default function TarifPage() {
  const [zona, setZona] = useState<string>("zona1_perusahaan");
  const [volume, setVolume] = useState<number>(10);
  const [tarif, setTarif] = useState<number>(0);
  const [tabValue, setTabValue] = useState<string>("zona");
  const [expandedZones, setExpandedZones] = useState<{ [key: string]: boolean }>({});

  const tarifData: TarifData = {
    // Zona I (0 km - 30 km)
    zona1_perusahaan: {
      label: "Zona I - Perusahaan/BUMN/Perbankan/Industri/Komersil",
      tarif: 350000,
      zona: "Zona I (0 km - 30 km)",
      icon: Building
    },
    zona1_perdagangan: {
      label: "Zona I - Perdagangan dan Pertokoan",
      tarif: 350000,
      zona: "Zona I (0 km - 30 km)",
      icon: Building2
    },
    zona1_perhotelan: {
      label: "Zona I - Perhotelan",
      tarif: 350000,
      zona: "Zona I (0 km - 30 km)",
      icon: Building
    },
    zona1_hiburan: {
      label: "Zona I - Tempat Hiburan, Olahraga dan Seni",
      tarif: 350000,
      zona: "Zona I (0 km - 30 km)",
      icon: GraduationCap
    },
    zona1_perkantoran: {
      label: "Zona I - Perkantoran Milik Pemerintah/Instansi Vertikal (Kejaksaan/TN. I/Polri)",
      tarif: 300000,
      zona: "Zona I (0 km - 30 km)",
      icon: Landmark
    },
    zona1_rumah: {
      label: "Zona I - Rumah Tangga/Rusunawa",
      tarif: 200000,
      zona: "Zona I (0 km - 30 km)",
      icon: Home
    },
    zona1_masyarakat: {
      label: "Zona I - Masyarakat yang mendapatkan bantuan program pembangunan tangki septik individual",
      tarif: 75000,
      zona: "Zona I (0 km - 30 km)",
      icon: Home
    },

    // Zona II (31 km - 60 km)
    zona2_perusahaan: {
      label: "Zona II - Perusahaan/BUMN/Perbankan/Industri/Komersil",
      tarif: 400000,
      zona: "Zona II (31 km - 60 km)",
      icon: Building
    },
    zona2_perdagangan: {
      label: "Zona II - Perdagangan dan Pertokoan",
      tarif: 400000,
      zona: "Zona II (31 km - 60 km)",
      icon: Building2
    },
    zona2_perhotelan: {
      label: "Zona II - Perhotelan",
      tarif: 400000,
      zona: "Zona II (31 km - 60 km)",
      icon: Building
    },
    zona2_hiburan: {
      label: "Zona II - Tempat Hiburan, Olahraga dan Seni",
      tarif: 400000,
      zona: "Zona II (31 km - 60 km)",
      icon: GraduationCap
    },
    zona2_perkantoran: {
      label: "Zona II - Perkantoran Milik Pemerintah/Instansi Vertikal (Kejaksaan/TN. I/Polri)",
      tarif: 350000,
      zona: "Zona II (31 km - 60 km)",
      icon: Landmark
    },
    zona2_rumah: {
      label: "Zona II - Rumah Tangga/Rusunawa",
      tarif: 250000,
      zona: "Zona II (31 km - 60 km)",
      icon: Home
    },
    zona2_masyarakat: {
      label: "Zona II - Masyarakat yang mendapatkan bantuan program pembangunan tangki septik individual",
      tarif: 100000,
      zona: "Zona II (31 km - 60 km)",
      icon: Home
    },

    // Zona III (61 km - 100 km)
    zona3_perusahaan: {
      label: "Zona III - Perusahaan/BUMN/Perbankan/Industri/Komersil",
      tarif: 450000,
      zona: "Zona III (61 km - 100 km)",
      icon: Building
    },
    zona3_perdagangan: {
      label: "Zona III - Perdagangan dan Pertokoan",
      tarif: 450000,
      zona: "Zona III (61 km - 100 km)",
      icon: Building2
    },
    zona3_perhotelan: {
      label: "Zona III - Perhotelan",
      tarif: 450000,
      zona: "Zona III (61 km - 100 km)",
      icon: Building
    },
    zona3_hiburan: {
      label: "Zona III - Tempat Hiburan, Olahraga dan Seni",
      tarif: 450000,
      zona: "Zona III (61 km - 100 km)",
      icon: GraduationCap
    },
    zona3_perkantoran: {
      label: "Zona III - Perkantoran Milik Pemerintah/Instansi Vertikal (Kejaksaan/TN. I/Polri)",
      tarif: 400000,
      zona: "Zona III (0 km - 30 km)",
      icon: Landmark
    },
    zona3_rumah: {
      label: "Zona III - Rumah Tangga/Rusunawa",
      tarif: 300000,
      zona: "Zona III (0 km - 30 km)",
      icon: Home
    },
    zona3_masyarakat: {
      label: "Zona III - Masyarakat yang mendapatkan bantuan program pembangunan tangki septik individual",
      tarif: 125000,
      zona: "Zona III (0 km - 30 km)",
      icon: Home
    },

    // Zona IV (101 km - 150 km)
    zona4_perusahaan: {
      label: "Zona IV - Perusahaan/BUMN/Perbankan/Industri/Komersil",
      tarif: 500000,
      zona: "Zona IV (101 km - 150 km)",
      icon: Building
    },
    zona4_perdagangan: {
      label: "Zona IV - Perdagangan dan Pertokoan",
      tarif: 500000,
      zona: "Zona IV (101 km - 150 km)",
      icon: Building2
    },
    zona4_perhotelan: {
      label: "Zona IV - Perhotelan",
      tarif: 500000,
      zona: "Zona IV (101 km - 150 km)",
      icon: Building
    },
    zona4_hiburan: {
      label: "Zona IV - Tempat Hiburan, Olahraga dan Seni",
      tarif: 500000,
      zona: "Zona IV (101 km - 150 km)",
      icon: GraduationCap
    },
    zona4_perkantoran: {
      label: "Zona IV - Perkantoran Milik Pemerintah/Instansi Vertikal (Kejaksaan/TN. I/Polri)",
      tarif: 450000,
      zona: "Zona IV (101 km - 150 km)",
      icon: Landmark
    },
    zona4_rumah: {
      label: "Zona IV - Rumah Tangga/Rusunawa",
      tarif: 350000,
      zona: "Zona IV (101 km - 150 km)",
      icon: Home
    },
    zona4_masyarakat: {
      label: "Zona IV - Masyarakat yang mendapatkan bantuan program pembangunan tangki septik individual",
      tarif: 150000,
      zona: "Zona IV (101 km - 150 km)",
      icon: Home
    },

    // Instalasi Pengolahan Lumpur Tinja milik Pemerintah Daerah
    institusi: {
      label: "Instalasi Pengolahan Lumpur Tinja milik Pemerintah Daerah",
      tarif: 50000,
      zona: "Institusi Pemerintah",
      icon: School
    }
  };

  const handleCalculate = (): void => {
    const baseTarif = tarifData[zona].tarif;
    const calculatedTarif = baseTarif * volume;
    setTarif(calculatedTarif);
  };

  const getZonaData = (): ZonaGroups => {
    const zonaGroups: ZonaGroups = {
      zona1: [],
      zona2: [],
      zona3: [],
      zona4: [],
      institusi: []
    };

    Object.entries(tarifData).forEach(([key, value]) => {
      if (key.startsWith('zona1_')) zonaGroups.zona1.push({ key, ...value });
      else if (key.startsWith('zona2_')) zonaGroups.zona2.push({ key, ...value });
      else if (key.startsWith('zona3_')) zonaGroups.zona3.push({ key, ...value });
      else if (key.startsWith('zona4_')) zonaGroups.zona4.push({ key, ...value });
      else if (key === 'institusi') zonaGroups.institusi.push({ key, ...value });
    });

    return zonaGroups;
  };

  const toggleZone = (zoneKey: string) => {
    setExpandedZones(prev => ({
      ...prev,
      [zoneKey]: !prev[zoneKey]
    }));
  };

  const zonaGroups = getZonaData();

  const zoneConfigs = [
    {
      key: 'zona1',
      title: 'Zona I (0 km - 30 km)',
      description: 'Tarif berdasarkan kategori layanan zona terdekat',
      bgColor: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
      textColor: 'text-green-800 dark:text-green-200',
      descColor: 'text-green-600 dark:text-green-400',
      data: zonaGroups.zona1
    },
    {
      key: 'zona2',
      title: 'Zona II (31 km - 60 km)',
      description: 'Tarif berdasarkan kategori layanan zona menengah',
      bgColor: 'from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900',
      textColor: 'text-yellow-800 dark:text-yellow-200',
      descColor: 'text-yellow-600 dark:text-yellow-400',
      data: zonaGroups.zona2
    },
    {
      key: 'zona3',
      title: 'Zona III (61 km - 100 km)',
      description: 'Tarif berdasarkan kategori layanan zona jauh',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
      textColor: 'text-blue-800 dark:text-blue-200',
      descColor: 'text-blue-600 dark:text-blue-400',
      data: zonaGroups.zona3
    },
    {
      key: 'zona4',
      title: 'Zona IV (101 km - 150 km)',
      description: 'Tarif berdasarkan kategori layanan zona terjauh',
      bgColor: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
      textColor: 'text-purple-800 dark:text-purple-200',
      descColor: 'text-purple-600 dark:text-purple-400',
      data: zonaGroups.zona4
    },
    {
      key: 'institusi',
      title: 'Instalasi Pengolahan Lumpur Tinja',
      description: 'Tarif khusus untuk institusi pemerintah',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900',
      textColor: 'text-orange-800 dark:text-orange-200',
      descColor: 'text-orange-600 dark:text-orange-400',
      data: zonaGroups.institusi
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Tarif background"
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
              Informasi Tarif Layanan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            >
              Informasi lengkap tentang tarif layanan pengelolaan air limbah domestik
              berdasarkan zona pelayanan dan jenis kegiatan.
            </motion.p>
          </div>
        </div>

        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>
      <Img color="fill-white dark:fill-background" height={30} />

      {/* Tarif Information */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex justify-between items-center flex-col md:flex-row gap-6">
              <h2 className="text-3xl font-bold text-cyan-900 dark:text-cyan-50">
                Struktur Tarif Pelayanan
              </h2>
              {/* Mobile: Dropdown Select */}
              <div className="md:hidden w-full">
                <Select value={tabValue} onValueChange={setTabValue}>
                  <SelectTrigger className="w-full bg-cyan-50 dark:bg-cyan-900 border-cyan-200 dark:border-cyan-800">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zona">Berdasarkan Zona</SelectItem>
                    <SelectItem value="jenis">Jenis Kegiatan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="hidden md:flex bg-cyan-100 dark:bg-cyan-900/50 rounded-lg p-1">
                <button
                  onClick={() => setTabValue("zona")}
                  className={`px-4 py-2 rounded-md transition-colors ${tabValue === "zona" ? "bg-white dark:bg-cyan-800 shadow-sm text-cyan-900 dark:text-cyan-100" : "text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100"}`}
                >
                  Berdasarkan Zona
                </button>
                <button
                  onClick={() => setTabValue("jenis")}
                  className={`px-4 py-2 rounded-md transition-colors ${tabValue === "jenis" ? "bg-white dark:bg-cyan-800 shadow-sm text-cyan-900 dark:text-cyan-100" : "text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100"}`}
                >
                  Jenis Kegiatan
                </button>
              </div>
            </div>

            {tabValue === "zona" && (
              <div className="space-y-4">
                {zoneConfigs.map((zone) => (
                  <motion.div
                    key={zone.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-card rounded-xl shadow-lg border border-border overflow-hidden"
                  >
                    <div
                      className={`p-6 bg-gradient-to-r ${zone.bgColor} cursor-pointer hover:opacity-90 transition-opacity`}
                      onClick={() => toggleZone(zone.key)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className={`text-xl font-semibold ${zone.textColor}`}>{zone.title}</h3>
                          <p className={`${zone.descColor} mt-1`}>{zone.description}</p>
                        </div>
                        <div className={`${zone.textColor} transition-transform duration-200 ${expandedZones[zone.key] ? 'rotate-180' : ''}`}>
                          <ChevronDown className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    {expandedZones[zone.key] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="p-6"
                      >
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-medium text-muted-foreground">No</th>
                                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Kategori</th>
                                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Satuan</th>
                                <th className="text-right py-3 px-4 font-medium text-muted-foreground">Tarif (Rp)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {zone.data.map((item, index) => (
                                <tr key={item.key} className="border-b border-border hover:bg-muted/50 transition-colors">
                                  <td className="py-4 px-4 font-medium">{index + 1}</td>
                                  <td className="py-4 px-4">
                                    {zone.key === 'institusi'
                                      ? item.label
                                      : item.label.replace(new RegExp(`${zone.title.split(' ')[0]} ${zone.title.split(' ')[1]} - `), '')
                                    }
                                  </td>
                                  <td className="py-4 px-4">per m³</td>
                                  <td className="py-4 px-4 text-right font-semibold">Rp {item.tarif.toLocaleString()}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {tabValue === "jenis" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-cyan-900 dark:text-cyan-50">Jenis Kegiatan Pelayanan</CardTitle>
                    <CardDescription>
                      Kategori kegiatan berdasarkan subjek dan program pelayanan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-cyan-900 dark:text-cyan-50">Sektor Komersial & Industri</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Building className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                            <span className="text-muted-foreground">Perusahaan/BUMN/Perbankan/Industri/Komersil</span>
                          </li>
                          <li className="flex items-start">
                            <Building2 className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                            <span className="text-muted-foreground">Perdagangan dan Pertokoan</span>
                          </li>
                          <li className="flex items-start">
                            <Building className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                            <span className="text-muted-foreground">Perhotelan</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-cyan-900 dark:text-cyan-50">Sektor Publik & Sosial</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <GraduationCap className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                            <span className="text-muted-foreground">Tempat Hiburan, Olahraga dan Seni</span>
                          </li>
                          <li className="flex items-start">
                            <Landmark className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                            <span className="text-muted-foreground">Perkantoran Milik Pemerintah/Instansi Vertikal</span>
                          </li>
                          <li className="flex items-start">
                            <Home className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                            <span className="text-muted-foreground">Rumah Tangga/Rusunawa</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Tarif Calculator */}
      <section className="py-20 bg-cyan-50 dark:bg-cyan-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                Kalkulator Estimasi Tarif
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gunakan kalkulator ini untuk mengestimasi biaya layanan pengelolaan air limbah
                berdasarkan zona pelayanan dan volume penggunaan
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-lg border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-900 dark:text-cyan-50">
                    <Calculator className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    Kalkulator Tarif
                  </CardTitle>
                  <CardDescription>
                    Isi data berikut untuk menghitung estimasi tarif
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Zona Pelayanan</label>
                    <Select value={zona} onValueChange={setZona}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih zona pelayanan" />
                      </SelectTrigger>
                      <SelectContent>
                        {/* Zona I Options */}
                        <SelectItem value="zona1_perusahaan">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona I - Perusahaan/BUMN/Industri</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona1_perdagangan">
                          <div className="flex items-center">
                            <Building2 className="mr-2 h-4 w-4" />
                            <span>Zona I - Perdagangan dan Pertokoan</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona1_perhotelan">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona I - Perhotelan</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona1_hiburan">
                          <div className="flex items-center">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Zona I - Tempat Hiburan, Olahraga dan Seni</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona1_perkantoran">
                          <div className="flex items-center">
                            <Landmark className="mr-2 h-4 w-4" />
                            <span>Zona I - Perkantoran Pemerintah</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona1_rumah">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona I - Rumah Tangga</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona1_masyarakat">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona I - Bantuan Program Tangki Septik</span>
                          </div>
                        </SelectItem>

                        {/* Zona II Options */}
                        <SelectItem value="zona2_perusahaan">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona II - Perusahaan/BUMN/Industri</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona2_perdagangan">
                          <div className="flex items-center">
                            <Building2 className="mr-2 h-4 w-4" />
                            <span>Zona II - Perdagangan dan Pertokoan</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona2_perhotelan">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona II - Perhotelan</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona2_hiburan">
                          <div className="flex items-center">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Zona II - Tempat Hiburan, Olahraga dan Seni</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona2_perkantoran">
                          <div className="flex items-center">
                            <Landmark className="mr-2 h-4 w-4" />
                            <span>Zona II - Perkantoran Pemerintah</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona2_rumah">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona II - Rumah Tangga</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona2_masyarakat">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona II - Bantuan Program Tangki Septik</span>
                          </div>
                        </SelectItem>

                        {/* Zona III Options */}
                        <SelectItem value="zona3_perusahaan">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona III - Perusahaan/BUMN/Industri</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona3_perdagangan">
                          <div className="flex items-center">
                            <Building2 className="mr-2 h-4 w-4" />
                            <span>Zona III - Perdagangan dan Pertokoan</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona3_perhotelan">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona III - Perhotelan</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona3_hiburan">
                          <div className="flex items-center">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Zona III - Tempat Hiburan, Olahraga dan Seni</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_perkantoran">
                          <div className="flex items-center">
                            <Landmark className="mr-2 h-4 w-4" />
                            <span>Zona III - Perkantoran Pemerintah</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_rumah">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona III - Rumah Tangga</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_masyarakat">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona III - Bantuan Program Tangki Septik</span>
                          </div>
                        </SelectItem>

                        {/* Zona IV Options */}
                        <SelectItem value="zona4_perusahaan">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona IV - Perusahaan/BUMN/Industri</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_perdagangan">
                          <div className="flex items-center">
                            <Building2 className="mr-2 h-4 w-4" />
                            <span>Zona IV - Perdagangan dan Pertokoan</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_perhotelan">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona IV - Perhotelan</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_hiburan">
                          <div className="flex items-center">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Zona IV - Tempat Hiburan, Olahraga dan Seni</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_perkantoran">
                          <div className="flex items-center">
                            <Landmark className="mr-2 h-4 w-4" />
                            <span>Zona IV - Perkantoran Pemerintah</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_rumah">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona IV - Rumah Tangga</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4_masyarakat">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona IV - Bantuan Program Tangki Septik</span>
                          </div>
                        </SelectItem>

                        {/* Institusi */}
                        <SelectItem value="institusi">
                          <div className="flex items-center">
                            <School className="mr-2 h-4 w-4" />
                            <span>Institusi Pemerintah</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Volume (m³)</label>
                    <Input
                      type="number"
                      min="1"
                      value={volume}
                      onChange={(e) => setVolume(parseInt(e.target.value) || 0)}
                      className="w-full"
                    />
                  </div>
                  <Button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                  >
                    Hitung Estimasi
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white shadow-lg border-0">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="h-5 w-5" />
                    Hasil Perhitungan
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Estimasi biaya layanan
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-sm text-blue-100 mb-2">Estimasi Biaya</div>
                      <div className="text-4xl font-bold">{tarif ? `Rp. ${tarif.toLocaleString()}` : '-'}</div>
                      <div className="text-xs text-blue-100 mt-1">total</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Tarif Dasar</span>
                      <span>Rp. {tarifData[zona].tarif.toLocaleString()} / m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Volume</span>
                      <span>{volume} m³</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 mt-2 flex justify-between font-medium">
                      <span>Total</span>
                      <span>{tarif ? `Rp. ${tarif.toLocaleString()}` : '-'}</span>
                    </div>
                  </div>
                  <div className="text-xs text-blue-100 italic">
                    * Estimasi ini hanya perhitungan awal dan dapat berbeda dengan tarif aktual sesuai dengan kondisi sebenarnya.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center p-2 bg-cyan-100 dark:bg-cyan-900/50 rounded-full mb-4">
                <HelpCircle className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                Pertanyaan Umum Seputar Tarif
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jawaban untuk pertanyaan yang sering diajukan terkait tarif dan pelayanan
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  question: "Bagaimana penentuan zona pelayanan?",
                  answer: "Zona pelayanan ditentukan berdasarkan jarak dari lokasi pelayanan ke instalasi pengolahan. Semakin jauh jaraknya, semakin tinggi tarif yang dikenakan karena biaya transportasi dan operasional yang lebih besar."
                },
                {
                  question: "Apakah ada perbedaan tarif untuk institusi pemerintah?",
                  answer: "Ya, institusi penyelenggara milik pemerintah mendapat tarif khusus sebesar Rp. 50.000 per m³, yang lebih rendah dibandingkan tarif zona reguler."
                },
                {
                  question: "Bagaimana cara pembayaran tarif layanan?",
                  answer: "Pembayaran dapat dilakukan melalui transfer bank, pembayaran langsung di kantor UPTD, atau melalui sistem pembayaran digital yang telah bekerja sama dengan kami."
                },
                {
                  question: "Apakah tarif dapat berubah?",
                  answer: "Ya, tarif dapat berubah sesuai dengan kebijakan pemerintah daerah dan kondisi operasional. Setiap perubahan akan diinformasikan kepada pelanggan minimal 30 hari sebelum diberlakukan."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-border">
                  <details className="group">
                    <summary className="p-4 cursor-pointer font-medium text-cyan-900 dark:text-cyan-50 hover:bg-muted/50 rounded-lg list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="p-4 pt-0 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}