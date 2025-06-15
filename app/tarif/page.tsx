"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calculator,
  Home,
  Building,
  Building2,
  CalculatorIcon,
  GraduationCap,
  Landmark,
  CircleDollarSign,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WaveDivider } from "@/components/ui/wave-divider";

export default function TarifPage() {
  const [bangunan, setBangunan] = useState("rumah");
  const [volume, setVolume] = useState<number>(10);
  const [tarif, setTarif] = useState<number>(0);
  const [tabValue, setTabValue] = useState("kategori");

  const tarifData = {
    rumah: 15000,
    ruko: 25000,
    hotel: 35000,
    institusi: 20000,
    komersial: 30000,
  };

  const handleCalculate = () => {
    const baseTarif = tarifData[bangunan as keyof typeof tarifData];
    const calculatedTarif = baseTarif * volume;
    setTarif(calculatedTarif);
  };

  return (
    <>
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
              Informasi lengkap tentang tarif layanan layanan sedot tinja
              berdasarkan jenis bangunan dan volume penggunaan.
            </motion.p>
          </div>
        </div>

        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>

      {/* Tarif Information */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs value={tabValue} onValueChange={setTabValue} className="mb-12">

              <div className="mb-8 flex justify-between items-center flex-col md:flex-row gap-6">
                <h2 className="text-3xl font-bold text-cyan-900 dark:text-cyan-50">
                  Struktur Tarif
                </h2>
                {/* Mobile: Dropdown Select */}
                <div className="md:hidden w-full">
                  <Select defaultValue="kategori" onValueChange={(value) => setTabValue(value)}>
                    <SelectTrigger className="w-full bg-cyan-50 dark:bg-cyan-900/50">
                      <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kategori">Berdasarkan Kategori</SelectItem>
                      <SelectItem value="volume">Berdasarkan Volume</SelectItem>
                      <SelectItem value="layanan">Tarif Layanan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Desktop: Traditional Tabs */}
                <div className="hidden md:block">
                  <TabsList className="bg-cyan-100 dark:bg-cyan-900/50">
                    <TabsTrigger value="kategori">Berdasarkan Kategori</TabsTrigger>
                    <TabsTrigger value="volume">Berdasarkan Volume</TabsTrigger>
                    <TabsTrigger value="layanan">Tarif Layanan</TabsTrigger>
                  </TabsList>
                </div>

              </div>

              <TabsContent value="kategori">
                <Card>
                  <CardHeader>
                    <CardTitle>Tarif Berdasarkan Kategori Bangunan</CardTitle>
                    <CardDescription>
                      Penyesuaian tarif berdasarkan jenis dan kategori bangunan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Kategori</TableHead>
                          <TableHead>Jenis Bangunan</TableHead>
                          <TableHead className="text-right">Tarif Dasar (per m³)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Rumah Tangga</TableCell>
                          <TableCell>Rumah pribadi, Kos, Apartemen</TableCell>
                          <TableCell className="text-right">Rp. 15.000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Komersial Kecil</TableCell>
                          <TableCell>Ruko, Warung, Toko</TableCell>
                          <TableCell className="text-right">Rp. 25.000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Komersial Besar</TableCell>
                          <TableCell>Hotel, Mall, Restaurant</TableCell>
                          <TableCell className="text-right">Rp. 35.000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Institusi</TableCell>
                          <TableCell>Sekolah, Kampus, Kantor Pemerintah</TableCell>
                          <TableCell className="text-right">Rp. 20.000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Fasilitas Umum</TableCell>
                          <TableCell>Tempat Ibadah, Taman</TableCell>
                          <TableCell className="text-right">Rp. 15.000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="volume">
                <Card>
                  <CardHeader>
                    <CardTitle>Tarif Berdasarkan Volume Penggunaan</CardTitle>
                    <CardDescription>
                      Penyesuaian tarif berdasarkan volume air limbah yang dihasilkan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Volume (m³/bulan)</TableHead>
                          <TableHead>Faktor Pengali</TableHead>
                          <TableHead>Keterangan</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">0-10</TableCell>
                          <TableCell>1.0</TableCell>
                          <TableCell>Tarif dasar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">11-20</TableCell>
                          <TableCell>1.2</TableCell>
                          <TableCell>120% dari tarif dasar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">21-30</TableCell>
                          <TableCell>1.5</TableCell>
                          <TableCell>150% dari tarif dasar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">31-50</TableCell>
                          <TableCell>1.8</TableCell>
                          <TableCell>180% dari tarif dasar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">&gt; 50</TableCell>
                          <TableCell>2.0</TableCell>
                          <TableCell>200% dari tarif dasar</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="layanan">
                <Card>
                  <CardHeader>
                    <CardTitle>Tarif Layanan Tambahan</CardTitle>
                    <CardDescription>
                      Layanan tambahan di luar pengelolaan reguler
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Jenis Layanan</TableHead>
                          <TableHead>Tarif</TableHead>
                          <TableHead>Keterangan</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Penyedotan Terjadwal</TableCell>
                          <TableCell>Rp. 350.000</TableCell>
                          <TableCell>Per penyedotan</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Penyedotan Darurat</TableCell>
                          <TableCell>Rp. 500.000</TableCell>
                          <TableCell>Per penyedotan</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Pemeliharaan Instalasi</TableCell>
                          <TableCell>Rp. 250.000</TableCell>
                          <TableCell>Per kegiatan</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Konsultasi Teknis</TableCell>
                          <TableCell>Rp. 200.000</TableCell>
                          <TableCell>Per sesi</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Instalasi Baru</TableCell>
                          <TableCell>Mulai Rp. 2.500.000</TableCell>
                          <TableCell>Tergantung spesifikasi</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Tarif Calculator */}
      <section className="py-20 bg-cyan-50 dark:bg-cyan-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                  Kalkulator Estimasi Tarif
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Gunakan kalkulator ini untuk mengestimasi biaya layanan pengelolaan air limbah
                  berdasarkan jenis bangunan dan volume penggunaan
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
              <Card className="bg-white dark:bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    Kalkulator Tarif
                  </CardTitle>
                  <CardDescription>
                    Isi data berikut untuk menghitung estimasi tarif
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Jenis Bangunan</label>
                    <Select value={bangunan} onValueChange={setBangunan}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih jenis bangunan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rumah" className="flex items-center">
                          <div className="flex items-center">
                            <span>

                              <Home className="mr-2 h-4 w-4" />
                            </span>
                            <span>
                              Rumah Tangga
                            </span>
                          </div>
                        </SelectItem>
                        <SelectItem value="ruko">
                          <div className="flex items-center">
                            <span>
                              <Building2 className="mr-2 h-4 w-4" />
                            </span>
                            <span>
                              Komersial Kecil
                            </span>
                          </div>
                        </SelectItem>
                        <SelectItem value="hotel">
                          <div className="flex items-center">
                            <span>

                              <Building className="mr-2 h-4 w-4" />
                            </span>
                            <span>
                              Komersial Besar

                            </span>
                          </div>
                        </SelectItem>
                        <SelectItem value="institusi">
                          <div className="flex items-center">
                            <span>

                              <GraduationCap className="mr-2 h-4 w-4" />
                            </span>
                            <span>

                              Institusi
                            </span>
                          </div>
                        </SelectItem>
                        <SelectItem value="komersial">
                          <div className="flex items-center">
                            <span>

                              <Landmark className="mr-2 h-4 w-4" />
                            </span>
                            <span>
                              Fasilitas Umum

                            </span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Volume (m³/bulan)</label>
                    <Input
                      type="number"
                      min="1"
                      value={volume}
                      onChange={(e) => setVolume(parseInt(e.target.value) || 0)}
                      className="w-full"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                  >
                    Hitung Estimasi
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white dark:from-cyan-900 dark:to-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="h-5 w-5" />
                    Hasil Perhitungan
                  </CardTitle>
                  <CardDescription className="text-blue-100 dark:text-blue-200">
                    Estimasi biaya layanan bulanan
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-sm text-blue-100 dark:text-blue-200 mb-2">Estimasi Biaya</div>
                      <div className="text-4xl font-bold">{tarif ? `Rp. ${tarif.toLocaleString()}` : '-'}</div>
                      <div className="text-xs text-blue-100 dark:text-blue-200 mt-1">per bulan</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Tarif Dasar</span>
                      <span>{tarifData[bangunan as keyof typeof tarifData].toLocaleString()} / m³</span>
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
                </CardContent>
                <CardFooter className="text-xs text-blue-100 dark:text-blue-200 italic">
                  * Estimasi ini hanya perhitungan awal dan dapat berbeda dengan tarif aktual sesuai dengan kondisi sebenarnya.
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                Informasi Pembayaran
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Berbagai metode pembayaran yang tersedia untuk layanan pengelolaan air limbah
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Jatuh Tempo Pembayaran</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-2">
                          Pembayaran layanan pengelolaan air limbah dilakukan setiap bulan dengan jatuh tempo pada tanggal 20 setiap bulannya.
                        </p>
                        <p className="text-muted-foreground">
                          Keterlambatan pembayaran akan dikenakan denda sebesar 5% dari total tagihan.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Metode Pembayaran</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-1">Transfer Bank</h4>
                            <p className="text-muted-foreground text-sm">
                              Bank BRI: 1234-5678-9012-3456<br />
                              Bank BNI: 9876-5432-1098-7654<br />
                              Bank Mandiri: 4567-8901-2345-6789<br />
                              <span className="italic">a.n. UPTD Pengelolaan Air Limbah Kab. Tanah Bumbu</span>
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Kantor UPTD</h4>
                            <p className="text-muted-foreground text-sm">
                              Pembayaran langsung di kantor UPTD Pengelolaan Air Limbah Domestik<br />
                              Jam operasional: Senin-Jumat, 08.00-16.00 WITA
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Mobile Banking & E-Wallet</h4>
                            <p className="text-muted-foreground text-sm">
                              Tersedia pembayaran melalui aplikasi mobile banking dan e-wallet populer.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Prosedur Penagihan</AccordionTrigger>
                      <AccordionContent>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                          <li>Tagihan dikirimkan secara elektronik melalui email terdaftar pada awal bulan.</li>
                          <li>Notifikasi tagihan juga dikirimkan melalui SMS ke nomor telepon terdaftar.</li>
                          <li>Pelanggan dapat mengunduh tagihan di website SISENJA dengan memasukkan ID Pelanggan.</li>
                          <li>Bukti pembayaran harus disimpan sebagai referensi jika terjadi masalah.</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Penanganan Keluhan Pembayaran</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-2">
                          Jika terdapat masalah atau keluhan terkait pembayaran, pelanggan dapat menghubungi:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Customer Service: (0518) 12345678</li>
                          <li>Email: pembayaran@sipald-tala.go.id</li>
                          <li>Kunjungan langsung ke kantor UPTD</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                          Layanan pengaduan tersedia pada jam kerja (Senin-Jumat, 08.00-16.00 WITA).
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cyan-50 dark:bg-cyan-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center p-2 bg-cyan-100 dark:bg-cyan-900 rounded-full mb-4">
                <HelpCircle className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                Pertanyaan Umum Seputar Tarif
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jawaban untuk pertanyaan yang sering diajukan terkait tarif dan pembayaran
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bagaimana cara pembayaran tarif layanan?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Pembayaran dapat dilakukan melalui transfer bank, pembayaran langsung di kantor UPTD,
                      atau melalui aplikasi mobile banking dan e-wallet yang telah bekerja sama dengan kami.
                      Untuk informasi lebih lanjut, silakan lihat bagian Informasi Pembayaran di atas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Apakah ada subsidi untuk masyarakat kurang mampu?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Ya, UPTD menyediakan program subsidi untuk masyarakat kurang mampu.
                      Untuk mengajukan subsidi, silakan membawa Kartu Keluarga, KTP, dan Surat Keterangan
                      Tidak Mampu dari kelurahan/desa setempat ke kantor UPTD untuk diproses lebih lanjut.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Bagaimana jika terjadi keterlambatan pembayaran?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Keterlambatan pembayaran akan dikenakan denda sebesar 5% dari total tagihan.
                      Jika keterlambatan melebihi 3 bulan berturut-turut, layanan dapat dihentikan
                      sementara hingga pelanggan melunasi seluruh tunggakan.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Apakah tarif dapat berubah?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Ya, tarif dapat berubah sesuai dengan kebijakan pemerintah daerah dan biaya
                      operasional pengelolaan air limbah. Setiap perubahan tarif akan diinformasikan
                      kepada pelanggan minimal 3 bulan sebelum diberlakukan.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Bagaimana cara mengajukan keberatan atas tagihan yang tidak sesuai?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Pelanggan dapat mengajukan keberatan atas tagihan dengan mengisi formulir pengaduan
                      yang tersedia di kantor UPTD atau melalui website SISENJA. Tim kami akan melakukan
                      verifikasi dan memberikan respons dalam waktu maksimal 7 hari kerja.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}