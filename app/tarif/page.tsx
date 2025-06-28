"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, CircleDollarSign, Building2, Building,HelpCircle, Factory, School, GraduationCap, Landmark, Calculator } from "lucide-react";
import Image from "next/image";
import { WaveDivider } from "@/components/ui/wave-divider";
import { SelectItem, SelectTrigger, SelectContent, SelectValue, Select } from "@/components/ui/select";

export default function TarifPage() {
  const [zona, setZona] = useState("zona1");
  const [volume, setVolume] = useState(10);
  const [tarif, setTarif] = useState(0);
  const [tabValue, setTabValue] = useState("zona");

  const tarifData = {
    zona1: {
      label: "Zona I (0 km - 3 km)",
      tarif: 350000,
      icon: Home
    },
    zona2: {
      label: "Zona II (>1 km sd 6 km)",
      tarif: 400000,
      icon: Building2
    },
    zona3: {
      label: "Zona III (>1 km - 10 km)",
      tarif: 450000,
      icon: Building
    },
    zona4: {
      label: "Zona IV (>10 km - 15 km)",
      tarif: 500000,
      icon: Factory
    },
    institusi: {
      label: "Institusi Penyelenggara (Milik Pemerintah)",
      tarif: 65000,
      icon: School
    }
  };

  const handleCalculate = () => {
    const baseTarif = tarifData[zona as keyof typeof tarifData].tarif;
    const calculatedTarif = baseTarif * volume;
    setTarif(calculatedTarif);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Water background"
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

      {/* Tarif Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex justify-between items-center flex-col md:flex-row gap-6">
              <h2 className="text-3xl font-bold text-cyan-900">
                Struktur Tarif Pelayanan
              </h2>
              {/* Mobile: Dropdown Select */}
              <div className="md:hidden w-full">
                <select
                  value={tabValue}
                  onChange={(e) => setTabValue(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-cyan-50"
                >
                  <option value="zona">Berdasarkan Zona</option>
                  <option value="jenis">Jenis Kegiatan</option>
                  <option value="layanan">Tarif Layanan</option>
                </select>
              </div>
              {/* Desktop: Traditional Tabs */}
              <div className="hidden md:flex bg-cyan-100 rounded-lg p-1">
                <button
                  onClick={() => setTabValue("zona")}
                  className={`px-4 py-2 rounded-md transition-colors ${tabValue === "zona" ? "bg-white shadow-sm text-cyan-900" : "text-cyan-700 hover:text-cyan-900"}`}
                >
                  Berdasarkan Zona
                </button>
                <button
                  onClick={() => setTabValue("jenis")}
                  className={`px-4 py-2 rounded-md transition-colors ${tabValue === "jenis" ? "bg-white shadow-sm text-cyan-900" : "text-cyan-700 hover:text-cyan-900"}`}
                >
                  Jenis Kegiatan
                </button>
                <button
                  onClick={() => setTabValue("layanan")}
                  className={`px-4 py-2 rounded-md transition-colors ${tabValue === "layanan" ? "bg-white shadow-sm text-cyan-900" : "text-cyan-700 hover:text-cyan-900"}`}
                >
                  Tarif Layanan
                </button>
              </div>
            </div>

            {tabValue === "zona" && (
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold">Tarif Berdasarkan Zona Pelayanan</h3>
                  <p className="text-gray-600 mt-1">
                    Penyesuaian tarif berdasarkan jarak zona pelayanan
                  </p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">No</th>
                          <th className="text-left py-3 px-4">Zona</th>
                          <th className="text-left py-3 px-4">Sarana</th>
                          <th className="text-right py-3 px-4">Biaya Tarif (Rp)</th>
                          <th className="text-left py-3 px-4">Subjek/Program</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">1</td>
                          <td className="py-4 px-4 font-medium">Zona I (0 km - 3 km)</td>
                          <td className="py-4 px-4">per m³</td>
                          <td className="py-4 px-4 text-right">Rp 350.000</td>
                          <td className="py-4 px-4 text-sm">
                            Perusuhaan/DUMN/Perbankan/Industri/Komersil<br />
                            Perdagangan dan Perkotaan<br />
                            Fungsi Hibaran, Olahraga dan Seni<br />
                            Permukiman Milik Pemerintah/Institusi Vertikal<br />
                            Kesehatan/Puskesmas/RS/Poliklinik
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">2</td>
                          <td className="py-4 px-4 font-medium">Zona II (&gt;1 km sd 6 km)</td>
                          <td className="py-4 px-4">per m³</td>
                          <td className="py-4 px-4 text-right">Rp 400.000</td>
                          <td className="py-4 px-4 text-sm">
                            Perusuhaan/DUMN/Perbankan/Industri/Komersil<br />
                            Perdagangan dan Perkotaan<br />
                            Fungsi Hibaran, Olahraga dan Seni<br />
                            Permukiman Milik Pemerintah/Institusi Vertikal<br />
                            Kesehatan/Puskesmas/RS/Poliklinik
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">3</td>
                          <td className="py-4 px-4 font-medium">Zona III (&gt;1 km - 10 km)</td>
                          <td className="py-4 px-4">per m³</td>
                          <td className="py-4 px-4 text-right">Rp 450.000</td>
                          <td className="py-4 px-4 text-sm">
                            Perusuhaan/DUMN/Perbankan/Industri/Komersil<br />
                            Perdagangan dan Perkotaan<br />
                            Fungsi Hibaran, Olahraga dan Seni<br />
                            Permukiman Milik Pemerintah/Institusi Vertikal<br />
                            Kesehatan/Puskesmas/RS/Poliklinik
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">4</td>
                          <td className="py-4 px-4 font-medium">Zona IV (&gt;10 km - 15 km)</td>
                          <td className="py-4 px-4">per m³</td>
                          <td className="py-4 px-4 text-right">Rp 500.000</td>
                          <td className="py-4 px-4 text-sm">
                            Perusuhaan/DUMN/Perbankan/Industri/Komersil<br />
                            Perdagangan dan Perkotaan<br />
                            Fungsi Hibaran, Olahraga dan Seni<br />
                            Permukiman Milik Pemerintah/Institusi Vertikal<br />
                            Kesehatan/Puskesmas/RS/Poliklinik
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">5</td>
                          <td className="py-4 px-4 font-medium">Institusi Penyelenggara (Milik Pemerintah)</td>
                          <td className="py-4 px-4">per m³</td>
                          <td className="py-4 px-4 text-right">Rp 65.000</td>
                          <td className="py-4 px-4 text-sm">
                            Milik swasta penyelenggaraan jasa<br />
                            pelayanan penyedotan air limbah dalam<br />
                            daerah
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {tabValue === "jenis" && (
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold">Jenis Kegiatan Pelayanan</h3>
                  <p className="text-gray-600 mt-1">
                    Kategori kegiatan berdasarkan subjek dan program pelayanan
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-cyan-900">Sektor Komersial & Industri</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Building className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 flex-shrink-0" />
                          Perusahaan/DUMN/Perbankan/Industri/Komersil
                        </li>
                        <li className="flex items-start">
                          <Building2 className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 flex-shrink-0" />
                          Perdagangan dan Perkotaan
                        </li>
                        <li className="flex items-start">
                          <Factory className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 flex-shrink-0" />
                          Rumah Tangga/Permukiman
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-cyan-900">Sektor Publik & Sosial</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <GraduationCap className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 flex-shrink-0" />
                          Fungsi Hiburan, Olahraga dan Seni
                        </li>
                        <li className="flex items-start">
                          <Home className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 flex-shrink-0" />
                          Permukiman Milik Pemerintah/Institusi Vertikal
                        </li>
                        <li className="flex items-start">
                          <Landmark className="h-4 w-4 mt-0.5 mr-2 text-cyan-600 flex-shrink-0" />
                          Kesehatan/Puskesmas/RS/Poliklinik
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tabValue === "layanan" && (
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold">Tarif Layanan Tambahan</h3>
                  <p className="text-gray-600 mt-1">
                    Layanan khusus dan biaya tambahan
                  </p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Jenis Layanan</th>
                          <th className="text-left py-3 px-4">Tarif</th>
                          <th className="text-left py-3 px-4">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">Penyedotan Terjadwal</td>
                          <td className="py-4 px-4">Rp. 350.000 - 500.000</td>
                          <td className="py-4 px-4">Berdasarkan zona</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">Penyedotan Darurat</td>
                          <td className="py-4 px-4">Rp. 500.000 - 650.000</td>
                          <td className="py-4 px-4">Berdasarkan zona + biaya darurat</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">Institusi Penyelenggara</td>
                          <td className="py-4 px-4">Rp. 65.000</td>
                          <td className="py-4 px-4">Per m³ untuk institusi pemerintah</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">Konsultasi Teknis</td>
                          <td className="py-4 px-4">Gratis</td>
                          <td className="py-4 px-4">Untuk pelanggan terdaftar</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tarif Calculator */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-cyan-900">
                  Kalkulator Estimasi Tarif
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Gunakan kalkulator ini untuk mengestimasi biaya layanan pengelolaan air limbah
                  berdasarkan zona pelayanan dan volume penggunaan
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-cyan-600" />
                    Kalkulator Tarif
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Isi data berikut untuk menghitung estimasi tarif
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Zona Pelayanan</label>
                    <Select value={zona} onValueChange={setZona}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih zona pelayanan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zona1">
                          <div className="flex items-center">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Zona I (0 km - 3 km)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona2">
                          <div className="flex items-center">
                            <Building2 className="mr-2 h-4 w-4" />
                            <span>Zona II (&gt;1 km sd 6 km)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona3">
                          <div className="flex items-center">
                            <Building className="mr-2 h-4 w-4" />
                            <span>Zona III (&gt;1 km - 10 km)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zona4">
                          <div className="flex items-center">
                            <Factory className="mr-2 h-4 w-4" />
                            <span>Zona IV (&gt;10 km - 15 km)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="institusi">
                          <div className="flex items-center">
                            <School className="mr-2 h-4 w-4" />
                            <span>Institusi Penyelenggara</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Volume (m³)</label>
                    <input
                      type="number"
                      min="1"
                      value={volume}
                      onChange={(e) => setVolume(parseInt(e.target.value) || 0)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="p-6 border-t">
                  <button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    Hitung Estimasi
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-white/20">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CircleDollarSign className="h-5 w-5" />
                    Hasil Perhitungan
                  </h3>
                  <p className="text-blue-100 mt-1">
                    Estimasi biaya layanan
                  </p>
                </div>
                <div className="p-6 space-y-4">
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
                      <span>Rp. {tarifData[zona as keyof typeof tarifData].tarif.toLocaleString()} / m³</span>
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
                </div>
                <div className="p-6 border-t border-white/20 text-xs text-blue-100 italic">
                  * Estimasi ini hanya perhitungan awal dan dapat berbeda dengan tarif aktual sesuai dengan kondisi sebenarnya.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center p-2 bg-cyan-100 rounded-full mb-4">
                <HelpCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-cyan-900">
                Pertanyaan Umum Seputar Tarif
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Jawaban untuk pertanyaan yang sering diajukan terkait tarif dan pelayanan
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-4">
                {[
                  {
                    question: "Bagaimana penentuan zona pelayanan?",
                    answer: "Zona pelayanan ditentukan berdasarkan jarak dari lokasi pelayanan ke instalasi pengolahan. Semakin jauh jaraknya, semakin tinggi tarif yang dikenakan karena biaya transportasi dan operasional yang lebih besar."
                  },
                  {
                    question: "Apakah ada perbedaan tarif untuk institusi pemerintah?",
                    answer: "Ya, institusi penyelenggara milik pemerintah mendapat tarif khusus sebesar Rp. 65.000 per m³, yang lebih rendah dibandingkan tarif zona reguler."
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
                  <details key={index} className="bg-gray-50 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-cyan-900 hover:bg-gray-100 rounded-lg">
                      {faq.question}
                    </summary>
                    <div className="p-4 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}