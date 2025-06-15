"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WaveDivider } from "@/components/ui/wave-divider";
import { useToast } from "@/hooks/use-toast";

export default function KontakPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Pesan Terkirim",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
    });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg"
            alt="Contact background"
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
              Hubungi Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              Kami siap membantu Anda dengan informasi dan layanan pengelolaan
              air limbah domestik
            </motion.p>
          </div>
        </div>
        
        <WaveDivider color="fill-white dark:fill-background" height={80} />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-cyan-900 dark:text-cyan-50">
                    Informasi Kontak
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Silakan hubungi kami melalui berbagai cara yang tersedia atau
                    kunjungi kantor kami pada jam kerja.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">Alamat</h3>
                      <p className="text-muted-foreground">
                        Jl. Example No. 123<br />
                        Tanah Bumbu, Kalimantan Selatan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">Telepon</h3>
                      <p className="text-muted-foreground">(0518) 12345678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@sipald-tala.go.id</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">Jam Kerja</h3>
                      <p className="text-muted-foreground">
                        Senin - Jumat: 08.00 - 16.00 WITA<br />
                        Sabtu - Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2" />
                    <h3 className="font-semibold">Penting</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Untuk keadaan darurat di luar jam kerja, silakan hubungi nomor
                    darurat kami di (0518) 87654321
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-card rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-cyan-900 dark:text-cyan-50">
                    <MessageSquare className="h-6 w-6 mr-2 text-cyan-600 dark:text-cyan-400" />
                    Kirim Pesan
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nama Lengkap</label>
                        <Input
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="input-enhanced"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input-enhanced"
                          placeholder="Masukkan email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subjek</label>
                      <Select
                        value={subject}
                        onValueChange={setSubject}
                      >
                        <SelectTrigger className="input-enhanced">
                          <SelectValue placeholder="Pilih subjek" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="umum">Pertanyaan Umum</SelectItem>
                          <SelectItem value="layanan">Informasi Layanan</SelectItem>
                          <SelectItem value="pengaduan">Pengaduan</SelectItem>
                          <SelectItem value="teknis">Konsultasi Teknis</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pesan</label>
                      <Textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input-enhanced min-h-[150px]"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                    >
                      {isSubmitting ? (
                        "Mengirim..."
                      ) : (
                        <>
                          Kirim Pesan
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cyan-50 dark:bg-cyan-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-cyan-900 dark:text-cyan-50">
                Lokasi Kami
              </h2>
              <p className="text-lg text-muted-foreground">
                Kunjungi kantor UPTD Pengelolaan Air Limbah Domestik
                Kabupaten Tanah Bumbu
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src="https://images.pexels.com/photos/417023/pexels-photo-417023.jpeg"
                  alt="Location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    Peta akan dimuat di sini menggunakan Google Maps atau
                    penyedia peta lainnya
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
